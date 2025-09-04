import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Blogs from './Pages/Blogs'
import SingleBlog from './Pages/SingleBlog'
import Login from './Pages/Login'
import ScrollToTop from './Components/ScrollToTop'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/blog/:id' element={<SingleBlog/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
