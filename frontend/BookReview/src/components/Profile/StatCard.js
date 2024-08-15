import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StatCard = ({ title, value, icon }) => (
  <div className="bg-custom-black bg-opacity-80 rounded-lg shadow-md p-4 text-center transform hover:scale-105 transition-transform duration-300">
    <FontAwesomeIcon icon={icon} className="text-3xl text-custom-orange mb-2" />
    <h3 className="text-2xl font-bold text-custom-beige">{value}</h3>
    <p className="text-sm text-custom-violet">{title}</p>
  </div>
);
export default StatCard