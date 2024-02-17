import React from 'react';

const Nav = () => {
  return (
    <nav className="flex justify-between px-8 my-8 w-full">
      <ul className="flex space-x-4 list-none justify-evenly text-xl">
        <li className="p-2"><a href="#">[App Name]</a></li>
      </ul>
      <ul className="flex space-x-4 list-none justify-evenly">
        <li className="p-2"><a href="#">Sign In</a></li>
        <li className="border-2 p-2 px-4 border-black rounded-full bg-black hover:bg-white hover:text-black text-white"><a href="#">Sign Up</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
