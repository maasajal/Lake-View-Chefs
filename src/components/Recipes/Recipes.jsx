import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Recipe from "../Recipe/Recipe";

const Recipes = ({ handleWantToCook }) => {
  const [recipes, setRecipes] = useState([]);
  //   useEffect(() => {
  //     fetch("recipes.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   }, []);
  useEffect(() => {
    const recipesData = async () => {
      const response = await fetch("./recipes.json");
      const data = await response.json();
      setRecipes(data);
    };
    recipesData();
  }, []);
  return (
    <>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          recipe={recipe}
          handleWantToCook={handleWantToCook}
        ></Recipe>
      ))}
    </>
  );
};
Recipes.prototype = {
  handleWantToCook: PropTypes.func,
};
export default Recipes;
