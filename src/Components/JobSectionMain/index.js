import "./index.css";

//components
import FiltersGroup from "../JobFilter";
import JobCard from "../jobItemCard";

//icons
import { LuBellPlus } from "react-icons/lu";

function JobSectionMain() {
  return (
    <div className="job-section-main-container">
      <p className="job-section-navigation">
        Home <span className="job-section-navigation-sub-part">/ Jobs</span>
      </p>
      <h1 className="job-section-ads-heading">96 ads Graduate Job ads</h1>
      <div className="job-section-save-search-and-filter-container">
        <div className="job-section-save-alert-container">
          <LuBellPlus className="job-section-save-alert-icon" />
          <p className="job-section-save-alert-name">Save search alert</p>
        </div>
        <select className="job-section-select-filter-container">
          <option>Most recent first</option>
          <option>Nearest first</option>
        </select>
      </div>
      <div className="job-section-job-filter-and-job-list-container">
        <FiltersGroup />
        <JobCard />
        <div className="proprtypage-main-container2">
          <img
            className="propertypage-add2-image"
            src="https://res.cloudinary.com/dx0tk0a56/image/upload/v1694503153/Screenshot_920_lheb8k.png"
            alt=""
          />
          <img
            className="propertypage-add2-image"
            src="https://res.cloudinary.com/dx0tk0a56/image/upload/v1694503153/Screenshot_920_lheb8k.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default JobSectionMain;
