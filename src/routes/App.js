// Base
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Components
import Navbar from '../components/Navbar'
import Listado from '../pages/Listado'
import Registro from '../pages/Registro'


const App = () => {
  return  (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listado />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


