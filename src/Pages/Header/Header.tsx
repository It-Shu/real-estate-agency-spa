import React from 'react';
import s from './Header.module.scss'
import NavBar from "../NavBar/NavBar";
// import logo from '../../assets/images/logo1.jpg'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.background}>
                <img className={s.logo} src={'https://www.downloadclipart.net/large/real-estate-png-photos.png'} alt="logo"/>
            </div>
                <NavBar/>
        </div>
    );
};

export default Header;
