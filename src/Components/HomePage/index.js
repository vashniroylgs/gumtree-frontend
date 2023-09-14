import DiscoveredFinds from "../DiscoveredFinds";
import FeaturedCategories from "../FeaturedCategories";
import "./index.css";

const HomePage = () => {
  return (
    <>
      <div className="home-main-contianer" style={{backgroundColor: '#ffde22'}}>
        <div className="home-mini-all-categories-contianer">
          <FeaturedCategories />
          <DiscoveredFinds />
        </div>
      </div>
    </>
  );
};

export default HomePage;
