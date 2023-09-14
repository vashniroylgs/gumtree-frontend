import "./index.css";
import { v4 } from "uuid";
import { BiHeart } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { BiTimeFive } from "react-icons/bi";

const homeMoreCards = [
  {
    id: v4(),
    image:
      "https://cdn.pixabay.com/photo/2019/02/27/22/43/scooter-4025114_640.jpg",
    name: "Scooter",
    location: "Dudley, West Midlands",
    price: "£48,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Furniture",
    location: "Dudley, West Midlands",
    price: "£48,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/1841120/pexels-photo-1841120.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Car",
    location: "Dudley, West Midlands",
    price: "£48,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://cdn.pixabay.com/photo/2023/05/18/11/32/motorcycle-8002032_640.jpg",
    name: "Bike",
    location: "Dudley, West Midlands",
    price: "£48,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/2962140/pexels-photo-2962140.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Furniture",
    location: "Dudley, West Midlands",
    price: "£48,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Properties",
    location: "Dudley, West Midlands",
    price: "£48,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/690816/pexels-photo-690816.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Scooter",
    location: "Dudley, West Midlands",
    price: "£48,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/1832499/pexels-photo-1832499.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Cheethak Scooter",
    location: "Dudley, West Midlands",
    price: "£38,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Propertiy",
    location: "Dudley, West Midlands",
    price: "£38,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/1885562/pexels-photo-1885562.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Furniture",
    location: "Dudley, West Midlands",
    price: "£38,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/978249/pexels-photo-978249.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Bike",
    location: "Dudley, West Midlands",
    price: "£38,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/9828306/pexels-photo-9828306.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Car",
    location: "Dudley, West Midlands",
    price: "£38,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/13378811/pexels-photo-13378811.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Saround Speakers",
    location: "Dudley, West Midlands",
    price: "£38,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/11861422/pexels-photo-11861422.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Car",
    location: "Dudley, West Midlands",
    price: "£40,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/191042/pexels-photo-191042.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "By-Cycle",
    location: "Dudley, West Midlands",
    price: "£400",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/6449926/pexels-photo-6449926.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Smart Laptop",
    location: "Dudley, West Midlands",
    price: "£38,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/6373207/pexels-photo-6373207.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Mobile",
    location: "Dudley, West Midlands",
    price: "£38,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/9175385/pexels-photo-9175385.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Car",
    location: "Dudley, West Midlands",
    price: "£35,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/4011762/pexels-photo-4011762.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Photography set",
    location: "Dudley, West Midlands",
    price: "£38,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/3759740/pexels-photo-3759740.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Bike",
    location: "Dudley, West Midlands",
    price: "£5800",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/4089501/pexels-photo-4089501.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Instruments",
    location: "Dudley, West Midlands",
    price: "£38,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/11541442/pexels-photo-11541442.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Car",
    location: "Dudley, West Midlands",
    price: "£58,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Casio",
    location: "Dudley, West Midlands",
    price: "£38,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/2386687/pexels-photo-2386687.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "wanted Books",
    location: "Dudley, West Midlands",
    price: "£38,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/1885562/pexels-photo-1885562.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Furniture",
    location: "Dudley, West Midlands",
    price: "£38,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/5691642/pexels-photo-5691642.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Wiring set",
    location: "Dudley, West Midlands",
    price: "£38,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/15962445/pexels-photo-15962445/free-photo-of-small-office-desk-in-retro-style.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Teliphone",
    location: "Dudley, West Midlands",
    price: "£38,000.00",
    uploadduration: "3 days ago",
  },
  {
    id: v4(),
    image:
      "https://images.pexels.com/photos/3989132/pexels-photo-3989132.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Sports Bike",
    location: "Dudley, West Midlands",
    price: "£38,000.00",
    uploadduration: "3 days ago",
  },
];

const DiscoveredFinds = () => {
  return (
    <div className="discover-home-body-container d-flex flex-wrap">
      {homeMoreCards.map((image) => (
        <div key={image.id} style={{ margin: "5px" }}>
          <div style={{ margin: "0" }}>
            <img src={image.image} height="200" width="220" alt={image.name} />
            <div
              className="discover-home-card-details-section"
            >
              <div className="discover-home-location-card">
                <h3 style={{ color: "black" }}>{image.name}</h3>
                <p style={{ color: "black" }}>
                  <span>
                    <CiLocationOn />
                  </span>
                  {image.location}
                </p>
                <p style={{ color: "black" }}>
                  <span>
                    <BiTimeFive />
                  </span>
                  {image.uploadduration}
                </p>
              </div>
              <div className="discover-home-location-card">
                <BiHeart className="discover-gumtree-freelance-heart-color" />
                <h3 className="discover-gumtree-freelance-euros">
                  {image.price}
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiscoveredFinds;
