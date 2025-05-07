import React from "react";
import "./about.css";
import { useNavigate } from "react-router-dom";

function About() {
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
                <a className="nav-link" href="#"
                onClick={() => navigate("/contact")}>
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
      <h1 className="about-name">About Us</h1>
        <img className="about-img" src="./img/background.webp" alt="" />

        <img className="wavy-img" src="./img/wavy.png" alt="" />
        
      </div>
      <div className="about-intro">
        <button className="program-btn">Experts</button>
        <h1>Meet Our Team</h1>
        <p>
          "Meet our team of passionate experts dedicated to delivering <br />{" "}
          innovative solutions and exceptional service."
        </p>

        <div className="about-member">
          <div className="member">
            <img
              className="member-img"
              src="./img/member1.webp"
              alt=""
              width="80%"
            />
            <h3>Willium Scott</h3>
            <h5>CEO & Managing Director</h5>
            
          </div>
          <div className="member">
            <img
              className="member-img"
              src="./img/member2.webp"
              alt=""
              width="80%"
            />
            <h3>Averill Rack</h3>
            <h5>Team Lead</h5>
            
          </div>
          <div className="member">
            <img
              className="member-img"
              src="./img/member3.webp"
              alt=""
              width="80%"
            />
            <h3>Geo Back</h3>
            <h5>Product Manager</h5>
            
          </div>
        </div>
      </div>
      <div className="row featurette yoga-section" >
        <div className="col-md-5 yoga-container">
          <img src="./img/yoga.webp" alt="" />
          <h4>Daily Update</h4>
          <h2 className="featurette-heading fw-normal lh-1">
            Everyday meditations and <br /> insights tailored to your <br />{" "}
            every challenge{" "}
          </h2>
          <p className="lead">
            Unsure where to start with meditation? We'll guide you from the{" "}
            <br /> basics. Receive daily materials to aid your path, noticing
            incremental <br /> enhance ments each day. Struggle with meditation?
            No worries, <br /> simply listen or read along.
          </p>
          <button class="cta" onClick={() => navigate("/form")}>
            <span className="btn-color">7 Days Free Trial</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>
        <div className="col-md-5">
          <img className="medi-img" src="./img/medi.webp" alt="" />
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
export default About;
