import {
    AiOutlineBell,
    AiOutlineCaretLeft,
    AiOutlineCaretDown,
    AiOutlineHeart,
  } from "react-icons/ai";
  import React, { useEffect, useState } from "react";
  import { CiLocationOn } from "react-icons/ci";
  import { GrCheckmark } from "react-icons/gr";
  import {Link} from "react-router-dom"
  import "./index.css";
  
  const porpertyDetails = [
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/00/s/NjgxWDEwMjQ=/z/oYoAAOSwx1dhMHX2/86",
        Title:
          "Luxury Penthouse Warehouse Apartment Lifestyle Location Photo Video Film Studio Space Hire London",
        Features: ["Agency", "Date available: 09 Aug 2023", "Other"],
        Subtitle: "Tower Hamlets, London",
        Cost: "£1pw",
        Time: "48 days ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/00/s/Njg0WDEwMjQ=/z/sJsAAOSwa4lhyxwx/86",
        Title: "Great Artist Studio to let",
        Features: ["Private", "Date available: 01 Oct 2023", "Other"],
        Subtitle: "Notting Hill, London",
        Cost: "£400pm",
        Time: "4 days ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/00/s/NjgzWDEwMjQ=/z/iRYAAOSw-DRjA~qg/86",
        Title:
          "Shop To Let Brockhurst Rd - Approx 340 sq ft - Use Class E (A1/A1/A3)",
        Features: ["Private", "Date available: 02 May 2023", "Retail"],
        Subtitle: "Gosport, Hampshire",
        Cost: "£500pm",
        Time: "8 days ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/00/s/NTQ2WDEwMjQ=/z/A8IAAOSwbHRfFdg4/86",
        Title: "Brand New Anerley Works Spacious Creative Studios",
        Features: ["Private", "Date available: 18 May 2023", "Other"],
        Subtitle: "Crystal Palace, London",
        Cost: "£475pm",
        Time: "1 day ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/49064767-d211-48d7-c049-254256532800/86",
        Title: "New Dark Commercial Kitchens To Rent Manchester",
        Features: ["Private", "Date available: 07 Sep 2023", "Industrial"],
        Subtitle: "Manchester",
        Cost: "£900pm",
        Time: "12 days ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/2532968d-a5da-4de9-c041-b4e0057b0c00/86",
        Title: "83/85 George Street, Hull HU1 3BN *** To Let ***",
        Features: ["Private", "Date available: 12 Sep 2023", "Office Space"],
        Subtitle: "Hull, East Yorkshire",
        Cost: "£833.33pw",
        Time: "5 mins ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/ceb1f1d5-8af1-4589-7a20-4966bcf79800/86",
        Title: "Studio spaces and desks in shared creative studio Glasgow",
        Features: ["Private", "Date available: 06 Mar 2023", "Office Space"],
        Subtitle: "East End, Glasgow",
        Cost: "£100pm",
        Time: "8 mins ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/5c6ba165-e8f8-430f-5b28-28173cd0e900/86",
        Title: "Office / shop To Rent ",
        Features: ["Private", "Date available: 23 Aug 2023", "Retail"],
        Subtitle: "Saltcoats, North Ayrshire",
        Cost: "£400pm",
        Time: "16 mins ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/653c7cf4-e7e6-4545-1d69-84f828f41100/86",
        Title: "Shop to Let",
        Features: ["Private", "Date available: 23 Aug 2023", "Retail"],
        Subtitle: "Saltcoats, North Ayrshire",
        Cost: "£500pm",
        Time: "18 mins ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/bbfef350-e17a-4ff5-0dae-d4369b496a00/86",
        Title: "Shop To Let ",
        Features: ["Private", "Date available: 23 Aug 2023", "Retail"],
        Subtitle: "Saltcoats, North Ayrshire",
        Cost: "£800pm",
        Time: "19 mins ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/b3d14885-ee00-47b1-5ade-6d3a460df700/86",
        Title:
          "Creative Space * Private Office * Workspace With Natural Lights In Leyton @ Mainyard Studios",
        Features: ["Private", "Date available: 12 Sep 2023", "Office Space"],
        Subtitle: "Hackney, London",
        Cost: "£800pm",
        Time: "37 mins ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/00/s/MTAyNFg3Njg=/z/Oo0AAOSwCiJirNEI/86",
        Title: "Studio/Workshop/Creative Space/Virtual Office/ To Rent",
        Features: ["Private", "Date available: 12 Sep 2023", "Office Space"],
        Subtitle: "Eltham, London",
        Cost: "£600pm",
        Time: "53 mins ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/f9bd218e-df85-4bd6-7dc9-7499b762a500/86",
        Title: "Vibrant Dual Aspect Creative Studio - Hackney Wick ",
        Features: ["Private", "Date available: 15 Sep 2023", "Office Space"],
        Subtitle: "Hackney, London",
        Cost: "£1,375pm",
        Time: "1 hour ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/a48b635e-fef8-4c9a-71a8-8588739f0300/86",
        Title:
          "INTRODUCTORY OFFER: £175 PCM Coworking Desk Space Available in Stratford ",
        Features: ["Agency", "Date available: 29 Aug 2023", "Office Space"],
        Subtitle: "Stratford, London",
        Cost: "£225pm",
        Time: "1 hour ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/8d013be7-707b-44f2-a281-9ccd27187600/86",
        Title: "workshop/storage unit/double garage to rent",
        Features: ["Private", "Date available: 12 Sep 2023", "Industrial"],
        Subtitle: "Sedbergh, Cumbria",
        Cost: "£295pm",
        Time: "1 hour ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/00/s/MTAyNFg3Njg=/z/AmQAAOSwUwxjPDYN/86",
        Title: "Artist Studios / Creative workspaces / Offices in Bethnal Green E2",
        Features: ["Private", "Date available: 06 Sep 2023", "Office Space"],
        Subtitle: "Tower Hamlets, London",
        Cost: "£85pm",
        Time: "1 hour ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/00/s/NjgzWDEwMjQ=/z/RTkAAOSwRE9bsjKV/86",
        Title: "Office Spaces - Desk Spaces to Rent Harrow HA3",
        Features: ["Private", "Date available: 08 Aug 2023", "Office Space"],
        Subtitle: "Harrow, London",
        Cost: "£500pm",
        Time: "1 hour ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/00/s/Njg0WDEwMjQ=/z/LHgAAOSwFGxfZFU7/86",
        Title: "Desk - Office Space to Rent Harrow HA1",
        Features: ["Agency", "Date available: 08 Aug 2023", "Office Space"],
        Subtitle: "Harrow, London",
        Cost: "£500pm",
        Time: "1 hour ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/06a2ff8c-526c-4650-ef02-47510d255100/86",
        Title: "Modern Office Space to Rent, Vincent Street, Glasgow G2",
        Features: ["Private", "Date available: 08 Aug 2023", "Office Space"],
        Subtitle: "East End, Glasgow",
        Cost: "£900pm",
        Time: "1 hour ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/00/s/NzY4WDEwMjQ=/z/u1gAAOSwsoRinO0t/86",
        Title:
          "Private Offices / Studios, Haggerston E8, 3 available from £195 week, Flexi Lease",
        Features: ["Private", "Date available: 25 Aug 2023", "Office Space"],
        Subtitle: "Hackney, London",
        Cost: "£195pw",
        Time: "1 hour ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/7e2716b9-6f06-44dc-efe3-82c00ed56700/86",
        Title:
          "Private Office / Studio for 8-10 people in Haggerston E8 with Flexi lease",
        Features: ["Private", "Date available: 29 May 2023", "Office Space"],
        Subtitle: "Hackney, London",
        Cost: "£375pw",
        Time: "1 hour ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/5b4fde78-2fa7-4131-0851-83a902172200/86",
        Title: "Newly Refurbrished Artistic Creative Studios In Peckham",
        Features: ["Private", "Date available: 26 Sep 2023", "Other"],
        Subtitle: "Peckham, London",
        Cost: "£1,100pm",
        Time: "1 hour ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/5c832f14-f6d9-47b3-5994-d6fe1cde9b00/86",
        Title: "Brand new artistic studios available at Crystal Palace",
        Features: ["Private", "Date available: 26 Sep 2023", "Other"],
        Subtitle: "Crystal Palace, London",
        Cost: "£395pm",
        Time: "1 hour ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/c7939f61-90a8-489c-c6b4-2bdab480db00/86",
        Title: "Studio 217 * Spacious River View Studio Available Now",
        Features: ["Private", "Date available: 26 Sep 2023", "Other"],
        Subtitle: "Greenwich, London",
        Cost: "£755pm",
        Time: "1 hour ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/00/s/NjQwWDQ4MA==/z/lKcAAOSwvs5jkGNe/86",
        Title: "Individual Work Pods for Office work Or Creative Work",
        Features: ["Private", "Date available: 20 Sep 2023", "Office Space"],
        Subtitle: "North West London, London",
        Cost: "£195pm",
        Time: "1 hour ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/00/s/MTAyNFg3Njg=/z/PqkAAOSwTGdhgCfb/86",
        Title:
          "Aesthetics / Therapy / Beauty / Consultation / Treatment Room To Rent, West End London W1",
        Features: ["Private", "Date available: 15 Sep 2023", "Other"],
        Subtitle: "West End, London",
        Cost: "£100pw",
        Time: "1 hour ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/96bdf2a1-286e-4666-0f5a-fac8b6b5b100/86",
        Title: "ARTIST/DESIGN/PHOTOGRAPHY/STUDIOS TO RENT, NORTH LONDON, N4",
        Features: ["Private", "Date available: 19 Sep 2023", "Office Space"],
        Subtitle: "Haringey, London",
        Cost: "£450pm",
        Time: "1 hour ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/ff90c4f6-6752-46d0-5e06-94cc2b04b400/86",
        Title: "Fully Serviced Offices Available To Rent In Lisburn, BT28 3AJ",
        Features: ["Private", "Date available: 26 Sep 2023", "Office Space"],
        Subtitle: "Lisburn, County Antrim",
        Cost: "£1pm",
        Time: "1 hour ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/bcc72995-c1dc-48b9-9acc-7a73cea7b500/86",
        Title: "Fully Serviced Offices Available To Rent In Belfast, BT23 6BL",
        Features: ["Private", "Date available: 26 Sep 2023", "Office Space"],
        Subtitle: "Newtownards, County Down",
        Cost: "£0pm",
        Time: "1 hour ago",
      },
      {
        Image:
          "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/dd670eef-85e2-4f17-2a79-e9337c1c4c00/86",
        Title: "Fully Serviced 8 Desk Office in Bristol City Centre",
        Features: ["Private", "Date available: 19 Sep 2023", "Office Space"],
        Subtitle: "Bristol City Centre, Bristol",
        Cost: "£1,500pm",
        Time: "1 hour ago",
      },
    ];
  
  const Property = () => {
    const [properties, setproperties] = useState([]);
    useEffect(() => {
      // Fetch data from your server when the component mounts
      fetch(`http://localhost:3009/getproperties`)
        .then((response) => response.json())
        .then((data) => {
          setproperties(data.properties);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);


    return (
      <div className="propertypage-main-container">
        <div className="propertypage-main-container1">
          <img
            className="propertpage-add1-image"
            src="https://res.cloudinary.com/dx0tk0a56/image/upload/v1694502873/Screenshot_919_kcepzv.png"
            alt=""
          />
          <div className="propertypage-main-datacontainer">
            <h3 className="propertypage-home-heading">Home / Property</h3>
            <h3 className="propertypage-home-heading1">28,646 ads Property</h3>
            <div className="propertpage-home-buttons-container">
              <div className="propertypage-alert-container">
                <AiOutlineBell className="propertypage-alert-icon" />
                <p className="propertypage-alert-text">Save Search Alert</p>
              </div>
              <select className="propertypage-alert-select-container">
                <option>Most Recent Visits</option>
                <option>Nearest First</option>
              </select>
            </div>
            <div className="propertypage-data-container">
              <div className="propertypage-filter-main-container">
                <p className="propertypage-location-text">location</p>
                <div className="ppr-popup-input1-container">
                  <CiLocationOn className="ppr-popup-input1-icon" />
                  <input
                    type="email"
                    id="email"
                    placeholder="INDIA"
                    className="ppr-popup-input1"
                    required
                  />
                </div>
                <div className="property-page-select-container">
                  <select className="propertypage-filter-select-option">
                    <option selected>
                      Choose Distance{" "}
                    </option>
                    <option>+1 mile</option>
                    <option>+2 mile</option>
                    <option>+3 mile</option>
                  </select>
                  <button className="property-page-select-update-button">
                    Update
                  </button>
                </div>
                <hr style={{margin:"15px"}} />
                <p className="propertypage-filter-category-text">Category</p>
                <div className="propertypage-all-category-container">
                  <AiOutlineCaretLeft className="propertypage-all-category-icon" />
                  <p className="propertypage-all-category-text">All Categories</p>
                </div>
                <div className="propertypage-filter-option-container">
                  <p className="propertypage-filter-option-text2">Property</p>
                  <GrCheckmark className="propertypage-filter-option-icon" />
                </div>
                <div
                  style={{ marginLeft: "15%" }}
                  className="propertypage-filter-option-container"
                >
                  <p className="propertypage-filter-option-text">Commercial</p>
                  <p className="propertypage-filter-option-text1">8874</p>
                </div>
                <div
                  style={{ marginLeft: "15%" }}
                  className="propertypage-filter-option-container"
                >
                  <p className="propertypage-filter-option-text">To Rent</p>
                  <p className="propertypage-filter-option-text1">6542</p>
                </div>
                <div
                  style={{ marginLeft: "15%" }}
                  className="propertypage-filter-option-container"
                >
                  <p className="propertypage-filter-option-text">To Share</p>
                  <p className="propertypage-filter-option-text1">6782</p>
                </div>
                <div
                  style={{ marginLeft: "15%" }}
                  className="propertypage-filter-option-container"
                >
                  <p className="propertypage-filter-option-text">
                    Parking & Garage
                  </p>
                  <p className="propertypage-filter-option-text1">4523</p>
                </div>
                <div
                  style={{ marginLeft: "15%" }}
                  className="propertypage-filter-option-container"
                >
                  <p className="propertypage-filter-option-text">For Sale</p>
                  <p className="propertypage-filter-option-text1">7423</p>
                </div>
                <div className="propertypage-show-more-container">
                  <p className="propertypage-show-more-text">Show 4 More</p>
                  <AiOutlineCaretDown style={{ marginLeft: "10px" }} />
                </div>
              </div>
              <div className="porperty-card-main-conatiner">
                {properties.map((property, index) => (
                   <Link
                   to={`/property/${property.id}`}
                   style={{ textDecoration: "none" }}
                 >
                  <div className="porperty-card-conatiner" key={index}>
                    <div className="porperty-card-image-conatiner">
                      <img
                        src={`http://localhost:3009/${property.image_names[0]}`}
                        alt=""
                        className="porperty-card-image-conatiner-image"
                      />
                    </div>
                    <div className="porperty-card-content-conatiner">
                      <div className="porperty-card-content-conatiner-heading-content">
                        <h1 className="porperty-card-content-conatiner-heading">
                          {property.title}
                        </h1>
                        <AiOutlineHeart
                          style={{ color: "red", fontSize: "22px" }}
                        />
                      </div>
                      {/* <div className="porperty-card-content-conatiner-list-elements">
                        {property.Features.map((feature, i) => (
                          <span
                            className="porperty-card-content-conatiner-list-element"
                            key={i}
                          >
                            {feature}
                          </span>
                        ))}
                      </div> */}
                      <p className="porperty-card-content-conatiner-location">
                        xxxx
                      </p>
                      <div className="porperty-card-content-conatiner-cost">
                        <p className="porperty-card-content-conatiner-cost-item">
                          {property.price}
                        </p>
                        <p className="porperty-card-content-conatiner-time-item">
                          xxxx
                        </p>
                      </div>
                    </div>
                  </div>
                  </Link>
                ))}
       
              </div>
            </div>
          </div>
        </div>
        <div className="proprtypage-main-container2">
          <img
            className="propertypage-add2-image"
            src="https://res.cloudinary.com/dx0tk0a56/image/upload/v1694503153/Screenshot_920_lheb8k.png"
            alt=""
          />
          <img
            className="propertypage-add2-image"
            src="https://res.cloudinary.com/dx0tk0a56/image/upload/v1694503153/Screenshot_920_lheb8k.png"
            alt=""
          />
        </div>
      </div>
    );
  };
  
  export default Property;