import { ImLocation } from "react-icons/im";
import React, { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import "./index.css";

const Freelancing = (props) => {
  const [electronics, setelectronics] = useState([]);
  useEffect(() => {
    // Fetch data from your server when the component mounts
    fetch(`http://localhost:3009/getelectronics`)
      .then((response) => response.json())
      .then((data) => {
        setelectronics(data.electronics);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const Category = () => (
    <div className="TotalcontractLabelInputCotainer p-3">
      <h4>Jobs</h4>
      <div className="contractLabelInputCotainer ">
        <input type="radio" id="any" name="Category" />
        <label htmlFor="any" className="ml-4">
          Any
        </label>
      </div>
      <div className="contractLabelInputCotainer ">
        <input type="radio" id="hospitality" name="Category" />
        <label htmlFor="hospitality" className="ml-4">
          Hospitality and Catering
        </label>
      </div>
      <div className="contractLabelInputCotainer">
        <input type="radio" id="property" name="Category" />
        <label htmlFor="property" className="ml-4">
          Construction and Property
        </label>
      </div>
      <div className="contractLabelInputCotainer">
        <input type="radio" id="cleaning" name="Category" />
        <label htmlFor="cleaning" className="ml-4">
          Housekeeping and Cleaning
        </label>
      </div>

      <div className="contractLabelInputCotainer ">
        <input type="radio" id="Beauty" name="Category" />

        <label htmlFor="Beauty" className="ml-4">
          Health and Beauty
        </label>
      </div>

      <div className="contractLabelInputCotainer ">
        <input type="radio" id="Arts" name="Category" />

        <label htmlFor="Arts" className="ml-4">
          Performing Arts
        </label>
      </div>

      <div className="contractLabelInputCotainer ">
        <input type="radio" id="Sales" name="Category" />

        <label htmlFor="Sales" className="ml-4">
          Sales
        </label>
      </div>

      <div className="contractLabelInputCotainer ">
        <input type="radio" id="Animals" name="Category" />

        <label htmlFor="Animals" className="ml-4">
          Animals
        </label>
      </div>

      <div className="contractLabelInputCotainer ">
        <input type="radio" id="Gardening" name="Category" />

        <label htmlFor="Gardening" className="ml-4">
          Gardening
        </label>
      </div>

      <div className="contractLabelInputCotainer ">
        <input type="radio" id="Security" name="Category" />

        <label htmlFor="Security" className="ml-4">
          Security
        </label>
      </div>

      <div className="contractLabelInputCotainer ">
        <input type="radio" id="Computer" name="Category" />

        <label htmlFor="Computer" className="ml-4">
          Computer & It
        </label>
      </div>

      <div className="contractLabelInputCotainer ">
        <input type="radio" id="Social" name="Category" />

        <label htmlFor="Social" className="ml-4">
          Social & Care Work
        </label>
      </div>

      <div className="contractLabelInputCotainer ">
        <input type="radio" id="Heritage" name="Category" />

        <label htmlFor="Heritage" className="ml-4">
          Arts & Heritage
        </label>
      </div>
    </div>
  );

  const Joblevel = () => (
    <div className="TotalcontractLabelInputCotainer p-3">
      <h4>Job Level</h4>
      <div className="contractLabelInputCotainer ">
        <input type="radio" id="any" name="Joblevel" />
        <label htmlFor="any" className="ml-4">
          Any
        </label>
      </div>
      <div className="contractLabelInputCotainer ">
        <input type="radio" id="Apprentice" name="Joblevel" />
        <label htmlFor="Apprentice" className="ml-4">
          Apprenticeship
        </label>
      </div>

      <div className="contractLabelInputCotainer">
        <input type="radio" id="exp" name="Joblevel" />
        <label htmlFor="exp" className="ml-4">
          Experienced
        </label>
      </div>
      <div className="contractLabelInputCotainer">
        <input type="radio" id="graduate" name="Joblevel" />
        <label htmlFor="graduate" className="ml-4">
          Graduate
        </label>
      </div>
      <div className="contractLabelInputCotainer ">
        <input type="radio" id="intern" name="Joblevel" />
        <label htmlFor="intern" className="ml-4">
          Intership
        </label>
      </div>
      <div className="contractLabelInputCotainer ">
        <input type="radio" id="manage" name="Joblevel" />
        <label htmlFor="manage" className="ml-4">
          Management
        </label>
      </div>
    </div>
  );
  const LocationDetails = () => {
    return (
      <div className="LocationContainer  p-3 ">
        <h4>Location</h4>
        <div className="search-input-container">
          <ImLocation className="search-icon" />
          <input type="search" className="search-input" placeholder="Search" />
        </div>
        <div className="distanceContainer mt-3">
          <select className="selected">
            <option>Choose Distance</option>
            <option>+5 miles</option>
            <option>+10 miles</option>
            <option>+25 miles</option>
            <option>+45 miles</option>
            <option>+65 miles</option>
            <option>+95 miles</option>
            <option>+100 miles</option>
          </select>

          <button className="btn btn-success">update</button>
        </div>
      </div>
    );
  };

  const ContractDetails = () => (
    <div className="TotalcontractLabelInputCotainer p-3">
      <h4>Contract Type</h4>
      <div className="contractLabelInputCotainer ">
        <input type="radio" id="any" name="contract" />
        <label htmlFor="any" className="ml-4">
          Any
        </label>
      </div>

      <div className="contractLabelInputCotainer ">
        <input type="radio" id="1" name="contract" />
        <label htmlFor="1" className="ml-4">
          contract 11 months
        </label>
      </div>

      <div className="contractLabelInputCotainer">
        <input type="radio" id="2" name="contract" />
        <label htmlFor="2" className="ml-4">
          Freelance
        </label>
      </div>

      <div className="contractLabelInputCotainer">
        <input type="radio" id="3" name="contract" />
        <label htmlFor="3" className="ml-4">
          Permanent
        </label>
      </div>

      <div className="contractLabelInputCotainer ">
        <input type="radio" id="4" name="contract" />
        <label htmlFor="4" className="ml-4">
          Self Employed
        </label>
      </div>
    </div>
  );

  const Hours = () => (
    <div className="TotalcontractLabelInputCotainer p-3">
      <h4>Hours</h4>
      <div className="contractLabelInputCotainer ">
        <input type="radio" id="any" name="Hour" />
        <label htmlFor="any" className="ml-4">
          Any
        </label>
      </div>

      <div className="contractLabelInputCotainer ">
        <input type="radio" id="10" name="Hour" />
        <label htmlFor="10" className="ml-4">
          FullTime
        </label>
      </div>

      <div className="contractLabelInputCotainer">
        <input type="radio" id="12" name="Hour" />
        <label htmlFor="12" className="ml-4">
          PartTime
        </label>
      </div>

      <div className="contractLabelInputCotainer">
        <input type="radio" id="13" name="Hour" />
        <label htmlFor="13" className="ml-4">
          Morning
        </label>
      </div>

      <div className="contractLabelInputCotainer ">
        <input type="radio" id="14" name="Hour" />
        <label htmlFor="14" className="ml-4">
          Self Evening
        </label>
      </div>
    </div>
  );

  const recruitertype = () => (
    <div className="TotalcontractLabelInputCotainer p-3">
      <h4>Recruiter Type</h4>
      <div className="contractLabelInputCotainer ">
        <input type="radio" id="5" name="Recruiter" />
        <label htmlFor="5" className="ml-4">
          Any
        </label>
      </div>

      <div className="contractLabelInputCotainer ">
        <input type="radio" id="6" name="Recruiter" />
        <label htmlFor="6" className="ml-4">
          Direct Employer
        </label>
      </div>
      <div className="contractLabelInputCotainer ">
        <input type="radio" id="7" name="Recruiter" />
        <label htmlFor="7" className="ml-4">
          Recruiter
        </label>
      </div>
    </div>
  );

  const SalaryContainer = () => (
    <div className="salaryContainer d-flex flex-column  p-3 ">
      <h4>Salary</h4>
      <select className="select p-2 mb-2">
        <option>No min</option>
        <option>10000€</option>
        <option>20000€</option>
        <option>40000€</option>
        <option>50000€</option>
        <option>60000€</option>
        <option>70000€</option>
      </select>

      <select className="select p-2 mb-2">
        <option>No max</option>
        <option>10000€</option>
        <option>20000€</option>
        <option>40000€</option>
        <option>50000€</option>
        <option>60000€</option>
        <option>70000€</option>
      </select>
    </div>
  );

  return (
    <div className="TotalFilterationContainer">
      <div className="filterationContainer   p-2">
        {LocationDetails()}
        <div className="horizontalLine ">
          <hr style={{ border: "0.5px solid gray", width: "80%" }} />
        </div>
        {Category()}
        <div className="horizontalLine ">
          <hr style={{ border: "0.5px solid gray", width: "80%" }} />
        </div>
        {ContractDetails()}
        <div className="horizontalLine ">
          <hr style={{ border: "0.5px solid gray", width: "80%" }} />
        </div>
        {recruitertype()}
        <div className="horizontalLine ">
          <hr style={{ border: "0.5px solid gray", width: "80%" }} />
        </div>
        {Hours()}
        <div className="horizontalLine ">
          <hr style={{ border: "0.5px solid gray", width: "80%" }} />
        </div>
        {Joblevel()}
        <div className="horizontalLine ">
          <hr style={{ border: "0.5px solid gray", width: "80%" }} />
        </div>
        {SalaryContainer()}
      </div>
      <div className="contentContainer">
        <div>
          <div className="gumtree-freelance-cards">
            <div className="gumtree-freelance-top-line">
              <button className="gumtree-freelance-button">Featured</button>
              <BiHeart className="gumtree-freelance-heart-color" />
            </div>
            <h1 className="gumtree-freelance-heading">Part Time Gardening</h1>
            <p className="gumtree-freelance-paragraph">Tunbridge Wells, Kent</p>
            <p className="gumtree-freelance-paragraph">Freelance</p>
            <div className="gumtree-freelance-top-line">
              <p className="gumtree-freelance-euros">10€ per hour.</p>
              <p className="gumtree-freelance-paragraph">6 days ago</p>
            </div>
          </div>
          <div className="gumtree-freelance-cards">
            <div className="gumtree-freelance-top-line">
              <button className="gumtree-freelance-button">Featured</button>
              <BiHeart className="gumtree-freelance-heart-color" />
            </div>
            <h1 className="gumtree-freelance-heading">Labourer</h1>
            <p className="gumtree-freelance-paragraph">
              Potters Bar, Hertfordshire
            </p>
            <p className="gumtree-freelance-paragraph">Freelance</p>
            <div className="gumtree-freelance-top-line">
              <p className="gumtree-freelance-euros">10€ </p>
              <p className="gumtree-freelance-paragraph">6 days ago</p>
            </div>
          </div>
          <div className="gumtree-freelance-cards">
            <div className="gumtree-freelance-top-line">
              <button className="gumtree-freelance-button">Featured</button>
              <BiHeart className="gumtree-freelance-heart-color" />
            </div>
            <h1 className="gumtree-freelance-heading">Barber</h1>
            <p className="gumtree-freelance-paragraph">
              West bridgford, Nottinghamshire
            </p>
            <p className="gumtree-freelance-paragraph">Freelance</p>
            <div className="gumtree-freelance-top-line">
              <p className="gumtree-freelance-euros">self employed basis</p>
              <p className="gumtree-freelance-paragraph">6 days ago</p>
            </div>
          </div>
          <div className="gumtree-freelance-cards">
            <div className="gumtree-freelance-top-line">
              <button className="gumtree-freelance-button">Featured</button>
              <BiHeart className="gumtree-freelance-heart-color" />
            </div>
            <h1 className="gumtree-freelance-heading">
              Book Cover Designers and Book Readers
            </h1>
            <p className="gumtree-freelance-paragraph">United Kingdom</p>
            <p className="gumtree-freelance-paragraph">Freelance</p>
            <div className="gumtree-freelance-top-line">
              <p className="gumtree-freelance-euros">up to 10000€ per annum.</p>
              <p className="gumtree-freelance-paragraph">6 days ago</p>
            </div>
          </div>
          <div className="gumtree-freelance-cards">
            <div className="gumtree-freelance-top-line">
              <button className="gumtree-freelance-button">Featured</button>
              <BiHeart className="gumtree-freelance-heart-color" />
            </div>
            <h1 className="gumtree-freelance-heading">Agency Breakfast Chef</h1>
            <p className="gumtree-freelance-paragraph">Tunbridge Wells, Kent</p>
            <p className="gumtree-freelance-paragraph">Freelance</p>
            <div className="gumtree-freelance-top-line">
              <p className="gumtree-freelance-euros">17€ per hour.</p>
              <p className="gumtree-freelance-paragraph">6 days ago</p>
            </div>
          </div>
          <div className="gumtree-freelance-cards">
            <div className="gumtree-freelance-top-line">
              <button className="gumtree-freelance-button">Featured</button>
              <BiHeart className="gumtree-freelance-heart-color" />
            </div>
            <h1 className="gumtree-freelance-heading">Carpenter</h1>
            <p className="gumtree-freelance-paragraph">Tunbridge Wells, Kent</p>
            <p className="gumtree-freelance-paragraph">Freelance</p>
            <div className="gumtree-freelance-top-line">
              <p className="gumtree-freelance-euros">10€ per hour.</p>
              <p className="gumtree-freelance-paragraph">6 days ago</p>
            </div>
          </div>
          <div className="gumtree-freelance-cards">
            <div className="gumtree-freelance-top-line">
              <button className="gumtree-freelance-button">Featured</button>
              <BiHeart className="gumtree-freelance-heart-color" />
            </div>
            <h1 className="gumtree-freelance-heading">Carpenter</h1>
            <p className="gumtree-freelance-paragraph">Tunbridge Wells, Kent</p>
            <p className="gumtree-freelance-paragraph">Freelance</p>
            <div className="gumtree-freelance-top-line">
              <p className="gumtree-freelance-euros">10€ per hour.</p>
              <p className="gumtree-freelance-paragraph">6 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freelancing;
