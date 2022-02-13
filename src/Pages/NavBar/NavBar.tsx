import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../Routs/routes';
import s from './NavBar.module.scss'

const NavBar = () => {
    return (
        <div className={s.navbar1}>
            <NavLink to={PATH.HOME}>
                {/*<button className={s.button} >Главная</button>*/}
                <a  className={s.button1}>Главная</a>
            </NavLink>

            <NavLink to={PATH.NEWS}>
                {/*<button className={s.button}>Новости</button>*/}
                <a  className={s.button1}>Новости</a>
            </NavLink>

            <NavLink to={PATH.OBJECTS}>
                {/*<button className={s.button}>Объекты</button>*/}
                <a  className={s.button1}>Объекты</a>
            </NavLink>

            <NavLink to={PATH.CONTACTS}>
                {/*<button className={s.button}>Контакты</button>*/}
                <a  className={s.button1}>Контакты</a>
            </NavLink>
        </div>
    );
};

export default NavBar;
