import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../fierbase";

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

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
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center py-4">
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
        {recipe.image && (
            <div className="flex justify-center mb-6">
                <img
                    src={recipe.image}
                    alt="Recipe"
                    className="rounded-lg max-w-full h-auto"
                />
            </div>
        )}

        <h1 className="text-4xl font-bold text-gray-800">{recipe.title}</h1>

        <p className="text-gray-600 mt-4">
            <strong>Ingredients:</strong> {recipe.ingredients}
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">Instructions:</h2>
        <ol className="list-decimal list-inside text-gray-800 mt-2 space-y-2">
            {recipe.instructions.split('\n').map((step, index) => (
                <li key={index}>Step {index + 1}: {step}</li>
            ))}
        </ol>
    </div>
</div>

    );
};

export default RecipeDetails;
