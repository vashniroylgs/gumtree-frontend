import './index.css'

//Components
import JobFilterCard from '../JobFilterCard'


//icons
import {MdLocationOn} from 'react-icons/md'
import {RiArrowDropLeftLine} from 'react-icons/ri'

const ContractTypeList = [
  {
    id: '1000000',
    label: 'Any',
    posts: "71,026",
  },
  {
    id: '2000000',
    label: 'Cash in Hand',
    posts:"1,512",
  },
  {
    id: '3000000',
    label: 'Contract',
    posts:"3,023"
  },
  {
    id: '4000000',
    label: 'Freelance',
    posts:"317"

  },
  {
    id: '5000000',
    label: 'Locum',
    posts:"9"
    
  },
  {
    id: '6000000',
    label: 'Permanent',
    posts:"64,843"
  },
  {
    id: '7000000',
    label: 'Self Employed',
    posts:"1,214"
  },
  {
    id: '8000000',
    label: 'Sub Contractor',
    posts:"101"
  },
  {
    id: '10000000',
    label: 'Voluntary',
    posts:"7"
  },
]

const RecruiterTypeList=[
    {
        id:1,
        label:"Any",
        posts:"71,096"
    },
    {
        id:2,
        label:"Direct Employer",
        posts:"68,096"
    },
    {
        id:1,
        label:"Recruiter",
        posts:"569"
    }
]

const HoursTypeList=[
    { id: 1, label: "Any", posts: "73,388" },
    { id: 2, label: "Evening", posts: "7" },
    { id: 3, label: "Full Time", posts: "66,850" },
    { id: 4, label: "Morning", posts: "4" },
    { id: 5, label: "Nights", posts: "47" },
    { id: 6, label: "Part Time", posts: "6,410" },
    { id: 7, label: "Saturday job", posts: "6" },
    { id: 8, label: "Sunday job", posts: "2" },
    { id: 9, label: "Term Time", posts: "8" },
    { id: 10, label: "Weekends", posts: "54" }
  ]
  
const JobLevelList=[
    { id: 1, label: "Any", posts: "3,528" },
    { id: 2, label: "Apprenticeship", posts: "32" },
    { id: 3, label: "Experienced", posts: "3,323" },
    { id: 4, label: "Graduate", posts: "96" },
    { id: 5, label: "Internship", posts: "9" },
    { id: 6, label: "Management", posts: "68" }
  ]
  
const languageTypeList=[
    {
        id:1,
        label:"Any",
        posts:"198",
    },
    {
        id:2,
        label:"English",
        posts:"78",
    },
    {
        id:3,
        label:"French",
        posts:"26",
    }
]

const suggestedSearchesList=[
    {
        id:1,
        label:"assistant jobs",
        posts:"5"
    },
    {
        id:2,
        label:"nanny jobs",
        posts:"5"
    },
    {
        id:3,
        label:"dentist jobs",
        posts:"5"
    }
]

const jobSectionList=[
    { id: 1, jobName: "Engineering", posts: 7262 },
    { id: 2, jobName: "Healthcare & Medical", posts: 6679 },
    { id: 3, jobName: "Admin, Secretarial & PA", posts: 6603 },
    { id: 4, jobName: "Sales", posts: 6241 },
    { id: 5, jobName: "Transport, Logistics & Delivery", posts: 4189 },
    { id: 6, jobName: "Financial Services", posts: 3963 },
    { id: 7, jobName: "Retail & FMCG", posts: 3912 },
    { id: 8, jobName: "Teaching & Education", posts: 3838 },
    { id: 9, jobName: "Customer Service & Call Centre", posts: 3375 },
    { id: 10, jobName: "Accountancy", posts: 3330 },
    { id: 11, jobName: "Construction & Property", posts: 3007 },
    { id: 12, jobName: "Manufacturing & Industrial", posts: 2937 },
    { id: 13, jobName: "Recruitment", posts: 2755 },
    { id: 14, jobName: "Housekeeping & Cleaning", posts: 2637 },
    { id: 15, jobName: "Legal", posts: 2258 },
    { id: 16, jobName: "Security", posts: 1872 },
    { id: 17, jobName: "Agriculture & Farming", posts: 1409 },
    { id: 18, jobName: "Sport, Fitness & Leisure", posts: 1307 },
    { id: 19, jobName: "Hospitality & Catering", posts: 1244 },
    { id: 20, jobName: "Media, Digital & Creative", posts: 1241 },
    { id: 21, jobName: "Scientific & Research", posts: 772 },
    { id: 22, jobName: "Driving & Automotive", posts: 543 },
    { id: 23, jobName: "Social & Care Work", posts: 511 },
    { id: 24, jobName: "Charity", posts: 312 },
    { id: 25, jobName: "Childcare", posts: 312 },
    { id: 26, jobName: "Health & Beauty", posts: 262 },
    { id: 27, jobName: "Marketing, Advertising & PR", posts: 167 },
    { id: 28, jobName: "Computing & IT", posts: 122 },
    { id: 29, jobName: "Arts & Heritage", posts: 96 },
    { id: 30, jobName: "HR", posts: 79 },
    { id: 31, jobName: "Gardening", posts: 78 },
    { id: 32, jobName: "Performing Arts", posts: 45 },
    { id: 33, jobName: "Leisure & Tourism", posts: 31 },
    { id: 34, jobName: "Animals", posts: 25 },
    { id: 35, jobName: "Purchasing & Procurement", posts: 20 }
  ]
  

const FiltersGroup = () => {
  


  return (
    <div className="job-filters-group-container">
    <h1 className="job-filter-heading">Location</h1>
    <div className="job-filter-location-type-container">
        <MdLocationOn className="job-filter-location-icon"/>
        <input type="search" placeholder='Postcode or Location' className="job-filter-location-search-container"/>
    </div>
    <div className="job-filter-choose-distance-main-container">
        <select className="job-filter-choose-distance-container">
            <option>Choose Distance</option>
            <option>+ 1 mile</option>
            <option>+ 3 miles</option>
            <option>+ 5 miles</option>
            <option>+ 10 miles</option>
            <option>+ 15 miles</option>
            <option>+ 30 miles</option>
            <option>+ 50 miles</option>
            <option>+ 75 miles</option>
            <option>+ 100 miles</option>
            <option>Nationwide</option>
        </select>
        <button className="job-filter-choose-distance-update-button">
            Update
        </button>
    </div>
    <hr className="job-filter-horizontal-line"/>
    <h1 className="job-filter-heading">Category</h1>
    <div className="job-filter-all-category-container">
        <RiArrowDropLeftLine className="job-filter-all-category-icon"/>
        <p className="job-filter-all-category-names">All Categories</p>
    </div>
    <p className="job-filter-job-type-heading">jobs</p>
    
        <ul className="job-filter-jobs-section-container-list">
            {
                jobSectionList.map(eachJob=>(
                    <li key={eachJob.id} className="job-filter-jobs-section-item">
                        <p className="job-filter-job-section-name">{eachJob.jobName}</p>
                        <p className="job-filter-jobs-section-posts">{eachJob.posts}</p>
                    </li>
                ))
            }
        </ul>
        <hr className="job-filter-horizontal-line"/>
        <h1 className="job-filter-heading">Contract Type</h1>
        <JobFilterCard FilterType={ContractTypeList}/>
        <hr className="job-filter-horizontal-line"/>
        <h1 className="job-filter-heading">Recruiter Type</h1>
        <JobFilterCard FilterType={RecruiterTypeList}/>
        <hr className="job-filter-horizontal-line"/>
        <h1 className="job-filter-heading">Hours</h1>
        <JobFilterCard FilterType={HoursTypeList}/>
        <hr className="job-filter-horizontal-line"/>
        <h1 className="job-filter-heading">Job level</h1>
        <JobFilterCard FilterType={JobLevelList}/>
        <hr className="job-filter-horizontal-line"/>
        <h1 className="job-filter-heading">Language</h1>
        <JobFilterCard FilterType={languageTypeList}/>
        <hr className="job-filter-horizontal-line"/>
        <h1 className="job-filter-heading">Salary</h1>
        <select className="job-filter-select-salary-container">
            <option>No min</option>
            <option>$10,000</option>
            <option>$20,000</option>
            <option>$30,000</option>
            <option>$40,000</option>
            <option>$50,000</option>
            <option>$60,000</option>
            <option>$70,000</option>
            <option>$80,000</option>
            <option>$90,000</option>
            <option>$1,00,000</option>
        </select>
        <select className="job-filter-select-salary-container">
            <option>No max</option>
            <option>No min</option>
            <option>$10,000</option>
            <option>$20,000</option>
            <option>$30,000</option>
            <option>$40,000</option>
            <option>$50,000</option>
            <option>$60,000</option>
            <option>$70,000</option>
            <option>$80,000</option>
            <option>$90,000</option>
            <option>$1,00,000</option>
        </select>
        <button className="job-filter-choose-distance-update-button">
            Update
        </button>
        <hr className="job-filter-horizontal-line"/>
        <h1 className="job-filter-heading">Suggested Searches</h1>
        <JobFilterCard FilterType={suggestedSearchesList}/>
    </div>
  )
}

export default FiltersGroup