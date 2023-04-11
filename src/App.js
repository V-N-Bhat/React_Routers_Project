import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Route,Routes } from "react-router-dom";
import Home from './pages/Home'
import Signup from './pages/Signup';
import Login  from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from "./Components/PrivateRoute";
import About from "./pages/About";
function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return( 
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
    <Navbar  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

    <Routes>
          <Route path='/' element={
            <Home />
          } />
          <Route path='/signup' element={
            <Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
          } />
          <Route path='/login' element={
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
          } />
          <Route path='/dashboard' element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
                      <Dashboard />
            </PrivateRoute>

          } />
          <Route path="/about" element={<About />} />
    </Routes>
    </div>

  )
}

export default App;
