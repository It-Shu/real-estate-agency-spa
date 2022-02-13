import React from 'react';
import s from './Header.module.scss'
import NavBar from "../NavBar/NavBar";
import logo from '../../assets/images/photo_2022-02-11_14-05-39.jpg'

const Header = () => {
    return (
        <div className={s.header}>
            <img className={s.logo} src={logo} alt="logo"/>
            <NavBar/>
        </div>
    );
};

export default Header;