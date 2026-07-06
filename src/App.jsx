import React from 'react'
import Register from "./pages/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
const App = () => {
  return (
    <div>

         <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register />} />
            
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default App
