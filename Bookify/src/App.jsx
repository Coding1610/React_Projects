import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import List_Page from './Pages/List_Page'
import Home_Page from './Pages/Home_Page'
import Login_Page from './Pages/Login_Page'
import Order_Page from './Pages/Order_Page'
import Register_Page from './Pages/Register_Page'
import BookDetails_Page from './Pages/BookDetails_Page'
import OrderDetails_Page from './Pages/OrderDetails_Page'

export default function App() {
  return (
    <>
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home_Page/>}/>
          <Route path='/register' element={<Register_Page/>}/>
          <Route path='/login(logout)' element={<Login_Page/>}></Route>
          <Route path='/booklists' element={<List_Page/>}/>
          <Route path='/book/view/:bookID' element={<BookDetails_Page/>} />
          <Route path='/book/order' element={<Order_Page/>}/>
          <Route path='/book/order/:bookID' element={<OrderDetails_Page/>}/>
        </Routes>
    </div>
    </>
  )
}