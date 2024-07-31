import React, { cloneElement } from 'react';

const InfoBoxes = () => {
  return (
    <div className="container mt-5">
      <div className="columns">
        <div className="column is-one-third">
          <div className="box" style={{ padding: '20px', height: '100%' }}>
            <h2 className="title is-4 has-text-centered">ABOUT OUR WEBSITE</h2>
            <p>
              Welcome to our Plant Care Hub, your ultimate resource for all things plant care! Whether you're a seasoned gardener or just starting your green journey, our website is designed to make plant care easy and enjoyable. Here's what we offer:
            </p>
            <ul style={{ textAlign: 'left', marginTop: '10px' }}>
              <li><strong>Create an Account:</strong> Sign up to save your favorite plants and create a personalized plant collection.</li>
              <li><strong>Search Bar:</strong> Quickly look up any plant to discover detailed information on how to care for it.</li>
              <li><strong>Care Details:</strong> Get expert advice on watering, sunlight, soil, and more, tailored to each plant's needs.</li>
              <li><strong>Care Schedules:</strong> Set and track schedules for watering, fertilizing, and other essential tasks to keep your plants thriving.</li>
            </ul>
            <p style={{ marginTop: '10px' }}>Join our community and let us help you grow your green thumb!</p>
            <p style={{ marginTop: '20px', textAlign: 'center' }}>🌿</p><br></br>
          </div>
        </div>

        <div className="column is-one-third">
          <div className="box" style={{ padding: '20px', height: '100%' }}>
            <h2 className="title is-4 has-text-centered">ABOUT US</h2>
            <p>
              Welcome to our Plant Care project! We are a group of enthusiastic students from UT Austin Coding Bootcamp, passionate about technology and eager to apply our newfound skills. As part of our journey, we created this webpage to showcase our learning and collaborate on exciting projects.
            </p>
            <h3 className="title is-5" style={{ marginTop: '20px', textAlign: 'center' }}>OUR TEAM</h3>
            <ul>
              <li><strong>Tyler Alberts:</strong> Jr. Developer</li><br></br>
              <li><strong>Joel Azeta:</strong> Jr. Developer</li><br></br>
              <li><strong>Alanna Johnson-garza:</strong> Jr. Developer</li><br></br>
              <li><strong>Josh Gingold:</strong> Jr. Developer</li><br></br>
              <li><strong>Frank Vasquez:</strong> Fetus Developer</li><br></br>
              <p style={{ marginTop: '20px', textAlign: 'center' }}>🌿</p><br></br>
            </ul>
          </div>
        </div>

        <div className="column is-one-third">
          <div className="box" style={{ padding: '20px', height: '100%' }}>
            <h2 className="title is-4 has-text-centered">CONTACT US</h2>
            <ul>
              <li><strong>Tyler Alberts:</strong> <a href="mailto:t.23carocci@yahoo.com">t.23carocci@yahoo.com</a></li><br></br>
              <li><strong>Joel Azeta:</strong> <a href="mailto:ajfizzle310@outlook.com">ajfizzle310@outlook.com</a></li><br></br>
              <li><strong>Alanna Johnson-garza:</strong> <a href="mailto:ajgarza27@gmail.com">ajgarza27@gmail.com</a></li><br></br>
              <li><strong>Josh Gingold:</strong> <a href="mailto:josh.gingold@gmail.com">josh.gingold@gmail.com</a></li><br></br>
              <li><strong>Frank Vasquez:</strong> <a href="mailto:frank.vasquez.school@gmail.com">frank.vasquez.school@gmail.com</a></li><br></br>
            </ul>
            <p style={{ marginTop: '20px', textAlign: 'center' }}>🌿</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBoxes;
