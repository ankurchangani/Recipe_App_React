
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../fierbase";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const recipeDoc = await getDoc(doc(db, "recipes", id));
                if (recipeDoc.exists()) {
                    setRecipe(recipeDoc.data());
                } else {
                    console.error("Recipe not found");
                }
            } catch (error) {
                console.error("Error fetching recipe details:", error);
            }
        };

        fetchRecipeDetails();
    }, [id]);

    if (!recipe) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-gray-600 text-lg">Loading...</div>
            </div>
        );
    }

    // Split and filter instructions
    const instructions = recipe.instructions
        ? recipe.instructions.split("\n").filter((step) => step.trim() !== "")
        : [];

    // Split ingredients into a list
    const ingredients = recipe.ingredients
        ? recipe.ingredients.split(",").map((item) => item.trim())
        : [];

    const handleBack = () => {
        navigate("/viewrecipe");
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center py-4">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full relative">
                {/* Back Button */}
                <button
                    onClick={handleBack}
                    className="absolute top-4 left-4 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition"
                >
                    <ArrowLeftIcon className="h-6 w-6" />
                    <span className="text-sm font-medium"></span>
                </button>

                {/* Recipe Image */}
                {recipe.image && (
                    <div className="flex justify-center mb-6">
                        <img
                            src={recipe.image}
                            alt="Recipe"
                            className="rounded-lg max-w-full h-auto"
                        />
                    </div>
                )}

                {/* Recipe Title */}
                <h1 className="text-4xl font-bold text-gray-800">{recipe.title}</h1>

                {/* Ingredients */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6 text-left">Ingredients:</h2>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2 text-left">
                    {ingredients.map((ingredient, index) => (
                        <li key={index} className="text-lg">
                            {ingredient}
                        </li>
                    ))}
                </ul>

                {/* Instructions */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">Instructions:</h2>
                <div className="bg-gray-50 p-4 rounded-lg shadow-md mt-4 space-y-4 text-left">
                    {instructions.map((step, index) => (
                        <div
                            key={index}
                            className="text-gray-700 text-lg font-medium leading-relaxed border border-gray-200 p-4 rounded-lg"
                        >
                            <span className="text-indigo-600 font-bold">Step {index + 1}: </span>
                            {step}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;
