import React, { Component } from "react";
import "./index.css";
import { BiPound } from "react-icons/bi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const itemDetails = [
  {
    name: "Washnig Machine",
    itemDetail: "washingmachine",
  },
  {
    name: "Vending Machine",
    itemDetail: "Commercial",
  },
  {
    name: "Mobile",
    itemDetail: "mobile",
  },
  {
    name: "Audio Devices",
    itemDetail: "audiodevices",
  },
  {
    name: "Air Conditioner",
    itemDetail: "ac",
  },
  {
    name: "Refrigerator",
    itemDetail: "refrigerator",
  },
];

const MobileDetails = [
  {
    name: "Iphone",
    itemDetail: "iphone",
  },
  {
    name: "Redmi",
    itemDetail: "redmi",
  },
  {
    name: "Appo",
    itemDetail: "appo",
  },
  {
    name: "Samsung",
    itemDetail: "samsung",
  },
];

export class ElectronicsUploadForm extends Component {
  state = {
    title: "",
    description: "",
    price: "",
    images: [],
    selectedMobileType: "",
    selectedDevice: "",
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

  handleImageChange = (e) => {
    const files = e.target.files;
    this.setState({ images: [...files] }); // Use spread operator to create a new array
  };

  handleDeviceChange = (event) => {
    this.setState({ selectedDevice: event.target.value });
  };

  handleDeviceTypeChange = (event) => {
    this.setState({ selectedMobileType: event.target.value });
  };

  showPropertyLevels = () => {
    return (
      <div className="d-flex flex-column align-items-center mt-5">
        <select
          value={this.state.selectedMobileType}
          onChange={this.handleDeviceTypeChange}
        >
          {MobileDetails.map((each) => (
            <option value={each.name}>{each.name}</option>
          ))}
        </select>
        <p>You selected: {this.state.selectedMobileType}</p>
      </div>
    );
  };

  postCarDetails = (e) => {
    e.preventDefault();
    const { price, description, title, selectedMobileType, selectedDevice } =
      this.state;
    console.log(price, description, title, selectedMobileType, selectedDevice);

    const formData = new FormData();
    formData.append("price", price);
    formData.append("description", description);
    formData.append("title", title);
    formData.append("devicetype", selectedMobileType);
    formData.append("device", selectedDevice);
    for (let i = 0; i < this.state.images.length; i++) {
      formData.append("images", this.state.images[i]);
    }
    console.log(formData);
    fetch("http://localhost:3009/addelectronic", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response data as needed
        const navigate = useNavigate("")
        navigate("/")
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { title, description, price, selectedDevice, selectedMobileType } =
      this.state;

    console.log(selectedDevice, title, price, description, selectedMobileType);
    return (
      <div className="upload-form-main-container">
        <div className="upload-form-sub-container">
          <h1 className="upload-form-sub-container-heading">Sell Your Item</h1>
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
                <p className="upload-form-image-para">Accepts .jpg and .png</p>
              </div>
              <div>
                <p>Add up to 10 photos. More photos get more replies</p>
              </div>
            </div>
          </div>
          <div className="d-flex ">
            <div>
              <h2>Select a Device:</h2>
              <select
                value={this.state.selectedDevice}
                onChange={this.handleDeviceChange}
              >
                {itemDetails.map((each) => (
                  <option value={each.name}>{each.name}</option>
                ))}
              </select>
              <p>You selected: {this.state.selectedDevice}</p>
            </div>
            {selectedDevice === "Mobile" && this.showPropertyLevels()}
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

export default ElectronicsUploadForm;
