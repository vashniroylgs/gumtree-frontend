import React, { Component } from "react";
import "./index.css";
import { BiPound } from "react-icons/bi";
import { BsFillInfoCircleFill } from "react-icons/bs";

const propertyDirection = [
  { id: 1, feature: "East" },
  { id: 2, feature: "West" },
  { id: 3, feature: "North" },
  { id: 4, feature: "South" },
];

const propertyDetails = [
  {
    name: "Plot",
    propertyDetail: "plot",
  },
  {
    name: "House",
    propertyDetail: "house",
  },
  {
    name: "Commercial",
    propertyDetail: "Commercial",
  },
];
const HouseDetails = [
  {
    name: "1 BHK",
    propertyDetail: "1BHK",
  },
  {
    name: "2 BHK",
    propertyDetail: "2BHK",
  },
  {
    name: "3 BHK",
    propertyDetail: "3BHK",
  },
];
export class PropertyUploadForm extends Component {
  state = {
    direction: "",
    title: "",
    description: "",
    price: "",
    showMore: false,
    images: [],
    selectedPropertyType: "",
    selectedPropertyLevel: "",
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
    const { value } = event.target;
    this.setState({ direction: value });
  };
  handlePropertyChange = (event) => {
    this.setState({ selectedPropertyType: event.target.value });
  };

  handlePropertyLevelChange = (event) => {
    this.setState({ selectedPropertyLevel: event.target.value });
  };

  showPropertyLevels = () => {
    return (
      <div className="d-flex flex-column align-items-center mt-5">
        <select
          value={this.state.selectedPropertyLevel}
          onChange={this.handlePropertyLevelChange}
        >
          {HouseDetails.map((each) => (
            <option value={each.name}>{each.name}</option>
          ))}
        </select>
        <p>You selected: {this.state.selectedPropertyLevel}</p>
      </div>
    );
  };

  postCarDetails = (e) => {
    e.preventDefault();
    const {
      price,
      description,
      title,
      direction,
      selectedPropertyType,
      selectedPropertyLevel,
    } = this.state;

    const formData = new FormData();
    formData.append("price", price);
    formData.append("description", description);
    formData.append("title", title);
    formData.append("propertytype", selectedPropertyType);
    formData.append("propertylevel", selectedPropertyLevel);
    formData.append("direction", direction);
    for (let i = 0; i < this.state.images.length; i++) {
      formData.append("images", this.state.images[i]);
    }
    console.log(formData);
    fetch("http://localhost:3009/addproperty", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response data as needed
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const {
      title,
      description,
      price,
      showMore,
      direction,
      selectedPropertyType,
      selectedPropertyLevel,
    } = this.state;
    const showMoreClassName = showMore
      ? "upload-form-list-container-show-more"
      : "upload-form-list-container";
    console.log(
      selectedPropertyType,
      title,
      direction,
      price,
      description,
      selectedPropertyLevel
    );
    return (
      <div className="upload-form-main-container">
        <div className="upload-form-sub-container">
          <h1 className="upload-form-sub-container-heading">
            Sell Your Property
          </h1>
          <div className="upload-form-image-upload-main-container">
            <h4 className="upload-form-vehicle-container-heading">Photos</h4>
            <div className="upload-form-image-first-container">
              <div className="upload-form-image-sub-container">
                <div className="upload-form-image-container">
                  <input
                    className="upload-form-image-input"
                    type="file"
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
                <p className="upload-form-image-para">Accepts .jpg and .png</p>
              </div>
              <div>
                <p>Add up to 10 photos. More photos get more replies</p>
              </div>
            </div>
          </div>
          <div className="d-flex ">
            <div>
              <h2>Select a Property:</h2>
              <select
                value={this.state.selectedPropertyType}
                onChange={this.handlePropertyChange}
              >
                {propertyDetails.map((each) => (
                  <option value={each.name}>{each.name}</option>
                ))}
              </select>
              <p>You selected: {this.state.selectedPropertyType}</p>
            </div>
            {selectedPropertyType === "House" && this.showPropertyLevels()}
          </div>
          {/* <div className="upload-form-vehicle-container">
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
          </div> */}
          <div className="upload-from-vehicle-features">
            <h1 className="upload-form-vehicle-container-heading">
              Prperty Direction Details:
            </h1>
            <div className={showMoreClassName}>
              {propertyDirection.map((eachFeature) => (
                <li
                  key={eachFeature.id}
                  className="upload-from-vehicle-features-list"
                >
                  <input
                    type="radio"
                    value={eachFeature.feature}
                    // checked={this.state.features.includes(eachFeature.feature)}
                    onChange={this.toggleCheckbox}
                    name="direction"
                  />
                  <label className="upload-form-list-label">
                    {eachFeature.feature}
                  </label>
                </li>
              ))}
            </div>
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

export default PropertyUploadForm;
