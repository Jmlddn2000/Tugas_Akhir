import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <>
      <div className="container mt-5">
      <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a href="/" className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="false" >Home</a>
            <a href="#tugas" className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Tugas</a>
            <a href="#cara-menggunakan-webgazer" className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false" to="/#cara-menggunakan-webgazer">Cara Menggunakan</a>
          </div>
        </nav>
      </div>

      <div className="container ">
        <div className="text-center mt-5">
          <h1 id="tugas">Tugas</h1>
        </div >
        <ul className="list-group mt-4" >
          <li className="list-group-item">
            <button type="button" className="btn btn-outline-dark fs-4 fw-bold" >
              <Link style={{textDecoration: "none"}} to="/Taks_1">a. Melihat dan mengeksplorasi situs website selama 30 detik</Link>
            </button>
          </li>
          <li className="list-group-item">
            <button type="button" className="btn btn-outline-dark fs-4 fw-bold">
              <Link style={{textDecoration: "none"}} to="/Taks_2">b. Mencari fitur pada header dalam 10 detik</Link>
            </button>
          </li>
          <li className="list-group-item">
            <button type="button" className="btn btn-outline-dark fs-4 fw-bold">
              <Link style={{textDecoration: "none"}} to="/Taks_3">c. Mencari list game pada website dalam 10 detik</Link>
            </button>
          </li>
          <li className="list-group-item">
            <button type="button" className="btn btn-outline-dark fs-4 fw-bold">
              <Link style={{textDecoration: "none"}} to="/Taks_4">d. Mencari game yang paling disukai dalam 10 detik</Link>
            </button>
          </li>
          <li className="list-group-item">Fitur Lain</li>
          <li className="list-group-item">
            <button type="button" className="btn btn-outline-dark fs-4 fw-bold">
              <Link style={{textDecoration: "none"}} to="/InputLink">Other </Link>
            </button>
          </li>
          <li className="list-group-item">
            <button type="button" className="btn btn-outline-dark fs-4 fw-bold">
              <Link style={{textDecoration: "none"}} to="/Headmap">Heatmap</Link>
            </button>
          </li>
        </ul>
      </div>

      <div className="container mt-5" id="cara-menggunakan-webgazer">
        <div className="text-center mb-5">
          <h1 className="display-4">Cara Menggunakan</h1>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h2 className="card-title">Cara menggunakan webgazer</h2>
                <ol className="list-unstyled">
                <li>1. Pilih tugas yang akan dikerjakan</li>
                  <li>2. Tekan tombol "S" untuk memulai webgazer</li>
                  <li>3. Lakukan Proses Kalibrasi dengan menekan tombol "R"</li>
                  <li>5. Lakukan calibrasi dengan menekan 9 point yang muncul pada setiap sudut</li>
                  <li>5. Lakukan tugas yang diberikan selama waktu yang diberikan</li>
                  <li>6. Setelah Proses gaze tracking selesai dan waktu telah habis, tekan "E" untuk export data</li>
                  <li>7. File JSON akan terdownload</li>
                  <li>8. Tunggu sampai proses selesai</li>
                  <li>9. Lihat hasil</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Cara menggunakan heatmap</h2>
                <ol className="list-unstyled">
                  <li>1. Pilih fitur heatmap</li>
                  <li>2. Pilih file JSON yang akan dikerjakan</li>
                  <li>3. inputkan file json </li>
                  <li>4. Tunggu sampai proses selesai</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
