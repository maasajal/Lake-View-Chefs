import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <header className="container mx-auto">
        <Header></Header>
      </header>
      <main className="container mx-auto">
        <Banner></Banner>
      </main>
    </>
  );
};

export default App;
