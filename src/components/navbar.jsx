import React from 'react'
import { NavLink } from 'react-router-dom'

import './navbar.css'
function navbar() {
    const navbarData=[
        {name:"Home",
            link:"/"
        },
        {name:"Contact",
            link:"/contact"
        },
        {name:"About",
            link:"/about"
        },
           ]
    return (

        
        <div className='navbar-body'>
            <div className='navbar-parent-container'>
                <div className='navbar-child-container'>
                    
                </div>
                <div className='navbar-child-container2'>
                   {navbarData.map((item,index)=> 
                     <NavLink
                        to={item.link}
                        style={
                            ({ isactive }) =>
                            isactive ? { color: "red" } : { color: "black" }}    className="navlink"     >
                           
                         {   item.name}
                           
                    </NavLink> )}
                </div>
            </div>
        </div>
    )
}

export default navbar