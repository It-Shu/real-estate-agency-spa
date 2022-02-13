import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../Routs/routes';
import s from './NavBar.module.scss'

const NavBar = () => {
    return (
        <div className={s.navbar}>
            <NavLink to={PATH.HOME}>
                <button className={s.button} >Главная</button>
            </NavLink>

            <NavLink to={PATH.NEWS}>
                <button className={s.button}>Новости</button>
            </NavLink>

            <NavLink to={PATH.OBJECTS}>
                <button className={s.button}>Объекты</button>
            </NavLink>

            <NavLink to={PATH.CONTACTS}>
                <button className={s.button}>Контакты</button>
            </NavLink>
        </div>
    );
};

export default NavBar;
