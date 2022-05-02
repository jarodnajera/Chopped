import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

const RecipesPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }

  const handle_submit = (event) => {
    event.preventDefault();
    
    const curr_recipe = document.getElementById('recipename').value;
    let parent = document.getElementById("recipe-container")
    removeAllChildNodes(parent);

    fetch('http://localhost:3001/api')
      .then(response => response.json())
      .then(data => displayRecipe(data[curr_recipe]))
  }

  function displayRecipe(recipe){
    var rec = document.createElement('div');
    rec.innerHTML = '<div id = "recipe-container"><p id = "recipename">' + recipe.name + '</p><p id="recipedesc">' + recipe.description + '</p>';
    document.getElementById("recipe-container").appendChild(rec);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      {/* Testing form for getting and displaying input*/}
      <h2>Search for a Recipe</h2>
      <form onSubmit={handle_submit}>
        <label htmlFor='recipename'>Recipe Name:</label><br/>
        <input type='text' id='recipename' name='recipename'/><br/>
      </form>
      <br/>
      <div id = "recipe-container">
        <p id = "recipename"></p>
        <p id = "recipedesc"></p>
      </div>
    </>
  );
};

export default RecipesPage