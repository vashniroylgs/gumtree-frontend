import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Property from "./Components/PropertyPage";
import Electronics from "./Components/ElectronicsPage";
import Homefooter from "./Components/Footer";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import AutoMobiles from "./Components/Automobiles/Home";
import Freelancing from "./Components/Freelance";
import JobSectionMain from "./Components/JobSectionMain";

function App() {
  return (
    <>
      <Header />
      <Categories />
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/properties" Component={Property} />
        <Route exact path="/electronics" Component={Electronics} />
        <Route exact path="/automobiles"  Component={AutoMobiles} />
        <Route exact path="/freelancing" Component={Freelancing} />
        <Route exact path="/jobs" Component={JobSectionMain}/>
      </Routes>
      <Homefooter />
    </>
  );
}

export default App;
