import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
const Header = () => {
    const HandleLogout = () => {
        sessionStorage.clear()
        window.location.href = "/Login"
    }
    const [showMobile,setShowMobile ] = useState(false)
    const handleShow = ()=>{
        setShowMobile(!showMobile)
    }
    const handleClose = ()=>{
        setShowMobile(false)
 
    }
    return (
        <div className='header glass'>
            <div className='logo postion-fixed '>
               
                <div className=' menu text-left'>
                <h2 >Rug Houzz</h2>
                <i onClick={handleShow} className="ri-menu-2-line menus "></i>
                </div>
            </div>
            <div className={`verticle-navbar ${showMobile ? 'lefts':''} `}>
                <nav className='navbars'>
                    <ul>
                        <li onClick={handleClose}><Link className='text-black bold' to="/" >Home</Link></li>
                        <li onClick={handleClose}><Link className='text-black bold' to="/Product">Create-Products</Link></li>
                        <li onClick={handleClose}><Link className='text-black bold' to="/All-Products">All-Products</Link></li>

                     
                        <li onClick={handleClose}><Link className='text-black bold' to="/Orders">Orders</Link></li>

                        <li onClick={handleClose}><Link className='text-black bold' to="/Shipped">Shipped</Link></li>
                        <li onClick={handleClose}><Link className='text-black bold' to="/contact-details">Contact-details</Link></li>
                        <li onClick={handleClose}><Link className='text-black bold' to="/Users">Users</Link></li>



                        <li onClick={HandleLogout}><Link className='text-black bold'>Logout</Link></li>


                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header