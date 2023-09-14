import "./index.css";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  BsFillTelephoneFill,
  BsFillHeartFill,
  BsFillCaretDownFill,
} from "react-icons/bs";
import { MdReportProblem } from "react-icons/md";

//icons
import { RiArrowDropLeftLine } from "react-icons/ri";

const carsImages = [
  "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/e14f3b43-2305-4466-4c66-6921bd752900/86",
  "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/d0226147-0487-476b-9f6c-b255da224000/86",
  "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/19cf29b6-585d-4c9e-e6de-91cdf7d8f000/86",
  "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/9784d19c-2c1d-44df-747f-34346acb1100/86",
  "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/c0170493-cc5f-4aa1-6de1-96221daaa000/86",
];

const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  pauseOnHover: false,
};

function CarDetailedView() {
  return (
    <div className="car-detailed-view-main-container">
      <div className="car-detailed-view-sub-container">
        <div className="car-detailed-view-left-main-container">
          <div className="car-detailed-view-navigation-container">
            <RiArrowDropLeftLine className="car-detailed-view-navigation-icon" />
            <p className="car-detailed-view-navigation-text">
              Back{" "}
              <span className="car-detailed-view-navigation-span-element">
                |
              </span>{" "}
              Home{" "}
              <span className="car-detailed-view-navigation-span-element">
                /
              </span>{" "}
              Motors{" "}
              <span className="car-detailed-view-navigation-span-element">
                /
              </span>{" "}
              Cars{" "}
              <span className="car-detailed-view-navigation-span-element">
                /
              </span>{" "}
              Audi{" "}
              <span className="car-detailed-view-navigation-span-element">
                /
              </span>{" "}
              Audi A3
            </p>
          </div>
          <h1 className="car-detailed-view-car-title">
            2017 Audi A3 1.5 TFSI CoD S line S Tronic Euro 6 (s/s) 4dr SALOON
            Petrol Automat
          </h1>
          <div className="car-detailed-view-location-and-price-container">
            <p className="car-detailed-view-location-name">
              Armadale, West Lothian
            </p>
            <p className="car-detailed-view-car-price">£18,495.00</p>
          </div>
          {/*<div className="car-detailed-view-carousel-main-container">
                    <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000} style={{color:"#196AE5"}}>
                    {carsImages.map((slide,index) => (
                        <div key={index} className="car-detailed-view-carousel-slide">
                            <img src={slide} alt={`Slide ${index}`}  className="car-detailed-view-carousel-image"/>
                        </div>
                    ))}
                    </Carousel>
                    </div>*/}
          <div className="car-detailed-view-carousel-main-container">
            <Slider {...settings} className="car-detailed-view-carousel-slide">
              {carsImages.map((slide, index) => (
                <div key={index}>
                  <img
                    src={slide}
                    alt={`Slide ${index}`}
                    className="car-detailed-view-carousel-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div>
            <h1 className="car-detailed-view-description-heading">
              Description
            </h1>
            <p className="car-detailed-view-description">
              ?? AA Approved Dealer. ?? Trading Standards Approved ??30 Days
              Warranty. ??12 Months Free AA Breakdown Cover?? Drive Away
              Insurance GBP29.95. ?? Finance AvailableWOW ! What A Stunning
              Machine - Real Head Turner In This Bright Metallic Red With Red
              Callipers To Match - 18'' Black 5 Twin Spoke Alloys With New Disks
              & Pads All Round - Full Black Leather Seats With S Embossed & Grey
              Stitching - Fully Automatic With Drive Select - Sat Nav - Parking
              Sensors - Cruise Control & So Much More So Check Out The Spec List
              Below - Low Running Costs On This Euro 6 ULEZ Compliant Audi With
              Only GBP30 For Full Years Road Tax -Low Mileage Too With Only 37k
              On The Clock - Comes With Minimum 6 Months MOT - 30 Days Parts &
              Labour Warranty Included - 12 Months Free AA Breakdown Cover
              Included Too{" "}
            </p>
          </div>
        </div>
        <div className="car-detailed-view-right-main-container">
          <div className="car-detailed-view-right-detailed-card">
            <div className="car-detailed-view-right-detailed-card-first">
              <h3>Cambria Group</h3>
              <div className="car-detailed-view-right-first-text-container">
                <p>Posting for 9+ years</p>
                <p className="car-detailed-view-right-link">See all ads</p>
              </div>
            </div>
            <hr />
            <h4 className="car-detailed-view-right-second-heading">
              Cantact Cambria Group
            </h4>
            <div className="car-detailed-view-right-cantact-container">
              <BsFillTelephoneFill />
              <p className="car-detailed-view-right-cantact">
                Login to reveal phone number
              </p>
            </div>
            <textarea
              className="car-detailed-view-right-text-area"
              placeholder="Hi Cambria Group, I'm interested in your item. Is this still
            available? Thanks"
            ></textarea>
            <input
              type="number"
              placeholder="Your phone number"
              className="car-detailed-view-right-input"
            />
            <p className="car-detailed-view-right-cantact-paragraph">
              Your contact details will be included in your reply. Gumtree
              reserves the right to monitor conversations sent through our
              servers to protect you from fraud, spam or suspicious behaviour.
            </p>
            <button className="car-detailed-view-right-send-button">
              Send Message
            </button>
            <hr />
            <h4 className="car-detailed-view-right-cantact-link">
              www.grange.co.uk/dealerships/mclaren-hatfield/?utm_source=ebaymotorsgroup&utm_medium=classifieds&utm_campaign=emg
            </h4>
            <hr />
            <div className="car-detailed-view-right-button-container">
              <button className="car-detailed-view-right-favourite-button">
                <BsFillHeartFill />
                Favourite
              </button>
              <button className="car-detailed-view-right-favourite-button">
                <MdReportProblem />
                Report
                <BsFillCaretDownFill />
              </button>
            </div>
          </div>
          <div className="car-detailed-view-right-vehicle-history">
            <h3 className="car-detailed-view-right-vehicle-history-heading">
              Vehicle history
            </h3>
            <div className="car-detailed-view-right-vehicle-history-para-container">
              <p className="car-detailed-view-right-vehicle-history-paragraph">
                We are unable to perform a basic history check on this vehicle.
                Please contact the seller for more information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CarDetailedView;
