import React from 'react';
import './css/InfoBoxes.css'; 

const InfoBoxes = () => {
    return (
        <div className="info-container">
            <div className="info-box">
                <h2>About Our Website</h2>
                <p>This section will provide information about our website...</p>
            </div>
            <div className="info-box">
                <h2>About Us</h2>
                <p>This section will provide information about us...</p>
            </div>
            <div className="info-box">
                <h2>Contact Us</h2>
                <p>This section will provide contact information...</p>
            </div>
        </div>
    );
};

export default InfoBoxes;
