import React from "react";
import './programs.css'
function program() {
  return (
   
    <div>
      <div className="program_banner">
        <button className="program-btn">Our Program </button>
        
        <h1>Transformative Mindfulness Programs</h1>
        <div className="program_intro">
        <p>A sleeping website is an inactive or dormant site with little to no updates, traffic, or engagement. It may still be online but lacks fresh content or active user interaction.</p>
        
        </div>
        
      </div>
      <div>
        <ul className="program_items">
          <li className="program-img">
            <img  src="./img/program1.webp" alt="" />
            <p>Meditations</p>
          </li>
          <li className="program-img">
            <img src="./img/program2.webp" alt="" />
            <p>Sleep Stories</p>
          </li>
          <li className="program-img">
            <img src="./img/program3.webp" alt="" />
            <p>Relaxing Sounds</p>
          </li>
          <li className="program-img">
            <img src="./img/program4.webp" alt="" />
            <p>Motivations</p>
          </li>
          <li className="program-img">
            <img src="./img/program5.webp" alt="" />
            <p>Meditations</p>
          </li>
          <li className="program-img">
            <img src="./img/program6.webp" alt="" />
            <p>Articles</p>
          </li>
          
        </ul>
      </div>
    </div>
  );
}
export default program;
