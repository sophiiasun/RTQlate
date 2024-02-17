import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import LogIn from './pages/auth/LogIn';
import Registration from './pages/auth/Registration';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>  
        <Route path="/" element={<Landing/>} />
        <Route path="/signup" element={<Registration/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
