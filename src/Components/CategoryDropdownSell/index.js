import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const PostAdCategory = () => {
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const updateCategory = (event) => {
    console.log(event.target.value);
    setCategory(event.target.value);
  };

  const submitCategory = () => {
    console.log(category);
    if (category === "electronics") {
      navigate("/electronics");
    } else if (category === "automobiles") {
      navigate("/automobilesuploadform");
    } else if (category === "jobs") {
      navigate("/jobform");
    } else if (category === "freelance") {
      navigate("/freelancing");
    } else {
      navigate("/propertyuploadform");
    }
  };

  return (
    <div className="select-category-homepage">
      <div className="select-category-mini-container">
        <h1>Post an Ad</h1>
        <h4>Category</h4>
        <p className="select-category-homepage-para">
          Tell us what you are posting:
        </p>
        <select
          className="select-category-dropdown-input"
          onChange={updateCategory}
          value={category}
        >
          <option selected value="property">Property</option>
          <option value="electronics">Electronics</option>
          <option value="automobiles">Automobiles</option>
          <option value="jobs">Jobs</option>
          <option value="freelance">Freelance</option>
        </select>
        <button onClick={submitCategory} className="category-submit-btnn">
          Continue
        </button>
      </div>
    </div>
  );
};

export default PostAdCategory;
