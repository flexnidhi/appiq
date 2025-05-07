import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gmail: "",
    gender: "",
    age: "",
    sleepHours: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.gmail ||
      !formData.gender ||
      !formData.age ||
      !formData.sleepHours
    ) {
      setMessage("Please fill in all the details.");
    } else {
      setMessage("You have filled the form successfully! Enjoy your 7-day trial.");

      console.log("Form data submitted:", formData);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className="form-container">
      <div className="form-sec">
        <form onSubmit={handleSubmit}>
          <h2>Personal Information</h2>

          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="gmail">Gmail:</label>
            <input
              type="email"
              id="gmail"
              name="gmail"
              value={formData.gmail}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="sleepHours">Sleep Hours:</label>
            <input
              type="number"
              id="sleepHours"
              name="sleepHours"
              value={formData.sleepHours}
              onChange={handleChange}
            />
          </div>

          <div>
            <button className="form-btn" type="submit">Submit</button>
          </div>
        </form>

        {message && (
          <div className={`message ${message.includes("successfully") ? "success" : "error"}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyForm;
