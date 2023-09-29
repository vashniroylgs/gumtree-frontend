import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import "./index.css";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    phone:"",
    email:"",
    loginUser: false,
    showSubmitError: false,
    errorMsg: "",
    userBlur: "",
    passwordBlur: "",
    redirectToRegister: false, 
    redirectToForgot:false// New state property for redirection
  };

  handleForgot=()=>{
    this.setState({redirectToForgot:true})
  }

  handleRegisterClick = () => {
    this.setState({ redirectToRegister: true });
  };

  onChangeText=(e)=>{
    console.log(e.target.value)
    const {name,value} = e.target
    this.setState({[name]:value})
  }

  render() {
    const {
      redirectToRegister,
      redirectToForgot,
      username,
      password,
      phone,
      email
    } = this.state;
    if (redirectToRegister) {
      return <Navigate to="/signup" />;
    }
    if(redirectToForgot){
      return <Navigate to="/forgotpassword"/>;
    }
    console.log(username)
    console.log(email)
    console.log(phone)
    console.log(password)

    return (
      <div className="login-body">
        <div className="login-box" id="sectionBox">
          <form className="login-form">
          <div className="logo-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="40px"
              viewBox="27.74 5.25 19.52 24.298"
            >
              <path
                fill="#72EF36"
                d="M44.433 11.914a.707.707 0 0 1-.337-.606C43.76 7.942 40.933 5.25 37.5 5.25s-6.327 2.625-6.596 6.058a.806.806 0 0 1-.336.606c-1.683 1.211-2.827 3.164-2.827 5.384 0 3.029 2.087 5.654 4.914 6.395.471.135 1.01.202 1.144.067.337-.202.808-1.885.606-2.221-.135-.203-.539-.404-1.077-.539-1.683-.471-2.895-1.952-2.895-3.769 0-1.01.404-1.885 1.01-2.625a2.964 2.964 0 0 1 1.01-.808c.74-.404 1.144-1.144 1.144-1.952 0-.404.067-.808.202-1.211.539-1.548 1.952-2.692 3.702-2.692s3.164 1.144 3.702 2.692c.134.404.202.808.202 1.211 0 .808.403 1.548 1.144 1.952.404.202.673.471 1.01.808a3.967 3.967 0 0 1 1.01 2.625 3.907 3.907 0 0 1-3.903 3.904c-2.491 0-4.443 2.02-4.443 4.51v2.558c0 .471.067 1.009.202 1.144.27.27 2.02.27 2.288 0 .135-.135.203-.673.203-1.144v-2.625c0-.942.807-1.75 1.75-1.75 3.634 0 6.596-2.962 6.596-6.596-.002-2.155-1.147-4.107-2.829-5.318z"
              ></path>
            </svg>
            <span className="bquest-logo-name">BQuest</span>
          </div>
            <h2 className="login-caption">Please Create Your Account</h2>
            <div className="login-user-container">
              <input type="text" className="login-input" placeholder="Username" name={username} onChange={this.onChangeText} required />

            </div>
            <div className="login-user-container">
              <input type="text" className="login-input" placeholder="Email" name={email} onChange={this.onChangeText} required />
              
            </div>
            <div className="login-user-container">
              <input type="number" className="login-input" placeholder="Mobile No" name={phone} onChange={this.onChangeText} required/>

            </div>
            <div className="login-user-container">
              <input type="password" className="login-input" placeholder="Password" name={password} onChange={this.onChangeText} required />
              
            </div>
            <Link to="/" style={{textDecoration:"none"}}><input type="submit" className="login-button" value="Signup" id="loginbutton" /></Link>
            <p className="forgot-password" onClick={this.handleForgot}>Forgot Password?</p>
            <p className="dont-have-account">
              Do you have an account? <Link to='/login'><span className="register-here" onClick={this.handleRegisterClick}>Login</span></Link>
                
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;