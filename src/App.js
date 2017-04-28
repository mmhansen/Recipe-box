import React, { Component } from 'react';
import RecipeForm from './Components/RecipeForm';
import RecipeTitle from './Components/RecipeTitle';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allRecipes: localStorage.allRecipes
    }
    this.addNewRecipe = this.addNewRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  addNewRecipe(name, ingredients) {
    let arr = localStorage.allRecipes ? JSON.parse(this.state.allRecipes) : [];
    //Name must be unique
    let unique = arr.every((recipe) => recipe.name.toUpperCase() !== name.toUpperCase());
    if (!unique) {
      alert('This recipe already exists!');
      return;
    }

    ingredients = ingredients.split(',');
    arr.push({ name, ingredients });
    localStorage.allRecipes = JSON.stringify(arr);
    this.setState({ allRecipes: localStorage.allRecipes });
  }

  deleteRecipe(name) {
    let arr = JSON.parse(this.state.allRecipes);
    arr.forEach((recipe, ind) => { if (recipe.name === name) { arr.splice(ind, 1) } })
    localStorage.allRecipes = JSON.stringify(arr);
    this.setState({ allRecipes: localStorage.allRecipes });
  }

  render() {
    return (
      <div className="App">
        <div className="recipe-box-container">
          <h1 className="header">Recipe-Box</h1>
          <div className="recipe-container">
            <RecipeTitle deleteRecipe={this.deleteRecipe} allRecipes={this.state.allRecipes} />
          </div>
        </div>
        <RecipeForm addNewRecipe={this.addNewRecipe} />
      </div>
    )
  }
}

export default App;
