import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import './Event.css'
import successImage  from './success.png';
const Applicationforms =()=> {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
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
          fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
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
    <h2 className="form-title">Application Form</h2>
    {submitted ? (
      <div className="success-message">
         <img src={successImage} alt="Success" />
       <p>Your application has been submitted successfully!</p>
      </div>
      ) : (
    <form onSubmit={handleSubmit} className="event-form">
    <div className= "form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div  className= "form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div  className= "form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div >
        <div  className= "form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div  className= "form-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div  className= "form-group">
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div  className= "form-group">
          <label>ZIP:</label>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>
        <div  className= "form-group">
          <label>Resume:</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />
        </div>
        <div  className= "form-group">
          <label>Cover Letter:</label>
          <input
            type="file"
            name="coverLetter"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />
        </div >
        <button type="submit"className="submit-button">Submit</button>

        </form>
      )}
        </div>
</>
  );
};

export default Applicationforms;