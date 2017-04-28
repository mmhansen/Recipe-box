import React, { Component } from 'react';

class Recipe extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
            edit: false
        }

        this.toggleRecipeInfo = this.toggleRecipeInfo.bind(this);
    }

    toggleRecipeInfo(e) {
        this.state.open ? this.setState({ open: false }) : this.setState({ open: true });
    }

    editRecipe() {
        this.setState({ edit: true });
    }

    render() {
        if (this.state.open) {
            return (
                <div className="recipe-info">
                    <h2 onClick={this.toggleRecipeInfo}>{this.props.name}</h2>
                    <i onClick={(e) => { this.props.deleteRecipe(this.props.name) }} className="fa fa-trash-o icon" aria-hidden="true"></i>
                    <ul>
                        {this.props.ingredients.map((ingredient, ind) =>
                            <li key={ind}>{ingredient}</li>
                        )}
                    </ul>
                </div>
            )
        } else {
            return (
                <div className="recipe-info">
                    <h2 onClick={this.toggleRecipeInfo}>{this.props.name}</h2>
                </div>
            )
        }
    }

}

export default Recipe;