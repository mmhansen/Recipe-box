import React, { Component } from 'react';

class RecipeForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ingredients: '',
            open: false
        };

        this.openRecipeForm = this.openRecipeForm.bind(this);
        this.closeRecipeForm = this.closeRecipeForm.bind(this);
        this.handleRecipeNameChange = this.handleRecipeNameChange.bind(this);
        this.handleIngredientChange = this.handleIngredientChange.bind(this);
    }

    openRecipeForm(e) {
        this.setState({ open: true });
    }

    closeRecipeForm(e) {
        this.setState({ open: false });
        this.setState({ name: '' });
        this.setState({ ingredients: '' });
    }

    handleRecipeNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleIngredientChange(e) {
        this.setState({ ingredients: e.target.value });
    }

    render() {
        if (this.state.open) {
            return (
                <div className="new-form-container">
                    <div className="new-form">
                        <div className="name-container">
                            <h3>Name:</h3>
                            <input value={this.state.name} onChange={this.handleRecipeNameChange} placeholder="Recipe Name" />
                        </div>
                        <div className="ingredients-container">
                            <h3>Ingredients:</h3>
                            <textarea value={this.state.ingredients} onChange={this.handleIngredientChange} cols="40" rows="2" placeholder="Ingredients separated by commas" />
                        </div>
                        <div className="box-btn">
                            <button className="btn" onClick={this.closeRecipeForm}>Close</button>
                            <button className="btn" onClick={(e) => {
                                if (this.state.name === '' || this.state.ingredients === '') {
                                    alert('Please fill both fields');
                                    return;
                                }
                                this.props.addNewRecipe(this.state.name, this.state.ingredients);
                                this.setState({ name: '' });
                                this.setState({ ingredients: '' });
                            }}>Confirm</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="btn-container">
                    <button className="btn" onClick={this.openRecipeForm}>Add</button>
                </div>
            )
        }
    }
}

export default RecipeForm;