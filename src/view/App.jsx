import React, { useState, useEffect } from 'react'
import Navbar from "../components/navbar"
import Footer from "./../components/footer/footer"
import "./App.css"
import CATEGORY from '../config/category'
import { Link } from 'react-router-dom'


function App() {
  const [blog, setBlog] = useState("https://i.pinimg.com/736x/24/68/a1/2468a19e048308eabf19eabc4a2ce7a7.jpg")
  const [title, setTitle] = useState("Gaming")
  const [link ,setlink] = useState("/gaming")
  return (
    <>
      <Navbar />
      <div className='app-banner'>
        <img src="https://i.pinimg.com/736x/45/b9/b7/45b9b705837d8669d212e7ff6b28ab19.jpg" className='app-banner-img' alt="" />
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
        <Link to= { "/blog"+  link}>  <img src={blog} alt={title} /></Link>

            <h3>{title}

            </h3>
          </div>
          <div className='app-div-3-2'>
            <h1>Categories</h1>

            {CATEGORY.map((item) => (
              <div className="app-trending" key={item.title}>
               <Link to= { "/blog"+  item.category}>  <span>
                  <img
                    src={item.img}
                    onMouseOver={() => {
                      setBlog(item.img);
                      setTitle(item.title);
                      setlink(item.category);
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