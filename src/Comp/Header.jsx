import React, {useState} from "react";
import './Header.css'
import coin from '../assets/coin.png';
// import Sidebar from "./Sidebar";


const Header = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 50){
            setColorchange(true);
        }
        else{
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return(
        <>
        <div className="headermain">
            <div className={ colorChange ? 'header colorBlue' : 'header'}>
                    <div className="header-col1">
                        <img src={coin} alt='Coinland.' style={{width: '56px', height: '56px'}}/>
                        <h4>Auro Coin.</h4>
                    </div>
                    <div className="header-col2">
                        <div><a href="#home" style={{textDecoration: 'none'}}>HOME</a></div>
                        <div><a href="#about" style={{textDecoration: 'none'}}>ABOUT</a></div>
                        <div><a href="#service" style={{textDecoration: 'none'}}>SERVICES</a></div>
                        <div><a href="#token" style={{textDecoration: 'none'}}>TOKEN</a></div>
                        <div><a href="#contact" style={{textDecoration: 'none'}}>CONTACT</a></div>
                        {/* <button>LOG IN</button> */}
                    </div>
            </div>
        </div>
        </>
    )
}

export default Header;