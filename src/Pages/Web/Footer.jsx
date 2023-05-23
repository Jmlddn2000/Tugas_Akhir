import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/home.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo-SkyGames.png';
import LogoWa from '../../assets/img/WhatsApp 1.png';
import LogoFb from '../../assets/img/Facebook 1.png';
import LogoTw from '../../assets/img/Twitter 1.png';
import LogoIn from '../../assets/img/Instagram 1.png';



export default function Footer() {
  return (
    <div>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap" rel="stylesheet"></link>
        <div className="footer">
            <footer className="text-white text-center text-lg-start bg-dark">
            <div className="container p-4">
                <div className="row mt-4">
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <img src={Logo} alt="Logo Brand" />
                        <p style={{fontSize:'20px', fontWeight:'normal'}}>
                        SkyGames is a website that provides you with the best games and games that you can play.
                        </p>
                        <div className="mt-4">
                        <a type="button" href="https://www.instagram.com/_aldisr/" className="btn"><img src={LogoIn} alt="IG" /></a>
                        <a type="button" href='https://www.facebook.com/profile.php?id=100077990982039' className="btn"><img src={LogoFb} alt="FB" /></a>
                        <a type="button" href='https://twitter.com/_noturcrush' className="btn"><img src={LogoTw} alt="TW" /></a>
                        <a type="button" href='https://web.whatsapp.com' className="btn"><img src={LogoWa} alt="WA" /></a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 mb-4 mb-md-0 ms-5 ps-5">
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2" style={{fontSize:'25px', fontWeight:'bold'}}><Link to={'/'} className="p-0">Home</Link></li>
                            <li className="nav-item mb-2" style={{fontSize:'20px', fontWeight:'normal'}}><Link to={"/"} className="p-0">Popular</Link></li>
                            <li className="nav-item mb-2" style={{fontSize:'20px', fontWeight:'normal'}}><Link to={"/freetoplay"} className="p-0">Free to Play</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-3 mb-4 mb-md-0">
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2" style={{fontSize:'25px', fontWeight:'bold'}}><Link to={'/games'} className="p-0">Games</Link></li>
                            <li className="nav-item mb-2" style={{fontSize:'20px', fontWeight:'normal'}}><Link to={'/games'} className="p-0">List Games</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-3 mb-4 mb-md-0">
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2" style={{fontSize:'25px', fontWeight:'bold'}}><a href="#" className="p-0">About Us</a></li>
                            <li className="nav-item mb-2" style={{fontSize:'20px', fontWeight:'normal'}}><a href="#" className="p-0">About Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            </footer>
        </div>
    <script src="https://kit.fontawesome.com/e89a35845d.js" crossorigin="anonymous"></script>
    </div>
  )
}
