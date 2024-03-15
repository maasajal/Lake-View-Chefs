import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";

const App = () => {
  return (
    <>
      <header className="container mx-auto">
        <Header></Header>
      </header>
      <main className="container mx-auto px-4 md:px-0">
        <Banner></Banner>
        <Recipes></Recipes>
      </main>
    </>
  );
};

export default App;
