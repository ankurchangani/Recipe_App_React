


import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateRecipes } from '../../service/Action/recipeAction';

const Updatedata = () => {
  const location = useLocation();
  const { recipes } = location.state || {};  // Ensure recipes is received correctly

  // Handling case where recipes might not be passed
  if (!recipes) {
    return <div>Recipe data is not available.</div>;  // Display message if not available
  }

  // Initializing state for the form
  const [formupdate, setFormupdate] = useState({
    title: recipes.title || '',
    ingredients: recipes.ingredients || '',
    instructions: recipes.instructions || '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormupdate({ ...formupdate, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateRecipes(recipes.id, formupdate))
      .then(() => {
        console.log("Recipe updated successfully!");
        navigate('/viewrecipe');  // Redirect to the recipe view page after update
      })
      .catch((error) => {
        console.error("Error updating recipe: ", error);
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">Update A Recipe</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="title">Recipe Title</label>
          <input
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="title"
            id="title"
            placeholder="Enter recipe title"
            value={formupdate.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="ingredients">Ingredients</label>
          <textarea
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="ingredients"
            id="ingredients"
            placeholder="List ingredients"
            value={formupdate.ingredients}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="instructions">Instructions</label>
          <textarea
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="instructions"
            id="instructions"
            placeholder="Describe the cooking instructions"
            value={formupdate.instructions}
            onChange={handleChange}
            required
          />
        </div>

   
        <button
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-500 transition duration-200 w-full"
          type="submit"
        >
          Update Recipe
        </button>
      </form>
    </div>
  );
};

export default Updatedata;
