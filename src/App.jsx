import React from 'react'
import Register from "./pages/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login'
import PlaceDetails from './pages/PlaceDetails'
import UserProfile from './pages/UserProfile';
import 'leaflet/dist/leaflet.css';
const App = () => {
  return (
    <div>

         <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register />} />
            
                <Route path="/home" element={<Home />} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/singlePlaceDetail/:id' element={<PlaceDetails/>}/>
                <Route path='/userProfile' element={<UserProfile/>}/>



            </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default App
