import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./blog.css";

function Blog() {
  const { category } = useParams();
  const [isAddingBlog, setIsAddingBlog] = useState(false);
  const [isUpdatingBlog, setIsUpdatingBlog] = useState(false); 
  const [updateBlogId, setUpdateBlogId] = useState(null);
  const [newBlog, setNewBlog] = useState({
    title: "",
    img: "",
    description: "",
    category: `/${category}`,
  });
  const [blogs, setBlogs] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  // Fetch blogs function
  const fetchBlogs = () => {
    const currentScrollY = window.scrollY;
    setLoading(true);
    axios
      .get("http://localhost:3000/blogs")
      .then((response) => {
        const filteredBlogs = response.data.filter(
          (item) => item.category === `/${category}`
        );
        setBlogs(filteredBlogs);
        setLoading(false);
        setTimeout(() => window.scrollTo(0, currentScrollY), 0);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
        setError("Failed to fetch blogs. Please try again later.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, [category]);

  const changeInput = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const AddBlog = () => {
    if (!newBlog.title || !newBlog.img || !newBlog.description) {
      setError("All fields are required.");
      return;
    }

    axios
      .post("http://localhost:3000/blogs", newBlog)
      .then(() => {
        console.log("Blog added successfully");
        setIsAddingBlog(false);
        setNewBlog({
          title: "",
          img: "",
          description: "",
          category: `/${category}`,
        });
        fetchBlogs();
      })
      .catch((error) => {
        console.error("Error adding blog:", error);
        setError("Failed to add the blog. Please try again.");
      });
  };


  const deleteBlog = (id) => {
    axios
      .delete(`http://localhost:3000/blogs/${id}`)
      .then(() => {
        console.log("Blog deleted successfully");
        fetchBlogs(); 
      })
      .catch((error) => {
        console.error("Error deleting blog:", error);
        setError("Failed to delete the blog. Please try again.");
      });
  };


  const editBlog = (blog) => {
    setIsUpdatingBlog(true); 
    setIsAddingBlog(true);
    setUpdateBlogId(blog.id); 
    setNewBlog({
      title: blog.title,
      img: blog.img,
      description: blog.description,
      category: blog.category,
    }); 
  };

  const updateBlog = () => {
   
    if (!newBlog.title || !newBlog.img || !newBlog.description) {
      setError("All fields are required.");
      return;
    }

    axios
      .put(`http://localhost:3000/blogs/${updateBlogId}`, newBlog)
      .then(() => {
        console.log("Blog updated successfully");
        setIsUpdatingBlog(false); 
        setIsAddingBlog(false); 
        setNewBlog({
          title: "",
          img: "",
          description: "",
          category: `/${category}`,
        });
        fetchBlogs(); 
      })
      .catch((error) => {
        console.error("Error updating blog:", error);
        setError("Failed to update the blog. Please try again.");
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="blog-body">
      <Navbar />
      <div>
        <button className="add-btn" onClick={() => setIsAddingBlog(true)}>
          Add Blog &nbsp; +
        </button>
        <hr className="blog-hr" />

        {isAddingBlog && (
          <div className="blog-add-container">
            <div className="blog-add-form">
              <h2>{isUpdatingBlog ? "Edit Blog" : "Add New Blog"}</h2>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={newBlog.title}
                onChange={changeInput}
                required
              />
              <input
                type="text"
                name="img"
                placeholder="Image URL"
                value={newBlog.img}
                onChange={changeInput}
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={newBlog.description}
                onChange={changeInput}
                required
              />
              <div className="blog-add-buttons">
                {isUpdatingBlog ? (
                  <button onClick={updateBlog}>Update</button>
                ) : (
                  <button onClick={AddBlog}>Add</button>
                )}
                <button onClick={() => setIsAddingBlog(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {blogs.length > 0 ? (
          blogs.map(({ id, title, img, description }) => (
            <div className="blog-container" key={id}>
              <span className="blog-container1">
                <img src={img} alt={title} />
              </span>
              <span className="blog-container2">
                <h1>{title}</h1>
                <p>{description}</p>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/6096/6096937.png"
                  alt="delete"
                  className="delete-btn"
                  onClick={() => deleteBlog(id)}
                />
                <button
                  className="edit-btn"
                  onClick={() =>
                    editBlog({ id, title, img, description, category })
                  }
                >
                  Edit Blog
                </button>
              </span>
            </div>
          ))
        ) : (
          <p>No blogs found for this category.</p>
        )}
      </div>
    </div>
  );
}

export default Blog;
