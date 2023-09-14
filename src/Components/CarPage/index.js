import React from "react";
import {
  AiOutlineBell,
  AiOutlineCaretLeft,
  AiOutlineCaretDown,
  AiOutlineHeart,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { GrCheckmark } from "react-icons/gr";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const carsDetails = [
  {
    id: 1,
    images: [
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/c1dc30ca-e0b5-4332-305f-035e9af33500/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/7b7ce648-c382-4c7b-42e0-9d8584802700/86",
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/b02f6326-eee5-4251-e10a-6f038fc50400/86",
    ],
    title:
      "2013 Audi A3 1.4 TFSI S line Euro 5 (s/s) 3dr HATCHBACK Petrol Manual",
    Company: "toyota",
    FuelType: "Petrol",
    Transmission: "Automatic",
    BodyType: "Saloon",
    Description:
      "AUDI S3 2.0 TFSI QUATTRO SALOON AUTOMATIC PETROL 2016 BLUE, IMMACULATE CONDITION, WELL MAINTAINED AND DRIVES VERY GOOD, DONE 139,000 MILES WITH FULL AUDI MAIN DEALER SERVICE HISTORY, LAST SERVICE DONE @ 138K, MOT EXPIRY MARCH 2024, SPARE KEYS, SAT NAVIGATION SYSTEM, BLACK LEATHER INTERIOR INTERIOR, ELECTRIC SEATS, HEATED SEATS, PARKING SENSORS, CRUISE CONTROL, ALL OUR CARS ARE INSPECTED AND COME WITH WARRANTY FOR YOUR PEACE OF MIND.NATIONWIDE DELIVERY SERVICE AVAILABLE.HMZ MOTORS, 35-51 Buxton Rd, Stockport, SK2 6LS",
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/c1dc30ca-e0b5-4332-305f-035e9af33500/86",
    carPrice: "£8,370.00",
    carLocation: "Dunfermline, Fife",
    Year: "2015",
  },
];

// const carsDetails = [
//   {
//     Image:
//       "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/00/s/NjgxWDEwMjQ=/z/oYoAAOSwx1dhMHX2/86",
//     Title:
//       "Luxury Penthouse Warehouse Apartment Lifestyle Location Photo Video Film Studio Space Hire London",
//     Features: ["Agency", "Date available: 09 Aug 2023", "Other"],
//     Subtitle: "Tower Hamlets, London",
//     Cost: "£1pw",
//     Time: "48 days ago",
//     company: "toyota",
//   },
//   {
//     Image:
//       "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/00/s/Njg0WDEwMjQ=/z/sJsAAOSwa4lhyxwx/86",
//     Title: "Great Artist Studio to let",
//     Features: ["Private", "Date available: 01 Oct 2023", "Other"],
//     Subtitle: "Notting Hill, London",
//     Cost: "£400pm",
//     Time: "4 days ago",
//     company: "volkswagen",
//   },
//   {
//     Image:
//       "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/00/s/NjgxWDEwMjQ=/z/oYoAAOSwx1dhMHX2/86",
//     Title:
//       "Luxury Penthouse Warehouse Apartment Lifestyle Location Photo Video Film Studio Space Hire London",
//     Features: ["Agency", "Date available: 09 Aug 2023", "Other"],
//     Subtitle: "Tower Hamlets, London",
//     Cost: "£1pw",
//     Time: "48 days ago",
//     company: "toyota",
//   },
//   {
//     Image:
//       "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/00/s/Njg0WDEwMjQ=/z/sJsAAOSwa4lhyxwx/86",
//     Title: "Great Artist Studio to let",
//     Features: ["Private", "Date available: 01 Oct 2023", "Other"],
//     Subtitle: "Notting Hill, London",
//     Cost: "£400pm",
//     Time: "4 days ago",
//     company: "volkswagen",
//   },
// ];

function CarPage() {
  const { carDetail } = useParams();
  const filteredCars = carsDetails.filter((car) => car.Company === carDetail);
  return (
    <div className="propertypage-main-container">
      <div className="propertypage-main-container1">
        <img
          className="propertpage-add1-image"
          src="https://res.cloudinary.com/dx0tk0a56/image/upload/v1694502873/Screenshot_919_kcepzv.png"
          alt=""
        />
        <div className="propertypage-main-datacontainer">
          <h3 className="propertypage-home-heading">Home / Automoblie</h3>
          <h3 className="propertypage-home-heading1">28,646 ads Property</h3>
          <div className="propertpage-home-buttons-container">
            <div className="propertypage-alert-container">
              <AiOutlineBell className="propertypage-alert-icon" />
              <p className="propertypage-alert-text">Save Search Alert</p>
            </div>
            <select className="propertypage-alert-select-container">
              <option>Most Recent Visits</option>
              <option>Nearest First</option>
            </select>
          </div>
          <div className="propertypage-data-container">
            <div className="propertypage-filter-main-container">
              <p className="propertypage-location-text">location</p>
              <div className="ppr-popup-input1-container">
                <CiLocationOn className="ppr-popup-input1-icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="INDIA"
                  className="ppr-popup-input1"
                  required
                />
              </div>
              <div className="property-page-select-container">
                <select className="propertypage-filter-select-option">
                  <option selected>Choose Distance </option>
                  <option>+1 mile</option>
                  <option>+2 mile</option>
                  <option>+3 mile</option>
                </select>
                <button className="property-page-select-update-button">
                  Update
                </button>
              </div>
              <hr style={{ margin: "15px" }} />
              <p className="propertypage-filter-category-text">Category</p>
              <div className="propertypage-all-category-container">
                <AiOutlineCaretLeft className="propertypage-all-category-icon" />
                <p className="propertypage-all-category-text">All Categories</p>
              </div>
              <div className="propertypage-filter-option-container">
                <p className="propertypage-filter-option-text2">Property</p>
                <GrCheckmark className="propertypage-filter-option-icon" />
              </div>
              <div
                style={{ marginLeft: "15%" }}
                className="propertypage-filter-option-container"
              >
                <p className="propertypage-filter-option-text">Commercial</p>
                <p className="propertypage-filter-option-text1">8874</p>
              </div>
              <div
                style={{ marginLeft: "15%" }}
                className="propertypage-filter-option-container"
              >
                <p className="propertypage-filter-option-text">To Rent</p>
                <p className="propertypage-filter-option-text1">6542</p>
              </div>
              <div
                style={{ marginLeft: "15%" }}
                className="propertypage-filter-option-container"
              >
                <p className="propertypage-filter-option-text">To Share</p>
                <p className="propertypage-filter-option-text1">6782</p>
              </div>
              <div
                style={{ marginLeft: "15%" }}
                className="propertypage-filter-option-container"
              >
                <p className="propertypage-filter-option-text">
                  Parking & Garage
                </p>
                <p className="propertypage-filter-option-text1">4523</p>
              </div>
              <div
                style={{ marginLeft: "15%" }}
                className="propertypage-filter-option-container"
              >
                <p className="propertypage-filter-option-text">For Sale</p>
                <p className="propertypage-filter-option-text1">7423</p>
              </div>
              <div className="propertypage-show-more-container">
                <p className="propertypage-show-more-text">Show 4 More</p>
                <AiOutlineCaretDown style={{ marginLeft: "10px" }} />
              </div>
            </div>
            <div className="porperty-card-main-conatiner">
              {filteredCars.map((property, index) => (
                <Link
                  to={`/automobiles/carDetails/${property.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="porperty-card-conatiner" key={index}>
                    <div className="porperty-card-image-conatiner">
                      <img
                        src={property.image}
                        alt=""
                        className="porperty-card-image-conatiner-image"
                      />
                    </div>
                    <div className="porperty-card-content-conatiner">
                      <div className="porperty-card-content-conatiner-heading-content">
                        <h1 className="porperty-card-content-conatiner-heading">
                          {property.title}
                        </h1>
                        <AiOutlineHeart
                          style={{ color: "red", fontSize: "22px" }}
                        />
                      </div>
                      <div className="porperty-card-content-conatiner-list-elements">
                        <span className="porperty-card-content-conatiner-list-element">
                          {property.Transmission}
                        </span>
                        <span className="porperty-card-content-conatiner-list-element">
                          {property.Year}
                        </span>
                        <span className="porperty-card-content-conatiner-list-element">
                          {property.FuelType}
                        </span>
                      </div>
                      <p className="porperty-card-content-conatiner-location">
                        {property.carLocation}
                      </p>
                      <div className="porperty-card-content-conatiner-cost">
                        <p className="porperty-card-content-conatiner-cost-item">
                          {property.carPrice}
                        </p>
                        <p className="porperty-card-content-conatiner-time-item">
                          {property.Time}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
               
            </div>
          </div>
        </div>
      </div>
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
  );
}

export default CarPage;
