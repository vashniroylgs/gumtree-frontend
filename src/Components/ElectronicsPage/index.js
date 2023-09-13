import React from "react";
import "./index.css";
import { LuBellPlus } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineLeft } from "react-icons/ai";
import { BsCurrencyPound, BsHeart } from "react-icons/bs";

const ChooseDistannceList = [
  {
    id: 1,
    distance: "Choose Distance",
  },
  {
    id: 2,
    distance: "+ 1 mile",
  },
  {
    id: 3,
    distance: "+ 3 miles",
  },
  ,
  {
    id: 4,
    distance: "+ 5 miles",
  },
  ,
  {
    id: 5,
    distance: "+ 10 miles",
  },
  ,
  {
    id: 6,
    distance: "+ 15 miles",
  },
  ,
  {
    id: 7,
    distance: "+ 30 miles",
  },
];

const productDetailList = [
  {
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/3f40b6ce-4dab-4734-998a-f63158c9cd00/86",
    productName: "Electric fire",
    location: "Lennoxtown, Glasgow",
    cost: "50",
    day: "6 days ago",
  },
  {
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/560d9e11-3a81-4ba0-e718-b8dc9962a200/86",
    productName: "Indesit drier less used",
    location: "Luton, Bedfordshire",
    cost: "120",
    day: "1 day ago",
  },
  {
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/a82a94ec-083d-4eaf-b3ab-2f24d6d59600/86",
    productName: "Hotpoint Ultima 60cm double oven dual fuel Cooker Black",
    location: "Enfield, London",
    cost: "180",
    day: "20 hours ago",
  },
  {
    image:
      "	https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/e69fd0fc-6fa6-4179-6136-5ddaf5650000/86",
    productName: "For sale",
    location: "Edgware, London",
    cost: "300",
    day: "26 days ago",
  },
  {
    image:
      "	https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/6464f86c-89ad-4edd-3317-49e01cb89500/86",
    productName: "Bigblue Rangecooker - Select 70DF",
    location: "Caerphilly",
    cost: "400",
    day: "15 days ago",
  },
  {
    image:
      "	https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/bec9e1d2-62eb-4482-333c-98ba5efa6a00/86",
    productName:
      "75inch SAMSUNG The Frame TV (SCREEN DAMAGED) plus One Connect Box and Frame brackets",
    location: "Canvey Island, Essex",
    cost: "125",
    day: "Just now",
  },
  {
    image:
      "	https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/3322af5c-0326-444e-27e8-a6c44f438f00/86",
    productName: "Fridge Freezer (FridgeMaster)",
    location: "Sutton, London",
    cost: "125",
    day: "Just now",
  },
  {
    image:
      "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/0947ab2c-ce94-4774-b3e7-fb712c0f4b00/86",
    productName: "Solid hardwood fireplace mantle piece",
    location: "Stonehouse, Gloucestershire",
    cost: "40",
    day: "Just now",
  },
  {
    image:
      "	https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/5595c130-069f-4a3d-5c6e-ec564ff5d900/86",
    productName: "Miele gas hob and matching concealed extractor 90cm",
    location: "Highgate, London",
    cost: "100",
    day: "Just now",
  },
  {
    image:
      "	https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/9e94ae7b-f346-41f0-77dd-aaa5e3075700/86",
    productName: "Small electric oven",
    location: "Kingston, London",
    cost: "10",
    day: "Just now",
  },
];

const categoryList = [
  { id: 1, category: "Home Appliances", items: 14613 },
  { id: 2, category: "Dishwashers", items: 1342 },
  { id: 3, category: "Small Appliances", items: 113 },
  { id: 4, category: "Fridge", items: 1232 },
  { id: 5, category: "Washing Machines", items: 13232 },
  { id: 6, category: "Freezers", items: 17457 },
  { id: 7, category: "Other Appliances", items: 1636 },
];

function Electronics() {
  return (
    <div className="electronics-main-container">
      <div className="electronincs-first-container">
        <div className="electronics-top-section">
          <p>
            <span className="electronics-path">Home</span>
            <strong>/</strong>
            <span className="electronics-path">Electronics</span>
          </p>
          <h1 className="electronics-first-para">
            49,290 ads Second-Hand Kitchen Appliances for Sale
          </h1>
          <div className="electronics-button-container">
            <button className="electronics-button">
              <LuBellPlus />
              Save Search alert
            </button>
            <select className="electronics-dropdown">
              <option>Most recent</option>
              <option>Price: Low to high</option>
              <option>Price: High to Low</option>
              <option>Nearest First</option>
            </select>
          </div>
        </div>
        <div className="electronics-bottom-section">
          <div className="electronics-left-section">
            <h4>Location</h4>
            <div className="electronics-location">
              <MdLocationPin className="electronics-location-icon" />
              <input
                type="text"
                placeholder="Postalcode or Location"
                className="electronics-input"
              />
            </div>
            <div className="electronics-button-container">
              <select className="electronics-dropdown">
                {ChooseDistannceList.map((echDistance) => (
                  <option key={echDistance.id}>{echDistance.distance}</option>
                ))}
              </select>
              <button className="electronics-left-section-button">
                Update
              </button>
            </div>
            <hr />
            <h4>Category</h4>
            <p className="electronics-category-item-name">
              <AiOutlineLeft /> All Categories
            </p>
            <p className="electronics-category-item-name">
              <AiOutlineLeft /> For Sale
            </p>
            <p>Appliances</p>

            {categoryList.map((eachCatagorey) => (
              <div key={eachCatagorey.id} className="electronics-category-list">
                <p className="electronics-category-item-name">
                  {eachCatagorey.category}
                </p>
                <p className="electronics-category-item-count">
                  {eachCatagorey.items}
                </p>
              </div>
            ))}
            <hr />
            <div>
              <h4>Price</h4>
              <div className="electronics-price-inputs-container">
                <input
                  type="text"
                  placeholder="min"
                  className="electronics-price-input"
                />
                <input
                  type="text"
                  placeholder="max"
                  className="electronics-price-input"
                />
                <button className="electronics-left-section-button">
                  Update
                </button>
              </div>
            </div>
          </div>
          <div className="electronics-right-section">
            {productDetailList.map((eachProduct) => (
              <div className="electronics-right-section-card">
                <img
                  src={eachProduct.image}
                  className="electronics-card-image"
                />
                <div className="electronics-card-text-container">
                  <div className="electronics-card-first-container">
                    <h1 className="electronics-right-section-card-heading">
                      {eachProduct.productName}
                    </h1>
                    <p className="electronics-right-section-card-para">
                      {eachProduct.location}
                    </p>
                    <p className="electronics-card-price">
                      <BsCurrencyPound />
                      {eachProduct.cost}
                    </p>
                  </div>
                  <div className="electronics-card-second-container">
                    <BsHeart className="electronics-card-heart" />
                    <p>{eachProduct.day}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Electronics;
