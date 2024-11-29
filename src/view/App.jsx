import React, { useState, useEffect } from 'react'
import Navbar from "../components/navbar"
import Footer from "./../components/footer/footer"
import "./App.css"
import CATEGORY from '../config/category'
import { Link } from 'react-router-dom'


function App() {
  const [blog, setBlog] = useState("https://i.pinimg.com/236x/11/2d/27/112d2768a226eaa0ec1f6d72ec237647.jpg")
  const [title, setTitle] = useState("title")
  return (
    <>
      <Navbar />
      <div className='app-banner'>
        <img src="https://i.pinimg.com/236x/41/b8/4a/41b84a984e5ce0ca543e2c7a7f0175cb.jpg " className='app-banner-img' alt="" />
      </div>
      <div className='app-container'>
        <div className='app-image-container'>
          <img src="https://i.pinimg.com/474x/44/ab/77/44ab7754ab0680b3acb231a0d5593588.jpg" className='app-image' alt="" />
          <img src="https://i.pinimg.com/474x/44/ab/77/44ab7754ab0680b3acb231a0d5593588.jpg" alt="" className='app-image' />
          <img src="https://i.pinimg.com/474x/44/ab/77/44ab7754ab0680b3acb231a0d5593588.jpg" alt="" className='app-image' />
          <img src="https://i.pinimg.com/474x/44/ab/77/44ab7754ab0680b3acb231a0d5593588.jpg" alt="" className='app-image' />
        </div>
        <div className='app-div-3'>
          <div className='app-div-3-1'>
            <img src={blog} />

            <h3>{title}

            </h3>
          </div>
          <div className='app-div-3-2'>
            <h2>categories</h2>

            {CATEGORY.map((item) => (
              <div className="app-trending" key={item.title}>
               <Link to= { "/blog"+  item.category}>  <span>
                  <img
                    src={item.img}
                    onMouseOver={() => {
                      setBlog(item.img);
                      setTitle(item.title);
                    }}
                 
                    alt={item.title}
                  />
                </span></Link>
                <h2>{item.title}</h2>
              </div>
            ))}

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App