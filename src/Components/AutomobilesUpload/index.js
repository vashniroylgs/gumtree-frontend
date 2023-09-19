import React, { Component } from "react";
import "./index.css";
import { BiPound } from "react-icons/bi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const carFeatures = [
  { id: 1, feature: "AUX/USB Input Socket" },
  { id: 2, feature: "Adjustable Steering Wheel" },
  { id: 3, feature: "Air Conditioning" },
  { id: 4, feature: "Airbag Knee Driver" },
  { id: 5, feature: "Alarm System/Remote Anti-Theft" },
  { id: 6, feature: "Alloy Wheels" },
  { id: 7, feature: "Android Auto" },
  { id: 8, feature: "Anti-lock Braking" },
  { id: 9, feature: "Apple Car Play" },
  { id: 10, feature: "Automatic Air Con/Climate Control" },
  { id: 11, feature: "Automatic Headlights with Dusk Sensor" },
  { id: 12, feature: "Automatic Stop/Start" },
  { id: 13, feature: "Bluetooth Connectivity" },
  { id: 14, feature: "Central Locking Remote Control" },
  { id: 15, feature: "Child Proof Rear Door Locks" },
  { id: 16, feature: "Cruise Control" },
  { id: 17, feature: "Curtain Airbags" },
  { id: 18, feature: "Daytime Running Lights" },
  { id: 19, feature: "Dual Front Airbags Package" },
  { id: 20, feature: "Electronic Stability Program" },
];

const carDetails = [
  {
    name: "Volkswagen Polo",
    imageUrl:
      "https://res.cloudinary.com/dcczhcvjg/image/upload/v1694512101/mqlwpjl0zetttyes7g17.jpg",
    carDetail: "volkswagen",
  },
  {
    name: "Ford Fiesta",
    imageUrl:
      "https://res.cloudinary.com/dcczhcvjg/image/upload/v1694513185/z9mjcmy2wcvxaip1l0oz.jpg",
    carDetail: "ford",
  },
  {
    name: "Honda Civic",
    imageUrl:
      "https://res.cloudinary.com/dcczhcvjg/image/upload/v1694513330/bmle1f0vd8dpfnn96kbx.jpg",
    carDetail: "honda",
  },
  {
    name: "Toyota Supra",
    imageUrl:
      "https://res.cloudinary.com/dcczhcvjg/image/upload/v1694514762/t84tanyvh9re1bxujc4f.jpg",
    carDetail: "toyota",
  },
  {
    name: "Land Rover Defender",
    imageUrl:
      "https://res.cloudinary.com/dcczhcvjg/image/upload/v1694514972/a30rlsw3q9c6p6gcjveq.jpg",
    carDetail: "landrover",
  },
  {
    name: "Toyota Hilux",
    imageUrl:
      "https://res.cloudinary.com/dcczhcvjg/image/upload/v1694515368/fapsm4ewhwebwfq82av2.jpg",
    carDetail: "toyota",
  },
  {
    name: "Audi A3",
    imageUrl:
      "https://res.cloudinary.com/dcczhcvjg/image/upload/v1694515497/y5uwcljmgrahivmanhmn.jpg",
    carDetail: "audi",
  },
];

export class AutomobilesUploadForm extends Component {
  state = {
    vehicleNumber: "",
    features: [],
    title: "",
    description: "",
    price: "",
    showMore: false,
    images: [],
    selectedCar: "Volkswagen Polo",
  };

  takeVehicleNumber = (event) => {
    event.preventDefault();
    this.setState({ vehicleNumber: event.target.value });
  };
  takePrice = (event) => {
    event.preventDefault();
    this.setState({ price: event.target.value });
  };
  takeTitle = (event) => {
    event.preventDefault();
    this.setState({ title: event.target.value });
  };
  takeDescription = (event) => {
    event.preventDefault();
    this.setState({ description: event.target.value });
  };

  showAll = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  handleImageChange = (e) => {
    const files = e.target.files;
    this.setState({ images: [...files] }); // Use spread operator to create a new array
  };

  toggleCheckbox = (event) => {
    const { value, checked } = event.target;
    this.setState((prevState) => {
      if (checked) {
        // Add the checked item to the list
        return { features: [...prevState.features, value] };
      } else {
        // Remove the unchecked item from the list
        return {
          features: prevState.features.filter((item) => item !== value),
        };
      }
    });
  };
  handleCarChange = (event) => {
    this.setState({ selectedCar: event.target.value });
  };
  postCarDetails = (e) => {
    e.preventDefault();
    const { price, description, selectedCar, title, features, vehicleNumber } =
      this.state;
    const formData = new FormData();
    formData.append("price", price);
    formData.append("description", description);
    formData.append("title", title); // Renamed 'price' to 'cost'
    formData.append("vehicleNumber", vehicleNumber); // Added 'vehicleNumber'
    formData.append("features", features.join(" "));
    for (let i = 0; i < this.state.images.length; i++) {
      formData.append("images", this.state.images[i]);
    }
    formData.append("selectedCar", selectedCar); // Added 'selectedCar'
    console.log(formData);
    fetch("http://localhost:3009/addautomobile", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response data as needed
        const navigate = useNavigate("");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { vehicleNumber, title, description, price, showMore, features } =
      this.state;
    const showMoreClassName = showMore
      ? "upload-form-list-container-show-more"
      : "upload-form-list-container";
    console.log(vehicleNumber, title, price, description);
    return (
      <div className="upload-form-main-container">
        <div className="upload-form-sub-container">
          <h1 className="upload-form-sub-container-heading">Sell an Car</h1>
          <div className="upload-form-image-upload-main-container">
            <h4 className="upload-form-vehicle-container-heading">Photos</h4>
            <div className="upload-form-image-first-container">
              <div className="upload-form-image-sub-container">
                <div className="upload-form-image-container">
                  <input
                    className="upload-form-image-input"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    name="images"
                    multiple
                    onChange={this.handleImageChange}
                  />
                  <label
                    htmlFor="fileupload"
                    className="upload-form-image-label"
                  >
                    Add photos
                  </label>
                </div>
                <p className="upload-form-image-para">Accepts .jpg,and .png</p>
              </div>
              <div>
                <p>Add up to 10 photos. More photos get more replies</p>
              </div>
            </div>
          </div>
          <div>
            <h2>Select a Car:</h2>
            <select
              value={this.state.selectedCar}
              onChange={this.handleCarChange}
            >
              {carDetails.map((each) => (
                <option value={each.name}>{each.name}</option>
              ))}
            </select>
          </div>
          <p>You selected: {this.state.selectedCar}</p>
          <div className="upload-form-vehicle-container">
            <h2 className="upload-form-vehicle-container-heading">
              Vehicle specification*
            </h2>
            <h4 className="upload-form-vehicle-container-heading-2">
              Enter the licence plate number*
            </h4>
            <div className="upload-form-vehicle-input-container">
              <input
                className="upload-form-vehicle-input"
                type="text"
                placeholder="ENTER REG"
                onChange={this.takeVehicleNumber}
                value={vehicleNumber}
              />
              <button className="upload-form-vehicle-button">
                Look up details
              </button>
            </div>
          </div>
          <div className="upload-from-vehicle-features">
            <h1 className="upload-form-vehicle-container-heading">
              Vehicle standard features
            </h1>
            <div className={showMoreClassName}>
              {carFeatures.map((eachFeature) => (
                <li
                  key={eachFeature.id}
                  className="upload-from-vehicle-features-list"
                >
                  <input
                    type="checkbox"
                    value={eachFeature.feature}
                    checked={this.state.features.includes(eachFeature.feature)}
                    onChange={this.toggleCheckbox}
                  />
                  <label className="upload-form-list-label">
                    {eachFeature.feature}
                  </label>
                </li>
              ))}
            </div>
            <p>{features.length} features added</p>
            <p className="upload-form-see-more-link" onClick={this.showAll}>
              {showMore ? "show less" : "See more features"}
            </p>
          </div>
          <div className="upload-form-title-container">
            <h1 className="upload-form-vehicle-container-heading">Title*</h1>
            <input
              type="text"
              className="upload-form-title-input"
              onChange={this.takeTitle}
              value={title}
            />
          </div>
          <div className="upload-form-description-container">
            <h3 className="upload-form-vehicle-container-heading">
              Description *
            </h3>
            <textarea
              className="upload-form-description-text-area"
              onChange={this.takeDescription}
              value={description}
            ></textarea>
          </div>
          <div className="upload-form-price-container">
            <h3 className="upload-form-vehicle-container-heading">Price *</h3>
            <div className="upload-form-price-input-container">
              <BiPound className="upload-form-price-icon" />
              <input
                type="text"
                className="upload-form-price-input"
                onChange={this.takePrice}
                value={price}
              />
            </div>
          </div>
          <div>
            <h1 className="upload-form-contact-details-heading">
              Contact Details *
            </h1>
            <div className="upload-form-contact-details-container">
              <p className="upload-form-contact-details-sub-heading">
                Your Contact Name:{" "}
                <span className="upload-form-contact-details-sub-heading-span">
                  Vashni Roy
                </span>
              </p>
              <p className="upload-form-contact-details-sub-heading">
                Location:{" "}
                <span className="upload-form-contact-details-sub-heading-span">
                  Hyderbad
                </span>
              </p>
              <p className="upload-form-contact-details-sub-heading">
                Email:{" "}
                <span className="upload-form-contact-details-sub-heading-span">
                  vashniroy@gmail.com
                </span>
              </p>
              <p className="upload-form-contact-details-sub-heading">
                Phone:{" "}
                <span className="upload-form-contact-details-sub-heading-span">
                  1234567890
                </span>
              </p>
            </div>
          </div>
          <div className="upload-form-email-related-caution-container">
            <BsFillInfoCircleFill className="upload-form-email-related-caution-icon" />
            <p className="upload-form-email-related-caution-description">
              All emails replies are sent via Bquest message centre. To
              determine and identify potential fraud, spam or suspicious
              behaviour, we anonymise your email address, and reserve the right
              to monitor conversations.
            </p>
          </div>
          <button
            className="upload-form-post-my-car-button"
            onClick={this.postCarDetails}
          >
            Post my Ad
          </button>
          <p className="upload-form-terms-and-conditions-text">
            By selecting Post My Ad you agree you've read and accepted our Terms
            of Use and Posting Rules. Please see our Privacy Notice for
            information regarding the processing of your data.
          </p>
        </div>
      </div>
    );
  }
}

export default AutomobilesUploadForm;
