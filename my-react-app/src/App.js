import "./App.css";
import aadhaar from './aadhaar.png';
import tick from './tick.jpg';
import ReactCardFlip from 'react-card-flip';
import React, { useState } from "react";
import ReactDOM from 'react-dom';


function App() {
  return <CardFlip src="aadhaar.png" />;
}

export default App;


const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className="container-center-horizontal">
        <div className="frame-1">
          <div className="selected-card">
            <div className="image">
              <h2>Upload Your Aadhaar Card</h2>
            </div>
            <div className="line1"></div>
            <div className="container">
              <div className="aadhaar">
                <div className="aadhaar-image">
                  <img src={aadhaar} alt="Logo" />
                </div>
              </div>
              <div className="frontimg">Front Side Image</div>
              <label htmlFor="upload-button">
                <span className="button1" value="Upload">
                  Upload
                </span>
                <span className="button2" value="Upload">
                  Upload
                </span>
              </label>
              <input type="file" id="upload-button" style={{ display: "none" }} />
              <div className="backimg">Back Side Image</div>

              <button className="submit" onClick={handleClick}>
                Continue
              </button>
            </div>
            <div className="line2"></div>
            <div className="alert">
              <p>
                <b>Attention:</b> Make sure the photo is clear.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-2">
        <div className="success">
          <img src={tick} alt="Logo" />
          <h1>Awesome!</h1>
          <h3>Your are ready to proceed using our website.</h3>
        </div>
        <div className="close">
          <button onClick={handleClick} className="closebtn">Proceed</button>
        </div>


      </div>
    </ReactCardFlip>
  );
}
ReactDOM.render(<CardFlip />, document.getElementById('root'));


