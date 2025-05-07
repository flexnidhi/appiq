import React from "react";
import Programs from "./programs";
import Journey from "./journey";
import Footer from "./footer";
import MyForm from "./form";
import About from "./about";
import Contact from "./contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  return (
    <div  id="home">
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
                <a className="nav-link " href="#">
                  Home
                </a>
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

      <div>
        <img
          className="background_img"
          src="./img/background.webp"
          width="100%"
          alt=""
        />
        <div className="stress_container">
          <div>
            <h1 className="banner_name">Reduce Stress, Improve Sleep!</h1>
            <h5>
              Boost happiness through mindfulness meditation. Lessen stress,
              enhance sleep.
            </h5>
            <h5>Get 30 days free trial</h5>
            <span>
              <br />
            </span>
            <div className="banner_btn">
              <button className="google_btn">
                <img className="btn-img" src="./img/google_btn.webp" alt="" />
              </button>
              <button className="apple_btn">
                <img className="btn-img" src="./img/apple_btn.webp" alt="" />
              </button>
            </div>
          </div>
          <div>
            <img className="phone_img" src="./img/phone.webp" alt="" />
          </div>
        </div>
      </div>

      <div className="rated_section">
        <div className="rated_item">
          <img src="./img/rated1.webp" alt="" />
          <p>
            Rated 4.9/5 from <br /> over 2m+ reviews
          </p>
        </div>
        <div className="rated_item">
          <img src="./img/rated2.webp" alt="" />
          <p>
            Trusted by <br /> 50M+ users
          </p>
        </div>
        <div className="rated_item">
          <img src="./img/rated3.webp" alt="" />
          <p>
            10k+ meditations, <br /> sleep stories
          </p>
        </div>
        <div className="rated_item">
          <img src="./img/rated4.webp" alt="" />
          <p>
            25+ languages <br /> available
          </p>
        </div>
      </div>

      <Programs />
      <Journey />
      <Footer />
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<MyForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
