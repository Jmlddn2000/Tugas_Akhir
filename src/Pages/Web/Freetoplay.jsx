import React from 'react'
import img from '../../assets/img/freetoplay.png'
import '../../assets/css/home.css';
import { Link } from 'react-router-dom'

export default function Freetoplay() {
  return (
    <div className='freetoplay'>
        <div className='row'>
            <div className='col-md-7'>
                <img src={img} alt="Free to play" style={{width:'100%', float:'left', height:'975px'}}/>
            </div>
            <div className='freetoplaytext col-md-5'>
                <h1>Free-to-play</h1>
                <h3 className='py-3'>The best Free-to-Play Games that you and your friends can play it together.</h3>
                <button><Link to={'/freetoplay'}  style={{textDecoration:'none', color:'white'}}>See More</Link></button>
            </div>
        </div>
    </div>
  )
}
