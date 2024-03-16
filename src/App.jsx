import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import WantToCook from "./components/WantToCook/WantToCook";

const App = () => {
  const [wantToCook, setWantToCook] = useState([]);

  const handleWantToCook = (recipe) => {
    const newCookItem = [...wantToCook, recipe];
    setWantToCook(newCookItem);
    console.log(wantToCook);
  };
  return (
    <>
      <header className="container mx-auto">
        <Header></Header>
      </header>
      <main className="container mx-auto px-4 md:px-0">
        <Banner></Banner>
        <div className="text-center mt-28">
          <h2 className="text-3xl font-bold">Our Recipes</h2>
          <p className="py-6 max-w-3xl mx-auto">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer.
          </p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          <div className="col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Recipes handleWantToCook={handleWantToCook}></Recipes>
            </div>
          </div>
          <div className="col-span-2 border rounded-xl py-5 text-center h-fit">
            <WantToCook wantToCook={wantToCook}></WantToCook>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
