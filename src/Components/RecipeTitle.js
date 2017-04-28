import React from 'react';
import Recipe from './Recipe';

const RecipeTitle = (props) => {
    let allRecipes = props.allRecipes ? JSON.parse(props.allRecipes) : '';
    if (allRecipes) {
        return (
            <div>
                {allRecipes.map((recipe) =>
                    <div className="recipe-info-container" key={recipe.name}>
                        <Recipe
                            deleteRecipe={props.deleteRecipe}
                            name={recipe.name}
                            ingredients={recipe.ingredients}
                        />
                    </div>
                )}
            </div>
        )
    } else {
        return null;
    }
}

export default RecipeTitle