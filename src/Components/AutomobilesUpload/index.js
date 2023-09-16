import React, { Component } from "react";
import "./index.css";
import { BiPound } from "react-icons/bi";
import { BsFillInfoCircleFill } from "react-icons/bs";

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

export class AutomobilesUploadForm extends Component {
  state = {
    vehicleNumber: "",
    features: [],
    title: "",
    description: "",
    price: "",
    showMore: false,
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

  postCarDetails = () => {
    const { price, description, title, features, vehicleNumber } = this.state;
  };

  render() {
    const { vehicleNumber, title, description, price, showMore, features } =
      this.state;
    console.log(features);
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
                    accept="image/*"
                    multiple
                    // onChange={this.handleImageUpload}
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
              All emails replies are sent via Gumtree message centre. To
              determine and identify potential fraud, spam or suspicious
              behaviour, we anonymise your email address, and reserve the right
              to monitor conversations.
            </p>
          </div>
          <button
            className="upload-form-post-my-car-button"
            onClick={this.postCarDetails}
          >
            Post my Car
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
