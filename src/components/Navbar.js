import React from 'react';

const Navbar = ({ setSelectedPage }) => {
  return (
    <nav>
      <ul>
        <li><button onClick={() => setSelectedPage('home')}>Home</button></li>
        <li><button onClick={() => setSelectedPage('courses')}>Courses</button></li>
        <li><button onClick={() => setSelectedPage('team')}>Team</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
