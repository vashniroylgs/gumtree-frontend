import { useNavigate } from 'react-router-dom';
import './index.css'

import {Component} from 'react'


class JobForm extends Component {
    state={
        jobtitle:"",
        joblocation:"",
        workmode:"",
        salary:"",
        jobid:"",
        experience:"",
        description:""

    }

    handleInputChange =  (event) => {
        const { name, value } = event.target;
          this.setState({ [name]: value });
      };

      handleJobForm= async (event)=>{
        event.preventDefault()
        const body = {
            jobtitle:this.state.jobtitle,
            joblocation:this.state.joblocation,
            workmode:this.state.workmode,
            salary:this.state.salary,
            jobid:this.state.jobid,
            experience:this.state.experience,
            description:this.state.description
          };

          try {
            const response = await fetch('http://localhost:3009/addjob', {
              method: 'POST',
              body: JSON.stringify(body),
              headers: {
                "Content-Type": "application/json",
              
            }});
      
            if (response.ok) {
              const data = await response.json();
              console.log(data)
              this.setState({success_message:data.success_msg})
              const navigate = useNavigate("")
              navigate("/")
            } else {
                const data = await response.json();
                console.log(data)
                this.setState({error_message:data.error_msg})
            }
          } catch (error) {
            console.error('Error:', error);
          }
        };

    render(){
    return(
        <div className="job-form-main-container">
            <form className="job-form-sub-container" onSubmit={this.handleJobForm}>
                <h1 className="job-form-main-heading">Post a Job</h1>
            <div className="job-form-fill-container" >
                <div className="job-form-input-container">
                    <label className="job-form-input-label-name">Job title<span className="job-form-input-label-star">*</span></label>
                    <input type="text" placeholder="Enter the Job title" className="job-form-input-field" onChange={this.handleInputChange} name="jobtitle" required/>
                </div>
                <div className="job-form-input-container">
                    <label className="job-form-input-label-name">Job location<span className="job-form-input-label-star">*</span></label>
                    <input type="text" placeholder="Enter the Job Location" className="job-form-input-field" onChange={this.handleInputChange} name="joblocation" required/>
                </div>
                <div className="job-form-input-container">
                    <label className="job-form-input-label-name">Work Mode<span className="job-form-input-label-star">*</span></label>
                    <input type="text" placeholder="Enter the work mode" className="job-form-input-field" onChange={this.handleInputChange} name="workmode" required/>
                </div>
                <div className="job-form-input-container">
                    <label className="job-form-input-label-name">Salary<span className="job-form-input-label-star">*</span></label>
                    <input type="text" placeholder="Enter the salary" className="job-form-input-field" onChange={this.handleInputChange} name="salary" required/>
                </div>
                
                <div className="job-form-input-container">
                    <label className="job-form-input-label-name">Job id<span className="job-form-input-label-star">*</span></label>
                    <input type="text" placeholder="Enter the Job id" className="job-form-input-field" onChange={this.handleInputChange} name="jobid" required/>
                </div>
                <div className="job-form-input-container">
                    <label className="job-form-input-label-name">Experience<span className="job-form-input-label-star">*</span></label>
                    <input type="text" placeholder="Enter the Relavant experience required" className="job-form-input-field" onChange={this.handleInputChange} name="experience" required/>
                </div>
                <div className="job-form-input-container">
                    <label className="job-form-input-label-name">Description<span className="job-form-input-label-star">*</span></label>
                    <textarea type="text" placeholder="Enter the Job description" className="job-form-input-field" rows="3" cols="50" onChange={this.handleInputChange} name="description" required/>
                </div>
            </div>
            <button className="job-form-submit-button" type="submit">Submit</button>
            
            </form>
        </div>
    )
}
}
export default JobForm