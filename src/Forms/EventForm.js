import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import './Event.css'
import successImage  from './success.png'
const EventForm=()=> {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventTime: '',
    location: '',
    description: ''
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
      eventName: '',
      eventDate: '',
      eventTime: '',
      location: '',
      description: ''
      
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
            <h2 className="form-title">Create Event</h2>
            {submitted ? (
                <div className="success-message">
                   <img src={successImage} alt="Success" />
        <p className="success-message">Form submitted successfully!</p>
        </div>
      ) : (
            <form onSubmit={handleSubmit} className="event-form">
            <div className="form-group">
          <label>Event Name:</label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="time"
            name="eventTime"
            value={formData.eventTime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
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

export default EventForm;