import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-between mx-6 mt-10 border-t border-black/90 text-black/90 py-4">
      <div>
        Made by Rosanne, Kelly, Carolyn & Sophia
      </div>
      {/* <div>
        Built with React, 
      </div> */}
      <div>
        <a href="https://github.com/sophiiasun/RTQlate" className="hover:underline">
          Source Code ↗
        </a>
      </div>
    </footer>
  );
};

export default Footer;
