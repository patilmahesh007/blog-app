import React from 'react'
import Navbar from "../../components/navbar"
import { useParams } from 'react-router-dom'
import './blog.css'
import BLOGS from '../../config/blogs'

function Blog() {
    const { category } = useParams()

    const filteredBlogs = BLOGS.filter((item) => item.category === "/" + category)

    console.log(filteredBlogs)

    return (
        <div className='blog-body'>
            <Navbar />
            <div>
                {filteredBlogs.length > 0 ? (
                    filteredBlogs.map(({ title, img, description }, index) => (
                        <div className="blog-container" key={index}>

                            <span className="blog-container1" ><img src={img} alt={title} /></span>
                            <span  className="blog-container2"><h1>{title}</h1>
                                <p>{description}</p></span>

                        </div>
                    ))
                ) : (
                    <p>No blogs found for this category.</p>
                )}
            </div>
        </ div>
    )
}

export default Blog
