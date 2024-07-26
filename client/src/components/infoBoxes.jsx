import React from 'react';
import './css/InfoBoxes.css';

const InfoBoxes = () => {
    return (
        <div className="info-container">
            <div className="info-box">
                <h2>About Our Website</h2>
                <br />
                <p>
                    Welcome to our Plant Care Hub, your ultimate resource for all things plant care! Whether you're a seasoned gardener or just starting your green journey, our website is designed to make plant care easy and enjoyable. Here's what we offer:
                </p>
                <br />
                <ul style={{ textAlign: 'left' }}>
                    <li>
                        <strong>Create an Account:</strong> Sign up to save your favorite plants and create a personalized plant collection.
                    </li>
                    <li>
                        <strong>Search Bar:</strong> Quickly look up any plant to discover detailed information on how to care for it.
                    </li>
                    <li>
                        <strong>Care Details:</strong> Get expert advice on watering, sunlight, soil, and more, tailored to each plant's needs.
                    </li>
                    <li>
                        <strong>Care Schedules:</strong> Set and track schedules for watering, fertilizing, and other essential tasks to keep your plants thriving.
                    </li>
                </ul>
                <br />
                <p>Join our community and let us help you grow your green thumb!</p>
                <br />
                🌿
            </div>
            <div className="info-box">
                <h2>About Us</h2>
                <br />
                <p>Welcome to our Plant Care project! <br />
                    We are a group of enthusiastic students
                    from UT Austin Coding Bootcamp, passionate about technology and eager to
                    apply our newfound skills. As part of our journey, we created this webpage
                    to showcase our learning and collaborate on exciting projects.</p>
                <br />
                <br />
                <br />
                <h2>Our Team</h2>
                <ul>
                    <li><strong>Tyler Alberts</strong>: Jr. Developer</li>
                    <li><strong>Joel Azeta</strong>: Jr. Developer</li>
                    <li><strong>Alanna Johnson-garza</strong>: Jr. Developer</li>
                    <li><strong>Josh Gingold</strong>: Jr. Developer</li>
                    <li><strong>Frank Vasquez</strong>: Fetus Developer</li>
                </ul>
                <br />
                🌿
            </div>
            <div className="info-box">
                <h2>Contact Us</h2>
                <br />
                <br />
                <ul>
                    <li><strong>Tyler Alberts</strong>: <a href="mailto:t.23carocci@yahoo.com">t.23carocci@yahoo.com</a></li>
                    <br />
                    <br />
                    <li><strong>Joel Azeta</strong>: <a href="mailto:ajfizzle310@outlook.com">ajfizzle310@outlook.com</a></li>
                    <br />
                    <br />
                    <li><strong>Alanna Johnson-garza</strong>: <a href="mailto:ajgarza27@gmail.com">ajgarza27@gmail.com</a></li>
                    <br />
                    <br />
                    <li><strong>Josh Gingold</strong>: <a href="josh.gingold@gmail.com">josh.gingold@gmail.com</a> </li>
                    <br />
                    <br />
                    <li><strong>Frank Vasquez</strong>: <a href="mailto:frank.vasquez.school@gmail.com">frank.vasquez.school@gmail.com</a></li>
                    <br />
                    🌿
                </ul>

            </div>
        </div>
    );
};

export default InfoBoxes;
