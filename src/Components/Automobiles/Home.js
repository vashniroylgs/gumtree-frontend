import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

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

function AutoMobiles() {
  return (
    <div>
      <div className="automobile">
        <h1 className="Header">Find Cars for Sale</h1>
        <p className="p" style={{ color: "#fff", textAlign: "center" }}>
          Search thousands of ads on the UK’s local motors marketplace *
        </p>
      </div>
      <div className="automobile1">
        <div className="automobile-form">
          <div className="automobile-form1">
            <div className="automobile-label">
              <label> Make </label>
              <select>
                <option> Any</option>
                <option>Abarth </option>
                <option>Ac</option>
                <option>Aixam</option>
                <option> Alfa Romeo</option>
                <option> Aston Martin</option>
                <option> Audi</option>
                <option> Bentley</option>
                <option> BMW</option>
                <option> Bugatti</option>
                <option> Buick</option>
                <option> Cadillac</option>
                <option> Chevrolet</option>
                <option> Chrysler</option>
                <option> Citroen</option>
                <option> Dacia</option>

                <option> Dodge</option>
                <option> DS</option>
                <option> Ferrari</option>
                <option> Fiat</option>
                <option> Ford</option>
                <option> Honda</option>
                <option> Hyundai</option>
                <option> Infiniti</option>
              </select>
            </div>
            <div class="automobile-label1">
              <label>Model </label>
              <select>
                <option> select Model </option>
              </select>
            </div>
            <div class="automobile-label2">
              <label>Price range </label>
              <select>
                <option>min</option>
                <option> $ 0</option>
                <option> $ 500</option>
                <option> $ 1000</option>
                <option> $ 5000</option>
                <option> $ 10000</option>
                <option> $ 20000</option>
                <option> $ 30000</option>
              </select>
            </div>
            <div class="automobile-label3">
              <label>Price range </label>
              <select>
                <option>max</option>
                <option> $ 50000</option>
                <option> $ 40000</option>
                <option> $ 30000</option>
                <option> $ 20000</option>
                <option> $ 10000</option>
                <option> $ 5000</option>
                <option> $ 1000</option>
                <option> $ 500</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="sell">
        <h1 className="sell-header">
          Have a car to sell, why not sell it with Gumtree?
        </h1>
        <p className="sell-paragraph">
          Sell your car for FREE
          <br />
          Selling a car is free for private sellers
        </p>
        <a href="/"> Learn more about sell you car </a>
      </div>
      <div className="automobiles">
        <center>
          <h2 className="popular">Popular models</h2>
        </center>
        -
        <div className="images">
          {carDetails.map((car, index) => (
            <Link
              to={`/automobiles/${car.name}`}
              key={index}
              style={{ textDecoration: "none" }}
            >
              <div className="car-images">
                <img src={car.imageUrl} className="car-card-images" alt="" />
                <h2>{car.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="card-container">
        <center>
          <h1 className="Read">
            Read our latest expert car reviews and articles
          </h1>
        </center>
        <div className="c1">
          <div className="card-images">
            <img
              className="card-images"
              src="https://res.cloudinary.com/dcczhcvjg/image/upload/v1694519463/zwwujvck4eggg1zg7dip.jpg"
              alt=""
            ></img>
            <h3>Car reviews</h3>
            <h2> Browse car reviews</h2>
            <h5>
              With our expert team’s ratings and commentary, you’ll think you’ve
              just been on a test drive.
            </h5>
            <button className="read-review-btn">Read full review</button>
          </div>

          <div className="card-images">
            <img
              className="card-images"
              src="https://www.gumtree.com/static/1/resources/assets/rwd/images/orphans/motors/5bf28d060682759a7a2f14e2.motors-hub-02.jpg"
              alt=""
            ></img>

            <h3>Best of</h3>

            <h2> Read our best-of lists</h2>

            <h5>
              Whether you’re after comfort, style or value, take the stress out
              of researching with our hand-picked cars..
            </h5>

            <button className="read-review-btn">Read full review</button>
          </div>

          <div className="card-images">
            <img
              className="card-images"
              src="https://www.gumtree.com/static/1/resources/assets/rwd/images/orphans/motors/566d7a6281527168cd0a3a3c.motors-hub-03.jpg"
              alt=""
            ></img>

            <h3> Car guides & advice</h3>

            <h2>Find expert advice</h2>

            <h5>
              We’re here to guide you through everything from changing a tyre to
              buying on finance..
            </h5>

            <button className="read-review-btn">Read full review</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutoMobiles;
