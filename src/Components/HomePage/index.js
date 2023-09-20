import DiscoveredFinds from "../DiscoveredFinds";
import FeaturedCategories from "../FeaturedCategories";
import "./index.css";

const HomePage = () => {
  return (
    <>
      <div className="home-main-contianer" style={{"max-width":"100vw"}}>
        <div className="home-mini-all-categories-contianer" style={{"width":"75%"}}>
          <FeaturedCategories />
          <DiscoveredFinds />
        </div>
        <div className="home-main-banner">
          <img className="banner-image-home" src="https://res.cloudinary.com/dx0tk0a56/image/upload/v1694503153/Screenshot_920_lheb8k.png" alt=""/>
          <img className="banner-image-home" src="https://res.cloudinary.com/dx0tk0a56/image/upload/v1694503153/Screenshot_920_lheb8k.png" alt=""/>
          <img className="banner-image-home" src="https://res.cloudinary.com/dx0tk0a56/image/upload/v1694503153/Screenshot_920_lheb8k.png" alt=""/>
        </div>
        {/*<div  style={{"width":"20%","display":"flex","flexDirection":"column"}}>
        <div className="ad-container1" style={{"width":"100%"}}>
        </div>
          <div className="ad-container2">
          </div>
          <div className="ad-container3">
          
          </div>
  </div>*/}
      </div>
    </>
  );
};

export default HomePage;
