
import React from 'react';
import './TopBar.css';
import Logo from'../../assets/logo.png';

const TopBar = () => {
    return (
        <div className='TopBarStyle'>
            <div className='AppLogo'>
                <img  src={Logo} height='12' width='12' alt="Oslo by sykkel"/>
            </div>
        Din Oslo sykkel
      </div>
    );
  }
  
export default TopBar;
  