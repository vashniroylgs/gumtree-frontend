import DiscoveredFinds from "../DiscoveredFinds";
import FeaturedCategories from "../FeaturedCategories";
import "./index.css";

const HomePage = () => {
  return (
    <>
      <div className="home-main-contianer">
        <div className="home-mini-all-categories-contianer">
          <FeaturedCategories />
          <DiscoveredFinds />
        </div>
        
        <div className="ad-container1">
          
          </div>
          <div className="ad-container2">
          
          </div>
          <div className="ad-container3">
          
          </div>
      </div>
    </>
  );
};

export default HomePage;
