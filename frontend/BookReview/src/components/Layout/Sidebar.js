import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div className={`fixed inset-y-0 left-0 w-64 bg-[#8C69BA] text-[#d7cebd] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-30`}>
    <button onClick={toggleSidebar} className="absolute top-4 right-4 text-[#d7cebd]">
      <FontAwesomeIcon icon={faTimes} size="lg" />
    </button>
    <nav className="p-4 mt-12">
      <ul className="space-y-4">
        <li><a href="/home" className="block py-2 hover:bg-custom-purple hover:text-[#000000] hover:no-underline">Home</a></li>
        <li><a href="/browse" className="block py-2 hover:bg-custom-purple hover:text-[#000000] hover:no-underline">Browse</a></li>
        <li><a href="/my-reviews" className="block py-2 hover:bg-custom-purple hover:text-[#000000] hover:no-underline">My Reviews</a></li>
        <li><a href="/recommendations" className="block py-2 hover:bg-custom-purple hover:text-[#000000] hover:no-underline">Recommendations</a></li>
        <li><a href="/profile" className="block py-2 hover:bg-custom-purple hover:text-[#000000] hover:no-underline">Profile</a></li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
