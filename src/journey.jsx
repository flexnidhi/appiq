import React from "react";
import { useNavigate } from "react-router-dom";
import "./journey.css";

function journey() {
  const navigate = useNavigate();
  return (
    <div className="container marketing">
      <div className="process-section">
        <div className="program-intro">
          <button className="program-btn">Easy Step </button>
          <h1>How It Work</h1>
          <p>
            Learn how it works and get started on your journey today! <br />{" "}
            Start using the features and watch your goals come to life!
          </p>
        </div>

        <div className="row process-section">
          <div className="process-sec">
            <div className="col-lg-3 process-container process-item">
              <title>Placeholder</title>
              <img src="./img/register.webp" alt="" />

              <h2 className="fw-normal">Register on app</h2>
              <p>
                Register your app and start experiencing the <br /> best

              </p>

              <div class="process_num">01</div>
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-3 process-container process-item">
              <title>Placeholder</title>
              <img src="./img/plan.webp" alt="" />

              <h2 className="fw-normal">Choose Your Plan</h2>
              <p>
                Choose your plan and unlock the <br /> features that suit you
                best!
              </p>
              <div class="process_num">02</div>
            </div>
            {/* /.col-lg-4 */}

            <div className="col-lg-3 process-container process-item">
              <title>Placeholder</title>
              <img src="./img/goals.webp" alt="" />
              <h2 className="fw-normal">Set Your Goals</h2>
              <p>
                Set your goals and start achieving <br /> what matters most to
                you!
              </p>
              <div class="process_num">03</div>
            </div>
          </div>
        </div>
      </div>
      {/* /.row */}

      {/* START THE FEATURETTES */}

      <div className="row featurette yoga-section">
        <div className="col-md-7 yoga-container">
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
    </div>
  );
}
export default journey;
