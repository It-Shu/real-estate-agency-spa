import React from 'react';
import s from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.block}>
                <h4 className={s.h}>О Нас</h4>
                <div>АннЛидер 25 лет опыта <br/> на рынке недвижимости</div>
            </div>
            <div className={s.block}>
                <h4 className={s.h}>Информация</h4>
            </div>
            <div className={s.block}>
                <h4 className={s.h}>Контакты</h4>
                <div>
                    почта:  <a href="mailto: annlider@bk.ru">annlider@bk.ru</a>
                </div>
                <div>
                    тел: <a href="tel:+79610179000">8-961-017-9000</a> ;
                    <a href="tel:+79038048582">8-903-804-85-82</a>
                    <div>
                        <a href="https://vk.com/annlider69">
                            <img src="./vk.png" alt="vk"/>
                        </a>
                        <a href="https://yandex.ru/maps/?ll=36.439696%2C56.553130&mode=poi&poi%5Bpoint%5D=36.438741%2C56.553045&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D167817040489&z=19.2">
                            <img src="./yandex.png" alt="yandex"/>
                        </a>
                        <a href="https://www.google.ru/maps/place/%D0%90%D0%BD%D0%BD%D0%9B%D0%B8%D0%B4%D0%B5%D1%80/@56.5531378,36.4383584,19z/data=!4m5!3m4!1s0x46b5cbb3d2832585:0x835b79d360b15c4b!8m2!3d56.5531378!4d36.4389056?hl=ru">
                            <img src="./google-maps.png" alt="google"/>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
