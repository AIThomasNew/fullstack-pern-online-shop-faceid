import React, { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.faceid} alt="app__logo" />
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans">
                    <a href="#home">ГЛАВНАЯ</a>
                </li>
                <li className="p__opensans">
                    <a href="#about">ОБО МНЕ</a>
                </li>
                <li className="p__opensans">
                    <a href="#study">ОБУЧЕНИЕ</a>
                </li>
                <li className="p__opensans">
                    <a href="#services">УСЛУГИ</a>
                </li>
                <li className="p__opensans">
                    <a href="#contact">МАГАЗИН</a>
                </li>
            </ul>
            <div className="app__navbar-login">
                <a href="#login" className="p__opensans">
                    ВХОД / РЕГИСТРАЦИЯ
                </a>
                {/* <div /> */}
                {/* <a href="/" className="p__opensans">
                    КОРЗИНА
                </a> */}
            </div>

            {/* Для маленького экрана */}
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <VscChromeClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className="app__navbar-smallscreen_links">
                            <li>
                                <a href="#home" onClick={() => setToggleMenu(false)}>
                                    Главная
                                </a>
                            </li>
                            <li>
                                <a href="#about" onClick={() => setToggleMenu(false)}>
                                    Обо мне
                                </a>
                            </li>
                            <li>
                                <a href="#menu" onClick={() => setToggleMenu(false)}>
                                    Обучение
                                </a>
                            </li>
                            <li>
                                <a href="#awards" onClick={() => setToggleMenu(false)}>
                                    Услуги
                                </a>
                            </li>
                            <li>
                                <a href="#contact" onClick={() => setToggleMenu(false)}>
                                    Магазин
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
