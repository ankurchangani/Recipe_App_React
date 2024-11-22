


import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo/Recip.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { signoutAction, autoLoginAction } from '../../service/Action/loginRegistrarAction.js';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const { login, user, loading } = useSelector((state) => state.authReducer);


  useEffect(() => {
    dispatch(autoLoginAction());
  }, [dispatch]); 

  const handleLogout = () => {
    dispatch(signoutAction());
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (loading) {
    return (
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={Logo} alt="Recipe App Logo" className="h-10 w-10 mr-2" />
            <h1 className="text-2xl font-bold">Recipe App</h1>
          </div>
          <div>Loading...</div>
        </div>
      </header>
    );
  }

 
  //   <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg">
  //     <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
  //       <div className="flex items-center mb-4 md:mb-0">
  //         <img src={Logo} alt="Recipe App Logo" className="h-10 w-10 mr-2" />
  //         <h1 className="text-2xl font-bold">Recipe App</h1>
  //       </div>

  //       <div className="md:hidden">
  //         <button onClick={toggleMenu} className="focus:outline-none">
  //           {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
  //         </button>
  //       </div>

  //       <nav className="flex-1">
  //         <ul className={`flex ${isOpen ? 'flex-col' : 'md:flex-row'} items-center justify-center md:space-x-6 space-y-2 md:space-y-0`}>
  //           <li>
  //             <Link to="/" className="hover:text-blue-200 transition duration-200" onClick={() => setIsOpen(false)}>Home</Link>
  //           </li>
  //           <li>
  //             <Link to="/viewrecipe" className="hover:text-blue-200 transition duration-200" onClick={() => setIsOpen(false)}>View Recipes</Link>
  //           </li>
  //         </ul>
  //       </nav>

  //       <div className="flex items-center space-x-4">
  //         {!login ? (
  //           <>
  //             <Link to="/RegistrationForm" className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition">Register</Link>
  //             <Link to="/login" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">Login</Link>
  //           </>
            
  //         ) : (
  //           <>
  //             <span className="text-gray-300">Hello, {user?.email}</span>
  //             <button onClick={handleLogout} className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition">Logout</button>
  //           </>
  //         )}
  //       </div>
  //     </div>
  //   </header>
  // );


   return (
    <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={Logo} alt="Recipe App Logo" className="h-10 w-10 mr-2" />
          <h1 className="text-2xl font-bold">Recipe App</h1>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        <nav
          className={`flex-1 ${
            isOpen ? "flex flex-col" : "hidden md:flex"
          } md:flex-row items-center justify-center md:space-x-6 space-y-2 md:space-y-0`}
        >
          <Link to="/" className="hover:text-blue-200 transition duration-200">Home</Link>

          

          <Link to="/viewrecipe" className="hover:text-blue-200 transition duration-200">View Recipes</Link>
        </nav>

        <div className="flex items-center space-x-4">
          {!login ? (
            <>
              <Link
                to="/RegistrationForm"
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
              >
                Login
              </Link>
            </>
          ) : (
            <>
              <span className="text-gray-300">Hello, {user?.email}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

