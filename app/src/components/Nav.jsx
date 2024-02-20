import React from 'react';
import { useAuth, AuthProvider } from "../pages/context/AuthContext";
import { Link } from 'react-router-dom';

const Nav = () => {
  const { currentUser, loading } = useAuth();

  return (
    <nav className="flex justify-between px-8 py-4 w-full fixed bg-white text-black/90">
      <ul className="flex space-x-4 list-none justify-evenly text-xl">
        <li className="px-2 pt-1 text-3xl bg-cover bg-blur backdrop-filter backdrop-blur-md rounded-lg">
          <span className="emphasis">
            <a href="/">
              RTQlate
            </a>
          </span>&nbsp; 
          <span className="text-lg italic pb-2">
            — Articulate with RTQlate today
          </span>
        </li>
      </ul>
      <ul className="flex space-x-4 list-none justify-evenly">
        {/* <li className="p-2 bg-cover bg-blur backdrop-filter backdrop-blur-md rounded-lg">
          <a href="login" className="hover:underline">Sign In</a>
        </li>
        <li className="p-2 px-4 rounded-full border-black border bg-black hover:bg-transparent hover:text-black text-white">
          <a href="signup">Sign Up</a>
        </li> */}
        {currentUser ? (
            <>
              <span className="text-white mr-2">Welcome, {currentUser.displayName}</span>
              <button onClick={() => AuthProvider.signOut() }>Logout</button>
            </>
          ) : (
            <>
              <li className="p-2 bg-cover bg-blur backdrop-filter backdrop-blur-md rounded-lg">
                <a href="login" className="hover:underline">Sign In</a>
              </li>
              <li className="p-2 px-4 rounded-full border-black/90 border bg-black/90 hover:bg-transparent hover:text-black/90 text-white">
                <a href="signup">Sign Up</a>
              </li> 
            </>
          )}
      </ul>
    </nav>
  );
}

export default Nav;
