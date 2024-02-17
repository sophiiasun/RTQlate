import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import LogIn from './pages/auth/LogIn';
import Registration from './pages/auth/Registration';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import Recorder from './pages/Recorder';
import Results from './pages/Results';
import Setup from './pages/Setup';
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
        <Route path="/recorder" element={<Recorder/>} />
        <Route path="/results" element={<Results/>} />
        <Route path="/setup" element={<Setup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
