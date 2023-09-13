import Categories from "../Categories";
import DiscoveredFinds from "../DiscoveredFinds";
import FeaturedCategories from "../FeaturedCategories";
import Header from "../Header";
import "./index.css";

const HomePage = () => {
  return (
    <>
      <div className="home-main-contianer">
        <div className="home-mini-all-categories-contianer">
          <FeaturedCategories />
          <DiscoveredFinds />
        </div>
      </div>
    </>
  );
};

export default HomePage;
