import React from "react";
import "./contact.css";
import { useNavigate } from "react-router-dom";

function contact() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/"); // Navigate to the home page (App.jsx)
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        aria-label="Eighth navbar example"
      >
        <div className="container nav_bar">
          <div className="nav_logo">
            <img src="./img/logo.webp" alt="" />
          </div>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample07"
            aria-controls="navbarsExample07"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src="./img/toggle_btn.png" width="40px" alt="" />
          </button>
          <div className="navbar-collapse collapse" id="navbarsExample07">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-items">
              <li className="nav-item">
              <button className="nav-link" onClick={goToHome}>
                  Home
                </button>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => navigate("/about")}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pages
                </a>
              </li>
              <button className="cta" onClick={() => navigate("/form")}>
                <span>7 Days Free Trial</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </ul>
          </div>
        </div>
      </nav>

      {/*  */}
      <div className="">
      <h1 className="about-name">Contact Us</h1>
        <img className="about-img" src="./img/background.webp" alt="" />

        <img className="wavy-img" src="./img/wavy.png" alt="" />
        

        <div>

       {/* Contact Section */}
      <div className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2>Contact Us</h2>
              <p>If you have any questions, feel free to reach out to us.</p>
              <div className="contact-info">
                <div className="contact-item">
                  <h4>Email Us</h4>
                  <p>contact@ourcompany.com</p>
                </div>
                <div className="contact-item">
                  <h4>Call Us</h4>
                  <p>+1 234 567 890</p>
                </div>
                <div className="contact-item">
                  <h4>Visit Us</h4>
                  <p>123 Main St, City, Country</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              {/* Embed Google Map */}
              <div className="map-container">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.092062212597!2d-122.42324628468042!3d37.77492997975999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c90fd7bcf%3A0x58d4169da040eaf6!2sSan%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2sin!4v1619196464209!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      
      


      {/*footer*/}
      <div className="footer-container">
      <img className="footer-img" src="./img/back-ground.webp" alt="" />
      <div className="container footer-section">
        <footer className="py-5">
          <div className="row footer-item">
            <div className="col-6 col-md-2 mb-3">
              <h5>| Quick Links</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>

                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5>| Support</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="col-md-5 offset-md-1 mb-3">
              <form className="subscribe" >
                <h5>Subscribe to our AppiQ</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    fdprocessedid="63qdr9"
                  />
                  <button
                    className="btn btn-primary sub-btn"
                    type="button"
                    fdprocessedid="n66c79"
                    
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className=" footer-bottom d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2025 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a
                  className="link-body-emphasis"
                  href="#"
                  aria-label="Instagram"
                >
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#instagram" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="link-body-emphasis"
                  href="#"
                  aria-label="Facebook"
                >
                  <img src="./img/arrow.jpg" alt="" width="35px"   />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
      
    </div>
  );
}
export default contact;
