import React from 'react';
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="block" aria-label="Cruip">
      <img src="newblob.png" alt="logo" />
    </Link>
  );
};

export default Logo;
