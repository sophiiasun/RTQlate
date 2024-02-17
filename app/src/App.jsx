import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import LogIn from './pages/auth/LogIn';
import Registration from './pages/auth/Registration';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Registration/>} />
        <Route path="/login" component={<LogIn/>} />
        <Route path="/dashboard" component={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
