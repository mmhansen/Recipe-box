import React, { Component } from 'react';
import RecipeForm from './Components/RecipeForm';
import RecipeTitle from './Components/RecipeTitle';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    if (!localStorage) alert('Cookies must be enabled');

    this.state = {
      allRecipes: localStorage.allRecipes,
      name: '',
      ingredients: '',
      open: false,
      editing: false,
      edited: ''
    }

    this.addNewRecipe = this.addNewRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.handleRecipeNameChange = this.handleRecipeNameChange.bind(this);
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
    this.openRecipeForm = this.openRecipeForm.bind(this);
    this.closeRecipeForm = this.closeRecipeForm.bind(this);
    this.confirmEdit = this.confirmEdit.bind(this);
  }

  handleRecipeNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleIngredientChange(e) {
    this.setState({ ingredients: e.target.value });
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
    console.log(arr)
    localStorage.allRecipes = JSON.stringify(arr);
    this.setState({ allRecipes: localStorage.allRecipes });
    this.setState({ name: '' });
    this.setState({ ingredients: '' });
    console.log('added')
  }

  deleteRecipe(name) {
    let arr = JSON.parse(this.state.allRecipes);
    arr.forEach((recipe, ind) => { if (recipe.name === name) { arr.splice(ind, 1) } })
    localStorage.allRecipes = JSON.stringify(arr);
    this.setState({ allRecipes: localStorage.allRecipes });
  }

  editRecipe(name, ingredients) {
    let arr = JSON.parse(this.state.allRecipes);
    arr.forEach((recipe) => {
      if (recipe.name === name) {
        this.setState({ name: name });
        this.setState({ ingredients: ingredients.join(',') });
        this.setState({ editing: true });
        this.openRecipeForm();
        this.setState({ edited: name })
      }
    })
  }

  confirmEdit() {
    let arr = JSON.parse(this.state.allRecipes);
    arr.forEach((recipe, ind) => {
      if (recipe.name === this.state.edited) {
        arr.splice(ind, 1, { name: this.state.name, ingredients: this.state.ingredients.split(',') });
        localStorage.allRecipes = JSON.stringify(arr);
        this.setState({ allRecipes: localStorage.allRecipes });
        this.closeRecipeForm();
      }
    })
  }

  openRecipeForm(e) {
    this.setState({ open: true });
  }

  closeRecipeForm(e) {
    this.setState({ open: false });
    this.setState({ editing: false });
    this.setState({ name: '' });
    this.setState({ ingredients: '' });
  }

  render() {
    return (
      <div className="App">
        <div className="recipe-box-container">
          <h1 className="header">Recipe-Box</h1>
          <div className="recipe-container">
            <RecipeTitle editRecipe={this.editRecipe} deleteRecipe={this.deleteRecipe} allRecipes={this.state.allRecipes} />
          </div>
        </div>
        <RecipeForm
          name={this.state.name}
          ingredients={this.state.ingredients}
          addNewRecipe={this.addNewRecipe}
          handleRecipeNameChange={this.handleRecipeNameChange}
          handleIngredientChange={this.handleIngredientChange}
          openRecipeForm={this.openRecipeForm}
          closeRecipeForm={this.closeRecipeForm}
          open={this.state.open}
          editing={this.state.editing}
          confirmEdit={this.confirmEdit}
        />
      </div>
    )
  }
}

export default App;
