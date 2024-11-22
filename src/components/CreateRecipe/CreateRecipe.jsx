


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../../service/Action/recipeAction';

const CreateRecipe = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    image: '',
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create recipe data with the image URL
      await addRecipe(formData, dispatch);
      navigate('/viewrecipe');
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
    setFormData({ title: '', ingredients: '', instructions: '', image: '' });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full"
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">Create a Recipe</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="title"
            id="title"
            placeholder="Enter recipe title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="ingredients">
            Ingredients
          </label>
          <textarea
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="ingredients"
            id="ingredients"
            placeholder="List ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="instructions">
            Instructions
          </label>
          <textarea
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="instructions"
            id="instructions"
            placeholder="Describe the cooking instructions"
            value={formData.instructions}
            onChange={handleChange}
            required
          />
        </div>


        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="image">
            Image URL
          </label>
          <input
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="image"
            id="image"
            placeholder="Enter image URL"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>


        <button
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-500 transition duration-200 w-full"
          type="submit"
        >
          Add Recipe
        </button>

      </form>
    </div>
  );
};

export default CreateRecipe;
