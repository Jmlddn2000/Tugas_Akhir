import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import webgazer from 'webgazer';

function GazeTracker() {
  const [coordinates, setCoordinates] = useState([]);
  const webgazer = window.webgazer

  useEffect(() => {
    webgazer.setRegression('ridge');
    webgazer.setGazeListener((data, elapsedTime) => {
      setCoordinates([...coordinates, data]);
    });
    webgazer.begin();
  }, []);

  return (
    <div class="d-grid gap-2 col-6 mx-auto">
      <h1>Gaze Tracker</h1>
      <p>Coordinates captured: {coordinates.length}</p>
      <button  onClick={() => console.log(coordinates)}>Save Coordinates</button>
    </div>
  );
}

export default GazeTracker;