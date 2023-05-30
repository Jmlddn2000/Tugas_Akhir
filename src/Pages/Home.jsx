import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <h1>Tugas</h1>
      </div>
      <ul className="list-group mt-4">
        <li className="list-group-item">
          <button type="button" className="btn btn-outline-primary fs-4 fw-bold">
            <Link to="/Taks_1">a. Melihat dan mengeksplorasi situs website selama 30 detik</Link>
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" className="btn btn-outline-primary fs-4 fw-bold">
            <Link to="/Taks_2">b. Mencari fitur pada header dalam 10 detik</Link>
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" className="btn btn-outline-primary fs-4 fw-bold">
            <Link to="/Taks_3">c. Mencari list game pada website dalam 10 detik</Link>
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" className="btn btn-outline-primary fs-4 fw-bold">
            <Link to="/Taks_4">d. Mencari game yang paling disukai dalam 10 detik</Link>
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" className="btn btn-outline-primary fs-4 fw-bold">
            <Link to="/Headmap">Heatmap</Link>
          </button>
        </li>
        <li className="list-group-item">WEBSITE LAIN</li>
        <li className="list-group-item">
          <button type="button" className="btn btn-outline-primary fs-4 fw-bold">
            <Link to="/OtherWeb">Other Website</Link>
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" className="btn btn-outline-primary fs-4 fw-bold">
            <Link to="/OtherHeatmap">Other Heatmap</Link>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Home;
