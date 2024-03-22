import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
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
                        <Link to="EventForm">EventForm</Link>
                    </li>
                </ul>
            </nav>
           <div className='rohan-contact'>
           <div className="welcome-message">
      <h1>Welcome to Our Website</h1>
      <p>"Welcome to our website! We're so glad you're here.
We're a team of passionate people who are dedicated to providing our customers with the best possible experience. We offer a wide range of products and services, and we're always looking for new ways to improve.</p>
      <button type="submit"className="submit-buttons">Visit</button>
    </div>
           </div>
        </>
        
    )
};

export default Home;