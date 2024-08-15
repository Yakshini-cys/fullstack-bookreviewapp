// src/components/Layout/Layout.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import HamburgerMenu from './HamburgerMenu';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen flex flex-col relative">
    
    <HamburgerMenu toggleSidebar={toggleSidebar} />
 
    <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    {sidebarOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleSidebar}></div>
      )}
      <div className="flex-grow">{children}</div>
      <Footer/>

     </div>
  );
};

export default Layout;
