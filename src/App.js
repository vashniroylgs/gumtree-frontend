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
import CarPage from "./Components/CarPage";
import CarDetailedView from "./Components/CarDetailView";
import JobForm from "./Components/JobForm";
import JobDetailedView from "./Components/JobDetailedView";
import PostAdCategory from "./Components/CategoryDropdownSell";
import AutomobilesUploadForm from "./Components/AutomobilesUpload";
import PropertyUploadForm from "./Components/PropertyUpload";
import ElectronicsUploadForm from "./Components/Electronicsupload";
import FreelanceForm from "./Components/Freelanceupload";
import DetailedView from "./Components/DetailedView";
import FreelanceDetailedView from "./Components/FreelanceDetailView";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
function App() {
  return (
    <>
      <Header />
      <Categories />
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/properties" Component={Property} />
        <Route exact path="/electronics" Component={Electronics} />
        <Route exact path="/automobiles" Component={AutoMobiles} />
        <Route exact path="/freelancing" Component={Freelancing} />
        <Route exact path="/jobs" Component={JobSectionMain} />
        <Route exact path="/automobiles/:carDetail" Component={CarPage} />
        <Route exact path="/jobform" Component={JobForm} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/signup" Component={Signup} />
        <Route
          exact
          path="/automobiles/carDetails/:id"
          Component={CarDetailedView}
        />
        <Route
          exact
          path="/:category/:id"
          Component={DetailedView}
        />
        <Route exact path="/selectsellform" Component={PostAdCategory} />
        <Route exact path="/automobilesuploadform" Component={AutomobilesUploadForm} />
        <Route exact  path="/propertyuploadform" Component={PropertyUploadForm} />
        <Route exact  path="/elctronicsuploadform" Component={ElectronicsUploadForm} />
        <Route exact  path="/freelanceuploadform" Component={FreelanceForm} />
        <Route exact path="/jobDetail/:id" Component={JobDetailedView} />
        <Route exact path="/freelance/:id" Component={FreelanceDetailedView} />
      </Routes>
      <Homefooter />
    </>
  );
}

export default App;
