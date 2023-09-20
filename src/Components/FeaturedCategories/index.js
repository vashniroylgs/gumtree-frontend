import React from "react";
import { v4 } from "uuid";
import "./index.css";
const topData = [
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/457418/pexels-photo-457418.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "car",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Furniture",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Latest Jobs",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/2136243/pexels-photo-2136243.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Electronic Accesories",
  },
];

const homeMoreCards = [
  {
    id: v4(),
    image: "",
    name: "",
    location: "",
    price: "",
    uploadduration: "",
  },
  {
    id: v4(),
    image: "",
    name: "",
    location: "",
    price: "",
    uploadduration: "",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/1841120/pexels-photo-1841120.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "",
    location: "",
    price: "£48,000.00",
    uploadduration: "",
  },
  {
    id: v4(),
    image: "",
    name: "",
    location: "",
    price: "",
    uploadduration: "",
  },
  {
    id: v4(),
    image: "",
    name: "",
    location: "",
    price: "",
    uploadduration: "",
  },
  {
    id: v4(),
    image: "",
    name: "",
    location: "",
    price: "",
    uploadduration: "",
  },
  {
    id: v4(),
    image: "",
    name: "",
    location: "",
    price: "",
    uploadduration: "",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/1832499/pexels-photo-1832499.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "",
    location: "",
    price: "£38,000.00",
    uploadduration: "",
  },
  {
    id: v4(),
    image: "",
    name: "",
    location: "",
    price: "",
    uploadduration: "",
  },
  {
    id: v4(),
    image: "",
    name: "",
    location: "",
    price: "",
    uploadduration: "",
  },
  {
    id: v4(),
    image: "",
    name: "",
    location: "",
    price: "",
    uploadduration: "",
  },
  {
    id: v4(),
    image: "",
    name: "",
    location: "",
    price: "",
    uploadduration: "",
  },
  {
    id: v4(),
    image: "",
    name: "",
    location: "",
    price: "",
    uploadduration: "",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/11861422/pexels-photo-11861422.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "",
    location: "",
    price: "£40,000.00",
    uploadduration: "",
  },
  {
    id: v4(),
    image: "",
    name: "",
    location: "",
    price: "",
    uploadduration: "",
  },
  {
    id: v4(),
    image: "",
    name: "",
    location: "",
    price: "",
    uploadduration: "",
  },
  {
    id: v4(),
    image: "",
    name: "",
    location: "",
    price: "",
    uploadduration: "",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/9175385/pexels-photo-9175385.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "",
    location: "",
    price: "£35,000.00",
    uploadduration: "",
  },
  {
    id: v4(),
    image: "",
    name: "",
    location: "",
    price: "",
    uploadduration: "",
  },
  {
    id: v4(),
    image: "",
    name: "",
    location: "",
    price: "",
    uploadduration: "",
  },
  {
    id: v4(),
    image: "",
    name: "",
    location: "",
    price: "",
    uploadduration: "",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/11541442/pexels-photo-11541442.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "",
    location: "",
    price: "£58,000.00",
    uploadduration: "",
  },
  {
    id: v4(),
    image: "",
    name: "",
    location: "",
    price: "",
    uploadduration: "",
  },
  {
    id: v4(),
    image: "",
    name: "",
    location: "",
    price: "",
    uploadduration: "",
  },
  {
    id: v4(),
    image: "",
    name: "",
    location: "",
    price: "",
    uploadduration: "",
  },
  {
    id: v4(),
    image: "",
    name: "",
    location: "",
    price: "",
    uploadduration: "",
  },
  {
    id: v4(),
    image: "",
    name: "",
    location: "",
    price: "",
    uploadduration: "",
  },
  {
    id: 1,
    image: "",
    name: "",
    location: "",
    price: "",
    uploadduration: "",
  },
];

const FeaturedCategories = () => {
  return (
    <div className="featured-categories-main-container">
      <h2 className="featured-categories-heading">Featured Categories</h2>
      <div className="featured-home-body-container">
        {topData.map((image) => (
          <div className="featured-card" key={image.id} >
            <div className="featured-homebody-card-container">
              <img
                src={image.image}
                
                alt={image.name}
                className="featured-card-image"
              />
              <p className="featured-categories-card-title">{image.name}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="featured-categories-heading">Discover more Good Finds</h2>
    </div>
  );
};

export default FeaturedCategories;
