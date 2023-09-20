import "./index.css";
import { Navigate } from "react-router-dom";
import { Component } from "react";

class FreelanceForm extends Component {
  state = {
    name: "",
    email: "",
    location: "",
    role: "",
    experience: "",
    description: "",
    images: [],
    isSelected: false,
  };


  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleImageChange = (e) => {
    const file = e.target.files;
    console.log("called", file);
    this.setState({ images: file }); // Use spread operator to create a new array
  };

  handleJobForm = async (event) => {
    event.preventDefault();
    const { description, name, email, role, experience, location } = this.state;
    console.log(description, name, email, role);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("location", location);
    formData.append("role", role);
    formData.append("experience", experience);
    formData.append("description", description);
    for (let i = 0; i < this.state.images.length; i++) {
      formData.append("images", this.state.images[i]);
    }
    console.log(formData);
    try {
      const response = await fetch("http://localhost:3009/freelanceform", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({ success_message: data.success_msg });
        alert("Your Ad is posted succesfully");
        this.setState({ isSelected: true });
      } else {
        const data = await response.json();
        console.log(data);
        this.setState({ error_message: data.error_msg });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  render() {
    const {isSelected} = this.state
    return (
      <>
        {isSelected && <Navigate to="/" />}
        <div className="freelance-form-main-container">
          <form
            className="freelance-form-sub-container"
            onSubmit={this.handleJobForm}
          >
            <h1 className="freelance-form-main-heading">
              Apply for Freelance Job
            </h1>
            <div className="freelance-form-fill-container">
              <div className="freelance-form-input-container">
                <label className="freelance-form-input-label-name">
                  Name<span className="freelance-form-input-label-star">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter the your name"
                  className="freelance-form-input-field"
                  onChange={this.handleInputChange}
                  name="name"
                  required
                />
              </div>
              <div className="freelance-form-input-container">
                <label className="freelance-form-input-label-name">
                  Email
                  <span className="freelance-form-input-label-star">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter the your email"
                  className="freelance-form-input-field"
                  onChange={this.handleInputChange}
                  name="email"
                  required
                />
              </div>
              <div className="freelance-form-input-container">
                <label className="freelance-form-input-label-name">
                  Location
                  <span className="freelance-form-input-label-star">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter the your Location"
                  className="freelance-form-input-field"
                  onChange={this.handleInputChange}
                  name="location"
                  required
                />
              </div>
              <div className="freelance-form-input-container">
                <label className="freelance-form-input-label-name">
                  Role<span className="freelance-form-input-label-star">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter the your role"
                  className="freelance-form-input-field"
                  onChange={this.handleInputChange}
                  name="role"
                  required
                />
              </div>

              <div className="freelance-form-input-container">
                <label className="freelance-form-input-label-name">
                  Experience
                  <span className="freelance-form-input-label-star">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter the Relavant experience"
                  className="freelance-form-input-field"
                  onChange={this.handleInputChange}
                  name="experience"
                  required
                />
              </div>
              <div className="freelance-form-input-container">
                <label className="freelance-form-input-label-name">
                  Profile Photo
                  <span className="freelance-form-input-label-star">*</span>
                </label>
                <input
                  type="file"
                  placeholder="Enter the Relavant experience"
                  className="freelance-form-input-field freelance-upload-button"
                  onChange={this.handleImageChange}
                  single
                  required
                />
              </div>
              <div className="freelance-form-input-container">
                <label className="freelance-form-input-label-name">
                  Description
                  <span className="freelance-form-input-label-star">*</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Enter the Job description"
                  className="freelance-form-input-field"
                  rows="2"
                  cols="50"
                  onChange={this.handleInputChange}
                  name="description"
                  required
                />
              </div>
            </div>
            <button className="freelance-form-submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}
export default FreelanceForm;
