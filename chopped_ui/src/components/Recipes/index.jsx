import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

const RecipesPage = ( {recipe_query} ) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  }

  let searchString = "";

  const handleSearch = event => {
    searchString = event.target.value.trim().toLowerCase()
    // you may want to update the displayed HTML here too
    document.getElementById("rname").innerHTML = searchString;
  }
  window.onload=function(){
    document.getElementById("rname").addEventListener("input", handleSearch)
  }

    const [ans, setAns] = React.useState();

    const getAnswer = async () => {
      const res = await fetch('http://localhost:3001/api');
      const data = await res.json();
      const recipes_dict = Object.values(data);
      let wanted_recipe = searchString;
      let wanted_recipe2 = wanted_recipe.trim().toLowerCase();
      console.log(wanted_recipe);
      for (const key in recipes_dict) {
        if (recipes_dict[key].name.trim().toLowerCase().includes(wanted_recipe2)) {
          // recipes_dict[key].name == "arriba baked winter squash mexican style"
          // recipes_dict[key].name.trim().toLowerCase().includes(wanted_recipe2)
          // console.log(recipes_dict[key].name.trim().toLowerCase().includes(wanted_recipe2));
          // console.log(recipes_dict[key])
          // return(recipes_dict[key])
          console.log("here")
          wanted_recipe = recipes_dict[key]
          displayRecipe(wanted_recipe);
        }
        else{
          console.log("false");
        }
      }

      setAns(wanted_recipe);
    };

    function displayRecipe(recipe){
      var twt = document.createElement('div');
      twt.innerHTML = '<div id="tweet-container"><p id="name">' + recipe.name + '</p></div>';
      document.getElementById("tweet-container").appendChild(twt);
    }

    React.useEffect(() => {
      getAnswer();
    }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <p>{JSON.stringify(ans.name)}</p> */}
      {/* <form action={recipe_query}>
        <label for="rname"> Recipe Name: </label><br/>
       
      </form> */}
      <input type="search" id="rname" name="rname"/><br/>
      <div id="tweet-container">
        <p id = "name"></p>
      </div>
    </>
  );
};

export default RecipesPage