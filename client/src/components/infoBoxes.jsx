import React from 'react';
import './css/displayBoxes.css';

const InfoBoxes = () => {
  const greenTextStyle = {
    color: 'white',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const boxContentStyle = {
    position: 'relative',
    zIndex: 2,
  };

  return (
    <div className="container mt-5">
      <div className="columns">
        <div className="column is-one-third">
          <div className="box main-left" style={{ position: 'relative' }}>
            <div style={overlayStyle}></div>
            <div style={boxContentStyle}>
              <h2 className="title is-4 has-text-centered" style={{color: '#85c88a'}}>ABOUT OUR WEBSITE</h2>
              <p>
                Welcome to our Plant Care Hub, your ultimate resource for all things plant care! Whether you're a seasoned gardener or just starting your green journey, our website is designed to make plant care easy and enjoyable. Here's what we offer:
              </p>
              <ul className="content-list" style={greenTextStyle}>
                <li><strong style={{color: '#85c88a'}}>Create an Account:</strong> Sign up to save your favorite plants and create a personalized plant collection.</li><br></br>
                <li><strong style={{color: '#85c88a'}}>Search Bar:</strong> Quickly look up any plant to discover detailed information on how to care for it.</li><br></br>
                <li><strong style={{color: '#85c88a'}}>Care Details:</strong> Get information on watering, sunlight, that is tailored to each plant's needs.</li><br></br>
                <li><strong style={{color: '#85c88a'}}>Care Schedules:</strong> Set and track schedules for watering, fertilizing, and other essential tasks to keep your plants thriving.</li><br></br>
              </ul>
              <p>Join our community and let us help you grow your green thumb!</p>
              <p className="icon">🌿</p>
            </div>
          </div>
        </div>

        <div className="column is-one-third">
          <div className="box main-mid" style={{ position: 'relative' }}>
            <div style={overlayStyle}></div>
            <div style={boxContentStyle}>
              <h2 className="title is-4 has-text-centered" style={{color: '#85c88a'}}>ABOUT US</h2>
              <p>
                Welcome to our Plant Care project! We are a group of enthusiastic students from UT Austin Coding Bootcamp, passionate about technology and eager to apply our newfound skills. As part of our journey, we created this webpage to showcase our learning and collaborate on exciting projects.
              </p><br></br><br></br><br></br>
              <h3 className="title is-5 has-text-centered" style={{color: '#85c88a'}}>OUR TEAM</h3>
              <ul className="content-list" style={greenTextStyle}>
                <li><strong style={{color: '#85c88a'}}>Tyler Alberts:</strong> Jr. Developer</li><br></br>
                <li><strong style={{color: '#85c88a'}}>Joel Azeta:</strong> Jr. Developer</li><br></br>
                <li><strong style={{color: '#85c88a'}}>Alanna Johnson-garza:</strong> Jr. Developer</li><br></br>
                <li><strong style={{color: '#85c88a'}}>Josh Gingold:</strong> Jr. Developer</li><br></br>
                <li><strong style={{color: '#85c88a'}}>Frank Vasquez:</strong> Fetus Developer</li><br></br>
              </ul>
              <p className="icon">🌿</p>
            </div>
          </div>
        </div>

        <div className="column is-one-third">
          <div className="box main-right" style={{ position: 'relative' }}>
            <div style={overlayStyle}></div>
            <div style={boxContentStyle}>
              <h2 className="title is-4 has-text-centered" style={{color: '#85c88a'}}>CONTACT US</h2>
              <ul className="content-list" style={greenTextStyle}>
                <li><strong style={{color: '#85c88a'}}>Tyler Alberts:</strong> <a href="mailto:t.23carocci@yahoo.com" style={{color: 'white'}}>t.23carocci@yahoo.com</a></li><br></br>
                <li><strong style={{color: '#85c88a'}}>Joel Azeta:</strong> <a href="mailto:ajfizzle310@outlook.com" style={{color: 'white'}}>ajfizzle310@outlook.com</a></li><br></br>
                <li><strong style={{color: '#85c88a'}}>Alanna Johnson-garza:</strong> <a href="mailto:ajgarza27@gmail.com" style={{color: 'white'}}>ajgarza27@gmail.com</a></li><br></br>
                <li><strong style={{color: '#85c88a'}}>Josh Gingold:</strong> <a href="mailto:josh.gingold@gmail.com" style={{color: 'white'}}>josh.gingold@gmail.com</a></li><br></br>
                <li><strong style={{color: '#85c88a'}}>Frank Vasquez:</strong> <a href="mailto:frank.vasquez.school@gmail.com" style={{color: 'white'}}>frank.vasquez.school@gmail.com</a></li><br></br>
              </ul><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <p className='is-size-3'>Made with 💚 from the CodeGardners&trade;</p>
              <p className="icon">🌿</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBoxes;
