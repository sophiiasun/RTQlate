import React from 'react';
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="block" aria-label="Cruip">
      <img src="blob2.png" alt="logo" />
    </Link>
  );
};

export default Logo;
