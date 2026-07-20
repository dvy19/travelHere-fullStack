import React from 'react'
import Register from "./pages/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login'
import PlaceDetails from './pages/PlaceDetails'
const App = () => {
  return (
    <div>

         <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register />} />
            
                <Route path="/home" element={<Home />} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/singlePlaceDetail/:id' element={<PlaceDetails/>}/>


            </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default App
