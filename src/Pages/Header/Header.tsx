import React from 'react';
import s from './Header.module.scss'
import NavBar from "../NavBar/NavBar";

const Header = () => {
    return (
        <div className={s.header}>
            <img src="" alt="logo"/>
            <NavBar/>
        </div>
    );
};

export default Header;