import React from 'react';
import s from './Header.module.scss'
import NavBar from "../NavBar/NavBar";
import vk from "../Footer/vkontakte.png";
import yandex from "../Footer/yandex.png";
import google from "../Footer/google.png";
// import logo from '../../assets/images/logo1.jpg'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.background}>
                <img className={s.logo} src={'https://www.downloadclipart.net/large/real-estate-png-photos.png'} alt="logo"/>
            </div>
                <NavBar/>
            <div className={s.img_block}>
                <a href="https://vk.com/annlider69">
                    <img className={s.img} src={vk} alt="vk"/>
                </a>
                <a href="https://yandex.ru/maps/?ll=36.439696%2C56.553130&mode=poi&poi%5Bpoint%5D=36.438741%2C56.553045&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D167817040489&z=19.2">
                    <img className={s.img} src={yandex} alt="yandex"/>
                </a>
                <a href="https://www.google.ru/maps/place/%D0%90%D0%BD%D0%BD%D0%9B%D0%B8%D0%B4%D0%B5%D1%80/@56.5531378,36.4383584,19z/data=!4m5!3m4!1s0x46b5cbb3d2832585:0x835b79d360b15c4b!8m2!3d56.5531378!4d36.4389056?hl=ru">
                    <img className={s.img} src={google} alt="google"/>
                </a>
            </div>
        </div>
    );
};

export default Header;
