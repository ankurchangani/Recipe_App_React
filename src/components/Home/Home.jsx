

import React from 'react';
import { Link } from 'react-router-dom';
import Foodplates from '../../assets/Foodplates/foodplates.jpg';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col-reverse md:flex-row items-center justify-center h-screen bg-gray-100">
      <div className="w-full md:w-1/2 text-center md:text-left px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
          Welcome to the Recipe App!
        </h1>
        <p className="text-lg mb-6 text-gray-600">
          Discover and share your favorite recipes with ease.
        </p>
        <Link
          to="/createrecipe"
          className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-400 transition duration-300"
        >
          Add Recipes
        </Link>
      </div>

      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src={Foodplates}
          alt="Delicious Recipe"
          className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default HomePage;
