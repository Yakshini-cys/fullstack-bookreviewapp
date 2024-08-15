import React from 'react';

import logo_icon from '../../Assets/icons8-ghost-64.png'
const HamburgerMenu = ({ toggleSidebar }) => (
  <button onClick={toggleSidebar} className="fixed top-4 left-4 z-20 text-custom-violet bg-transparent border-none outline-none">
  <img src={logo_icon} alt="Menu" className="h-8 w-8" />
  </button>
);

export default HamburgerMenu;
