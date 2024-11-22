import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerAction } from '../../service/Action/loginRegistrarAction';
import { useDispatch } from 'react-redux';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        dispatch(registerAction(formData)); // Pass formData to the action

        navigate("/login"); // Navigate to login

        // Reset form data
        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    return (
        <div className="absolute top-0 left-0 w-full h-screen bg-black overflow-x-auto">
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                    <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">Create an Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium text-gray-600" htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium text-gray-600" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium text-gray-600" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-1 text-sm font-medium text-gray-600" htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 mb-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
