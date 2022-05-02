import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="app__navbar">
            {/* Лого */}
            <div className="app__navbar-logo">
                <img src={images.faceid} alt="app__logo" />
            </div>

            {/* Меню */}
            <div className="app__navbar-links">
                <NavLink to="/" className="p__opensans">
                    ГЛАВНАЯ
                </NavLink>
                <NavLink to="/study" className="p__opensans">
                    ОБУЧЕНИЕ
                </NavLink>
                <NavLink to="services" className="p__opensans">
                    УСЛУГИ
                </NavLink>
                <NavLink to="/shop" className="p__opensans">
                    МАГАЗИН
                </NavLink>
            </div>

            {/* Логин */}
            <div className="app__navbar-login">
                <NavLink to="/" className="p__opensans">
                    ВХОД / РЕГИСТРАЦИЯ
                </NavLink>
                {/* <div /> */}
                {/* <a href="/" className="p__opensans">
                    КОРЗИНА
                </a> */}
            </div>

            {/* Бургер */}
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <VscChromeClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />

                        <div className="app__navbar-smallscreen_links">
                            <NavLink to="/" className="li__opensans" onClick={() => setToggleMenu(false)}>
                                Главная
                            </NavLink>
                            <NavLink to="/study" className="li__opensans" onClick={() => setToggleMenu(false)}>
                                Обучение
                            </NavLink>
                            <NavLink to="/services" className="li__opensans" onClick={() => setToggleMenu(false)}>
                                Услуги
                            </NavLink>
                            <NavLink to="/shop" className="li__opensans" onClick={() => setToggleMenu(false)}>
                                Магазин
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
