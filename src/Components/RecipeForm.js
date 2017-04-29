import React from 'react';

const RecipeForm = (props) => {
    if (props.open) {
        if (props.editing) {
            return (
                <div className="new-form-container">
                    <div className="new-form">
                        <div className="name-container">
                            <h3>Name:</h3>
                            <input value={props.name} onChange={props.handleRecipeNameChange} placeholder="Recipe Name" />
                        </div>
                        <div className="ingredients-container">
                            <h3>Ingredients:</h3>
                            <textarea value={props.ingredients} onChange={props.handleIngredientChange} cols="40" rows="2" placeholder="Ingredients separated by commas" />
                        </div>
                        <div className="box-btn">
                            <button className="btn" onClick={props.closeRecipeForm}>Close</button>
                            <button className="btn" onClick={props.confirmEdit}>Confirm Edit</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="new-form-container">
                    <div className="new-form">
                        <div className="name-container">
                            <h3>Name:</h3>
                            <input value={props.name} onChange={props.handleRecipeNameChange} placeholder="Recipe Name" />
                        </div>
                        <div className="ingredients-container">
                            <h3>Ingredients:</h3>
                            <textarea value={props.ingredients} onChange={props.handleIngredientChange} cols="40" rows="2" placeholder="Ingredients separated by commas" />
                        </div>
                        <div className="box-btn">
                            <button className="btn" onClick={props.closeRecipeForm}>Close</button>
                            <button className="btn" onClick={(e) => {
                                if (props.name === '' || props.ingredients === '') {
                                    alert('Please fill both fields');
                                    return;
                                }
                                props.addNewRecipe(props.name, props.ingredients);
                            }}>Confirm</button>
                        </div>
                    </div>
                </div>
            )
        }
    } else {
        return (
            <div className="btn-container">
                <button className="btn" onClick={props.openRecipeForm}>Add</button>
            </div>
        )
    }

}

export default RecipeForm;