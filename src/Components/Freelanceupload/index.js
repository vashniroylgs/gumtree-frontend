import "./index.css";
import { useNavigate } from "react-router-dom";
import { Component } from "react";

class FreelanceForm extends Component {
  state = {
    name: "",
    email: "",
    location: "",
    role: "",
    experience: "",
    description: "",
    photo: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleJobForm = async (event) => {
    event.preventDefault();
    const body = {
      name: this.state.name,
      email: this.state.email,
      location: this.state.location,
      role: this.state.role,
      experience: this.state.experience,
      description: this.state.description,
      photo: this.state.photo,
    };

    try {
      const response = await fetch("http://localhost:3005/freelanceform", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({ success_message: data.success_msg });
        const navigate = useNavigate("");
        navigate("/")
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
    return (
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
                Email<span className="freelance-form-input-label-star">*</span>
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
                onChange={this.handleInputChange}
                name="experience"
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
    );
  }
}
export default FreelanceForm;
