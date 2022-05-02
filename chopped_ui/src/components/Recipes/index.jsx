import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

const RecipesPage = ( {recipe_query} ) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  }
    const [ans, setAns] = React.useState();

    const getAnswer = async () => {
      const res = await fetch('http://localhost:3001/api');
      const data = await res.json();
      const recipes_dict = Object.values(data);
      let wanted_recipe = "";
      for (const key in recipes_dict) {
        if (recipes_dict[key].name == 'arriba baked winter squash mexican style') {
          console.log(recipes_dict[key]);
          wanted_recipe = recipes_dict[key];
        }
      }

      setAns(wanted_recipe);
    };

    
    React.useEffect(() => {
      getAnswer();
    }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <form action={recipe_query}>
        <label for="rname"> Recipe Name: </label><br/>
        <input type="text" id="rname" name="rname"/><br/>
      </form>
    </>
  );
};

export default RecipesPage