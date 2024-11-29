import React, { useState } from "react";
import Navbar from "../../components/navbar";
import { useParams } from "react-router-dom";
import "./blog.css";
import BLOGS from "../../config/blogs";

function Blog() {
  const { category } = useParams();
  const [isAddingBlog, setIsAddingBlog] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: "",
    img: "",
    description: "",
    category: "/" + category,
  });

  const filteredBlogs = BLOGS.filter((item) => item.category === "/" + category);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleAddBlog = () => {
    console.log("New Blog:", newBlog);
    
    setIsAddingBlog(false); 
  };

  return (
    <div className="blog-body">
      <Navbar />
      <div>
        <button
          className="add-btn"
          onClick={() => setIsAddingBlog(true)}
        >
          Add Blog &nbsp; +
        </button>
<hr className="blog-hr" />
       
        {isAddingBlog && (
          <div className="blog-add-container">
            <div className="blog-add-form">
              <h2>Add New Blog</h2>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={newBlog.title}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="img"
                placeholder="Image URL"
                value={newBlog.img}
                onChange={handleInputChange}
              />
              <textarea
                name="description"
                placeholder="Description"
                value={newBlog.description}
                onChange={handleInputChange}
              />
              <div className="blog-add-buttons">
                <button onClick={handleAddBlog}>Add</button>
                <button onClick={() => setIsAddingBlog(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* Blog List */}
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map(({ title, img, description }, index) => (
            <div className="blog-container" key={index}>
              <span className="blog-container1">
                <img src={img} alt={title} />
              </span>
              <span className="blog-container2">
                <h1>{title}</h1>
                <p>{description}</p>
              </span>
              <img
                src="https://cdn-icons-png.flaticon.com/128/6096/6096937.png"
                alt="delete"
                className="delete-btn"
                onClick={() => {
                  console.log(`Delete blog at index ${index}`);
               
                }}
              />
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
