import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import './Event.css'
import successImage  from './success.png'
const Employmentform =()=> {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    position: '',
    resume: null,
    coverLetter: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === 'file' ? e.target.files[0] : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any action you want with the form data, like submitting it to a server
    console.log('Form submitted with data:', formData);
    // Optionally, you can clear the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      position: '',
      resume: null,
      coverLetter: null,
      
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
      <h2  className="form-title">Employment Form</h2>
      {submitted ? (
         <div className="success-message">
            <img src={successImage} alt="Success" />
        <p> Thank you for your application! We will be in touch with you soon.</p>
         </div>
      ) : (
      <form onSubmit={handleSubmit}className="event-form">
        <div className= "form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
           </div>
        <div className= "form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className= "form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className= "form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className= "form-group">
          <label>Position Applying For:</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </div>
        <div  className="form-group">
          <label>Resume:</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />
        </div>
        <div  className = "form-group">
          <label>Cover Letter:</label>
          <input
            type="file"
            name="coverLetter"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      )}
    </div>
        </>
  );
};

export default Employmentform;