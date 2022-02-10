import React from 'react';
import s from './NavBar.module.scss'
const NavBar = () => {
    return (
        <div className={s.navbar}>
            <button className={s.button}>Главная</button>
            <button className={s.button}>Новости</button>
            <button className={s.button}>Объекты</button>
            <button className={s.button}>Контакты</button>
        </div>
    );
};

export default NavBar;