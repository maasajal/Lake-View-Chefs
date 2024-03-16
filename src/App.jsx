import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import WantToCook from "./components/WantToCook/WantToCook";
import Preparing from "./components/Preparing/Preparing";

const App = () => {
  const [wantToCook, setWantToCook] = useState([]);
  const [preparing, setPreparing] = useState([]);
  const [showToast, setShowToast] = useState(false);

  const handleWantToCook = (recipe) => {
    if (wantToCook.includes(recipe)) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } else {
      const newCookItem = [...wantToCook, recipe];
      setWantToCook(newCookItem);
      setShowToast(false);
    }
  };
  const handlePreparing = (prepare) => {
    const newPrepare = [...preparing, prepare];
    setPreparing(newPrepare);
    const remainingRecipes = wantToCook.filter(
      (cook) => cook.id !== prepare.id
    );
    setWantToCook(remainingRecipes);
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
            <WantToCook
              wantToCook={wantToCook}
              handlePreparing={handlePreparing}
            ></WantToCook>
            {showToast && (
              <div className="toast toast-top toast-end">
                <div className="alert alert-warning">
                  <span>You already selected this!</span>
                </div>
              </div>
            )}
            <Preparing preparing={preparing}></Preparing>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
