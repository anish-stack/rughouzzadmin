import React from 'react'
import Header from '../Header/Header'

import { Routes, Route } from 'react-router-dom'
import CreateProducts from '../Createproducts/CreateProducts'
import AllProducts from '../Products/AllProducts'
import UpdateProducts from '../Products/UpdateProducts'
import DeleteProducts from '../Products/DeleteProducts'
import AllOrders from '../Orders/AllOrders'
import Shipped from '../Orders/Shipped'
import ContactDetails from '../Contact/ContactDetails'
import ChangePassword from '../Auth/ChangePassword'
import HomePage from '../HomePage/HomePage'
import Login from '../Auth/Login'
import UsersTable from '../Auth/UserTable'

const Home = () => {
    return (
        <div className='conatiner-fluid  '>
            <div className='row'>
                <div className='col-lg-3 heights'>
                    <Header />
                </div>
                <div className='col-lg-9 mt-5 nomt '>
                    <Routes>
                    <Route path='/' element={<HomePage />} />

                        <Route path='/Product' element={<CreateProducts />} />
                        <Route path='/All-Products' element={<AllProducts />} />
                        <Route path='/Edit-Product/:id' element={<UpdateProducts />} />
                        <Route path='/Delete-Products' element={<DeleteProducts />} />
                        <Route path='/Orders' element={<AllOrders />} />
                        <Route path='/Shipped' element={<Shipped />} />
                        <Route path='/contact-details' element={<ContactDetails />} />
                        <Route path='/Change-Password' element={<ChangePassword />} />
                        <Route path='/Login' element={<Login />} />
                        <Route path='/Users' element={<UsersTable />} />




                        
                        

                    
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Home