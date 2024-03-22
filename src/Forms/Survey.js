import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import './Event.css'
import successImage  from './success.png'

const Survey =() => {


    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        feedback: ''
      });
      const [submitted, setSubmitted] = useState(false);
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
      const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any action you want with the form data, like submitting it to a server
    console.log('Form submitted with data:', formData);
    // Optionally, you can clear the form after submission
    setFormData({
       name: '',
        age: '',
        gender: '',
        feedback: ''
      
    });
    setSubmitted(true);

      };
      
      
 
  return (
<>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Applicationforms">Applicationforms</Link>
                    </li>
                    <li>
                        <Link to="/Survey">Survey</Link>
                    </li>
                    <li>
                        <Link to="/Employmentform">Employmentform</Link>
                    </li>
                    <li>
                        <Link to="/EventForm">EventForm</Link>
                    </li>
                </ul>
            </nav>
            <div className="event-form-container">
      <h2 className="form-title">Survey Form</h2>
      {submitted ? (
        <div className="success-message">
            <img src={successImage} alt="Success" />
          <p>Your survey has been submitted successfully! Thank you for your time.</p>
        </div>

      ) : (
      <form onSubmit={handleSubmit}  className="event-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group"> 
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Feedback:</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit"  className="submit-button">Submit</button>
      
      </form>
      )}
    </div>
        </>
  );
};

export default Survey;