import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/Home/Home'
import Footer from './components/layout/Footer'
import Shop from './components/Shop/Shop'
import Login from './components/auth/Login'
import AdminDashboard from './components/admin/AdminDashboard'
import ProtectedRoute from './components/auth/ProtectedRoute'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta de login (sin Navbar/Footer) */}
        <Route path="/login" element={<Login />} />
        
        {/* Rutas protegidas de admin (sin Navbar/Footer) */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Rutas públicas con layout completo */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/shop"
          element={
            <>
              <Navbar />
              <Shop />
              <Footer />
            </>
          }
        />
        
        {/* Catch all - redirigir a Home */}
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App