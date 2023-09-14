import "./index.css";
//Components
import JobFilterCard from "../JobFilterCard";
//icons
import { MdLocationOn } from "react-icons/md";
import { RiArrowDropLeftLine } from "react-icons/ri";

const BodyType = [
  {
    id: "1000000",
    label: "Any",
    posts: "99999",
  },
  {
    id: "2000000",
    label: "Car Derived Van",
    posts: "99999",
  },
  {
    id: "3000000",
    label: "Hatchback",
    posts: "99999",
  },
  {
    id: "4000000",
    label: "Saloon",
    posts: "99999",
  },
  {
    id: "5000000",
    label: "Sports",
    posts: "99999",
  },
  {
    id: "6000000",
    label: "Other",
    posts: "99999",
  },
];

const TransmissionType = [
  {
    id: 1,
    label: "Any",
    posts: "99999",
  },
  {
    id: 2,
    label: "Automatic",
    posts: "99999",
  },
  {
    id: 1,
    label: "Manual",
    posts: "99999",
  },
  {
    id: 1,
    label: "Semi-Auto",
    posts: "99999",
  },
  {
    id: 1,
    label: "Other",
    posts: "99999",
  },
];

const FuelType = [
  { id: 1, label: "Any", posts: "99999" },
  { id: 2, label: "Diesel", posts: "99999" },
  { id: 3, label: "Electric", posts: "9999" },
  { id: 4, label: "Gas", posts: "99999" },
  { id: 5, label: "Petrol", posts: "9999" },
];

const SaiFiltersGroup = () => {
  return (
    <div className="job-filters-group-container">
      <h1 className="job-filter-heading">Body Type</h1>
      <JobFilterCard FilterType={BodyType} />
      <hr className="job-filter-horizontal-line" />
      <h1 className="job-filter-heading">Fuel Type</h1>
      <JobFilterCard FilterType={FuelType} />
      <hr className="job-filter-horizontal-line" />
      <h1 className="job-filter-heading">Transmissin Type</h1>
      <JobFilterCard FilterType={TransmissionType} />
    </div>
  );
};

export default SaiFiltersGroup;
