import React from 'react';
import './index.css'; // Import your CSS file
import logo13 from '../images/logo13.png';


const Homefooter = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li>About Bquest</li>
            <li>Advertise with us</li>
            <li>Careers</li>
            <li>Media</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Help & Contact</h3>
          <ul>
            <li>FAQs</li>
            <li>Safety</li>
            <li>Policies</li>
            <li>Contact Us</li>
            <li>Insurance</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>More From Us</h3>
          <ul>
            <li>Car Guides</li>
            <li>Bquest Life</li>
            <li>Car Price Index</li>
            <li>Sell My Car</li>
            <li>Upcycle Revolution</li>
          </ul>
        </div>
        <div className="footer-social">
          <h3 >Follow Bquest</h3>
          <div className="social-icons">
            <img src={logo13} alt="Gumtree Logo" />
          </div>
        </div>
      </footer>
      <hr className="footer-separator" /> {/* Horizontal Line */}
      <div className='main12'>
      <div className="second">
        <div className="footer-column1">
          <h3 className='follow'>Follow Bquest</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.pinterest.com">
              <i className="fa fa-pinterest"></i>
            </a>
          </div>
          
            
            
          </div>
        </div>
        
        <h3 className='Bquest'>Bquest Partners</h3>
        
        </div>
        
       
       
      
    </>
  );
};

export default Homefooter;
