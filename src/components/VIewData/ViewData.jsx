


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes, deleteRecipes } from '../../service/Action/recipeAction';
import { useNavigate } from 'react-router-dom';

const ViewRecipe = () => {
    const dispatch = useDispatch();

    const { recipes, loading, error } = useSelector((state) => state.recipeReducer);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error) {
        return <div>Error fetching recipes: {error.message}</div>;
    }

    const handleEdit = (recipe) => {
        navigate('/updaterecipe', { state: { recipes: recipe } });
    };

    const handleDelete = (id) => {
        dispatch(deleteRecipes(id));
    };

    return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-4">
    <h2 className="text-4xl font-extrabold mb-6 text-indigo-700">View Recipes</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((data) => (
            <div key={data.id} className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl text-left">
                
                {/* Image Section with fallback */}
                <div>
                    <img
                        src={data.image || '/path/to/fallback-image.jpg'} // Add a fallback image URL
                        alt="Recipe"
                        className="w-full h-64 object-cover rounded-md mb-4 shadow-md"
                    />
                </div>

                {/* Recipe Title */}
                <h1 className="text-2xl font-bold text-center text-gray-900 mt-4">{data.title}</h1>

                {/* Ingredients */}
                <h4 className="text-gray-700 mt-4"><strong>Ingredients:</strong></h4>
                <ul className="list-disc list-inside text-gray-800">
                    {data.ingredients.split(',').map((ingredient, index) => (
                        <li key={index}>{ingredient.trim()}</li>
                    ))}
                </ul>

                {/* Instructions Preview */}
                <h4 className="text-gray-700 mt-4"><strong>Instructions Preview:</strong></h4>
                <ul className="list-inside text-gray-800">
                    {data.instructions.split('\n').slice(0, 2).map((step, index) => (
                        <li key={index}>Step {index + 1}: {step}</li>
                    ))}
                </ul>

                {/* Contact Information - Display Chef's Contact if Available */}
                {data.chefName && (
                    <div className="mt-6 p-4 bg-indigo-50 rounded-lg shadow-md">
                        <h4 className="text-gray-700">Contact Chef:</h4>
                        <p className="text-gray-800"><strong>Name:</strong> {data.chefName}</p>
                        <p className="text-gray-800"><strong>Email:</strong> {data.chefEmail}</p>
                        <p className="text-gray-800"><strong>Phone:</strong> {data.chefPhone}</p>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-center mt-6 space-x-4">
                    <button
                        className="bg-yellow-400 text-white px-6 py-2 rounded-full hover:bg-yellow-500 transition duration-300"
                        onClick={() => handleEdit(data)}
                    >
                        Edit
                    </button>

                    <button
                        className="bg-red-400 text-white px-6 py-2 rounded-full hover:bg-red-500 transition duration-300"
                        onClick={() => handleDelete(data.id)}
                    >
                        Delete
                    </button>

                    <button
                        className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                        onClick={() => navigate(`/recipe/${data.id}`)}
                    >
                        Read More
                    </button>
                </div>
            </div>
        ))}
    </div>
</div>


    );
};

export default ViewRecipe;
