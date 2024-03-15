import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
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
      <div className="text-center mt-28">
        <h2 className="text-3xl font-bold">Our Recipes</h2>
        <p className="py-6 max-w-3xl mx-auto">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recipes.map((recipe) => (
              <Recipe recipe={recipe}></Recipe>
            ))}
          </div>
        </div>
        <div className="col-span-1"></div>
      </section>
    </>
  );
};
export default Recipes;
