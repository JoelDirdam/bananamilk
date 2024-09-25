import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Shop from './components/Shop/Shop'
const App = () => {
  return (
    <Router>
      <Navbar/>

      {/* Rutas */}
      <Routes>
        <Route path="*" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        {/* <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/> */}
      </Routes>

      <Footer/>
    </Router>
  )
}

export default App