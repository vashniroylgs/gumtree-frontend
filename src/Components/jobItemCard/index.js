import "./index.css";
import React, { Component } from "react";
import { AiOutlineHeart } from "react-icons/ai";

// const JobList = [
//   {
//     id: 1,
//     jobName: "Delivery drivers urgently needed",
//     jobLocation: "Doncaster, South Yorkshire",
//     jobdesc: "from £828 per week, bonuses available",
//     features: [],
//   },
//   {
//     id: 2,
//     jobName:
//       "Cleaner in South London | Full-Time & Part-Time Cleaning Jobs | Immediate Start",
//     jobLocation: "Clapham Junction, London",
//     jobdesc: "Up to £500/week + tips",
//     features: [],
//   },
//   {
//     id: 3,
//     jobName:
//       "Associate Dentist – Full Time - Banchory Dental Practice - Aberdeenshire",
//     jobLocation: "Banchory, Aberdeenshire",
//     jobdesc: "Highly competitive",
//     features: [],
//   },
//   {
//     id: 4,
//     jobName:
//       "URGENT! Cleaners wanted in Cherry Hinton, CB1, £12/hour cash - IMMEDIATE START",
//     jobLocation: "Cambridge, Cambridgeshire",
//     jobdesc: "£12 per hour",
//     features: [],
//   },
//   {
//     id: 5,
//     jobName: "Cleaner | Full-Time & Part-Time Cleaning Jobs | Immediate Start",
//     jobLocation: "Hayes, London",
//     jobdesc: "Up to £500/week + tips",
//     features: [],
//   },
//   {
//     id: 6,
//     jobName: "Cleaner | Full-Time & Part-Time Cleaning Jobs | Immediate Start",
//     jobLocation: "Edgware, London",
//     jobdesc: "Up to £500/week + tips",
//     features: [],
//   },
//   {
//     id: 7,
//     jobName: "General Manager - Boutique Hotel with Pub",
//     jobLocation: "Lambeth, London",
//     jobdesc: "£38000 - £42000 per annum",
//     features: [],
//   },
//   {
//     id: 8,
//     jobName:
//       "COUPLE FOR BRUTON, SOMERSET - FIRST CLASS EXPERIENCED HK/COOK /CHAUFFEUR/GROUNDSMAN",
//     jobLocation: "Bruton, Somerset",
//     jobdesc: "CIRCA £85,000.00",
//     features: [],
//   },
//   {
//     id: 9,
//     jobName: "Machine Setter - Operator",
//     jobLocation: "Blackburn, Lancashire",
//     jobdesc: "£22000 - £27000 Per Annum",
//     features: [],
//   },
//   {
//     id: 10,
//     jobName: "Female Personal Assistant",
//     jobLocation: "Bognor Regis, West Sussex",
//     jobdesc: "£12 weekday rate and £15 Sunday rate",
//     features: [],
//   },
//   {
//     id: 11,
//     jobName: "Experienced Removals Drivers 3.5 tonne lutons and HGV class 2",
//     jobLocation: "Colliers Wood, London",
//     jobdesc: "100-150 per day",
//     features: [],
//   },
//   {
//     id: 12,
//     jobName: "Bricklayers and labourers",
//     jobLocation: "Bournemouth, Dorset",
//     jobdesc: "Negotiable",
//     features: [],
//   },
//   {
//     id: 13,
//     jobName: "STRONG SENIOR CHEF DE PARTIE",
//     jobLocation: "Archway, London",
//     jobdesc: "£30k+",
//     features: [],
//   },
//   {
//     id: 14,
//     jobName: "PR Executive",
//     jobLocation: "Manchester",
//     jobdesc: "Negotiable",
//     features: [],
//   },
//   {
//     id: 15,
//     jobName: "Cleaner | Full-Time & Part-Time Cleaning Jobs | Immediate Start",
//     jobLocation: "Crouch End, London",
//     jobdesc: "Up to £500/week + tips",
//     features: [],
//   },
//   {
//     id: 16,
//     jobName: "Franchise Recruiter",
//     jobLocation: "Manchester",
//     jobdesc: "£30000 - £40000 per annum",
//     features: [],
//   },
//   {
//     id: 17,
//     jobName: "Technology Service Desk Analyst",
//     jobLocation: "Manchester",
//     jobdesc: "Negotiable",
//     features: [],
//   },
//   {
//     id: 30,
//     jobName: "Company Solicitor",
//     jobLocation: "Manchester",
//     jobdesc: "Negotiable",
//     features: [],
//   },
//   {
//     id: 18,
//     jobName: "Live-In Housekeeper, Chelsea, £50K - £60K GPA DOE",
//     jobLocation: "West Ealing, London",
//     jobdesc: "£50K - £60K GPA",
//     features: [],
//   },
//   {
//     id: 19,
//     jobName: "Mechanic/tester",
//     jobLocation: "London",
//     jobdesc: "Depends on the candidate",
//     features: [],
//   },
//   {
//     id: 20,
//     jobName: "Facilities Manager",
//     jobLocation: "Denham, London",
//     jobdesc: "£25,000 per annum",
//     features: [],
//   },
//   {
//     id: 21,
//     jobName:
//       "Experienced Cleaner/Housekeeper role for a family outside Hadleigh, Suffolk.",
//     jobLocation: "Ipswich, Suffolk",
//     jobdesc: "£11 - £13/hour",
//     features: [],
//   },
//   {
//     id: 22,
//     jobName: "Home Care Assistant",
//     jobLocation: "Sutton, London",
//     jobdesc: "Starting at £12/hour",
//     features: [],
//   },
//   {
//     id: 23,
//     jobName: "Plumbing and Heating Engineer",
//     jobLocation: "West Ealing, London",
//     jobdesc: "Paye £49,500",
//     features: [],
//   },
//   {
//     id: 24,
//     jobName: "Part Time Work From Home Remote Working Extra income",
//     jobLocation: "Bristol City Centre, Bristol",
//     jobdesc: "Commission Based",
//     features: [],
//   },
//   {
//     id: 25,
//     jobName: "No CV Qualifications Required Working From Home",
//     jobLocation: "Cambridge, Cambridgeshire",
//     jobdesc: "Commission Based",
//     features: [],
//   },
// ];

class JobCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      JobList: [], // Initialize an empty array to store fetched data
    };
  }
  componentDidMount() {
    fetch("http://localhost:3009/getjobs")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ JobList: data.jobs });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    console.log("component called1");
  }
  render() {
    const { JobList } = this.state;
    console.log(JobList);
    return (
      <ul className="jobcard-main-list-container">
        {JobList.map((each) => (
          <li className="Jobcard-main-container" key={each.id}>
            <div className="Jobcard-top-section-container">
              <div className="Jobcard-top-section-sub-container">
                <button className="Jobcard-featured-button">Featured</button>
                <h1 className="Jobcard-top-section-jobname">{each.jobtitle}</h1>
              </div>
              <AiOutlineHeart className="Jobcard-top-section-icon" />
            </div>
            <div className="Jobcard-middle-section-container">
              <div className="Jobcard-middle-section-sub-container">
                <p className="Jobcard-middle-section-name">
                  {each.joblocation}
                </p>
                <p className="Jobcard-middle-section-name">
                  {each.workmode}Mode {each.salary} Lpa
                </p>
              </div>
              {/* <img
                src="https://download.logo.wine/logo/Cognizant/Cognizant-Logo.wine.png"
                alt="company-logo"
                className="Jobcard-middle-section-logo"
              /> */}
            </div>
            <div className="Jobcard-bottom-section-container">
              <p className="Jobcard-bottom-section-salary">
                {each.description}
              </p>
              <p className="Jobcard-bottom-section-time">7 days ago</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default JobCard;

// function JobCard(){
//     return(
//         <ul className="jobcard-main-list-container">
//             {
//                 JobList.map(each=>(
//                     <li className="Jobcard-main-container" key={each.id}>

//                             <div className="Jobcard-top-section-container">
//                                 <div className="Jobcard-top-section-sub-container">
//                                     <button className="Jobcard-featured-button">Featured</button>
//                                     <h1 className="Jobcard-top-section-jobname">{each.jobName}</h1>
//                                 </div>
//                                 <AiOutlineHeart className="Jobcard-top-section-icon"/>
//                             </div>
//                             <div className="Jobcard-middle-section-container">
//                                 <div className="Jobcard-middle-section-sub-container">
//                                     <p className="Jobcard-middle-section-name">{each.jobLocation}</p>
//                                     <p className="Jobcard-middle-section-name">Cash in hand</p>
//                                 </div>
//                                 <img src="https://download.logo.wine/logo/Cognizant/Cognizant-Logo.wine.png" alt="company-logo" className="Jobcard-middle-section-logo"/>
//                             </div>
//                             <div className="Jobcard-bottom-section-container">
//                                 <p className="Jobcard-bottom-section-salary">{each.jobdesc}</p>
//                                 <p className="Jobcard-bottom-section-time">7 days ago</p>
//                             </div>

//                         </li>
//                 ))
//             }
//         </ul>

//     )
// }
