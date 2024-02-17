import React from 'react';

const Nav = () => {
  return (
    <nav className="flex justify-between px-8 py-4 w-full fixed bg-white">
      <ul className="flex space-x-4 list-none justify-evenly text-xl">
        <li className="px-2 pt-1 text-3xl emphasis bg-cover bg-blur backdrop-filter backdrop-blur-md rounded-lg">
          <a href="#">
            RTQlit
          </a>
        </li>
      </ul>
      <ul className="flex space-x-4 list-none justify-evenly">
        <li className="p-2 bg-cover bg-blur backdrop-filter backdrop-blur-md rounded-lg">
          <a href="login" className="hover:underline">Sign In</a>
        </li>
        <li className="p-2 px-4 rounded-full border-black border bg-black hover:bg-transparent hover:text-black text-white">
          <a href="signup">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
