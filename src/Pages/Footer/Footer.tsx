import React from 'react';
import s from './Footer.module.scss'

const Footer = () => {
    return (
        <div>
            <div className={s.block}>About</div>
            <div className={s.block}>Info</div>
            <div className={s.block}>Contacts</div>
        </div>
    );
};

export default Footer;
