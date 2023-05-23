import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <div>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap" rel="stylesheet"></link>
        <div className='header'>
            <div className='container d-flex justify-content-start align-middle'>
                <div className='row'>
                    <h1 className='col-md-12'>SkyGames</h1>
                    <h2 className='col-md-7'>
                        Welcome to the world of gaming. We provide all information about games.
                    </h2>
                </div>
            </div>

        </div>
    </div>
  )
}
