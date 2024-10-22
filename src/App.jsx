import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import WantToCook from "./components/WantToCook/WantToCook";
import Preparing from "./components/Preparing/Preparing";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [wantToCook, setWantToCook] = useState([]);
  const [preparing, setPreparing] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

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
    setTotalTime(totalTime + prepare.preparing_time);
    setTotalCalories(totalCalories + prepare.calories);
  };
  return (
    <>
      <header className="container mx-auto">
        <Header></Header>
      </header>
      <main className="container mx-auto px-5 mb-12">
        <Banner></Banner>
        <div className="text-center mt-28">
          <h2 className="text-3xl font-bold">Our Recipes</h2>
          <p className="py-6 max-w-3xl mx-auto leading-8">
            Dive into a treasure trove of culinary delights with Our Recipes.
            From mouthwatering mains to delectable desserts, discover a diverse
            collection of dishes to delight every palate and occasion.
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
            <Preparing
              preparing={preparing}
              totalTime={totalTime}
              totalCalories={totalCalories}
            ></Preparing>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
