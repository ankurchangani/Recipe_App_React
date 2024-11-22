// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { loginAction } from '../../service/Action/loginRegistrarAction';
// import { useDispatch } from 'react-redux';

// const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate();
  
//   const dispatch = useDispatch() ;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(formData)

//     dispatch(loginAction(formData.email , formData.password))

//     navigate('/')

//     setFormData({
//       email: '',
//       password: '',
//     })


//   };




//   return (
//     <>
//     <div className='absolute top-0 left-0  w-full h-screen bg-white overflow-x-auto'> 

//     <div className="flex items-center justify-center   bg-white">
//       <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
//         <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block mb-1 text-sm font-medium text-gray-600" htmlFor="email">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block mb-1 text-sm font-medium text-gray-600" htmlFor="password">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 mb-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
//           >
//             Login
//           </button>
//           <Link to="/RegistrationForm" className="text-sm text-gray-600 hover:text-gray-900">
//             Signup now
//           </Link>
//         </form>
//       </div>
//     </div>
//     </div>
//     </>
//   );
// };

// export default LoginForm;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginAction } from '../../service/Action/loginRegistrarAction';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(loginAction(formData.email, formData.password));
    navigate('/');
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <>
      <div className='absolute top-0 left-0  w-full h-screen bg-white overflow-x-auto '> 

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link
              to="/RegistrationForm"
              className="text-blue-600 hover:underline"
            >
              Sign up now
            </Link>
          </span>
        </div>
      </div>
    </div>
      </div>
    </>
  );
};

export default LoginForm;
