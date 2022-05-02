import React from 'react';

// import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
    <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_img">
            <img src={images.irina2} alt="header_img" />
        </div>
        {/* <div className="app__header_buttons">
            <a href="#">
                <span>Обучающие курсы</span>
            </a>
            <a href="#">
                <span>Интернет магазин</span>
            </a>
            <a href="#">
                <span>Центр ПМ FACE ID</span>
            </a>
            <a href="#">
                <span>Спецпредложения</span>
            </a>
        </div> */}
        <div className="app__wrapper_h1">
            <h1 className="LOGO_TEXT">
                <span>FACE</span>
                <span> ID</span>
            </h1>
        </div>
        <div className="app__wrapper_h2">
            <h2 className="PM_TEXT pm-text1">Центр перманентного макияжа</h2>
            <h2 className="PM_TEXT pm-text2">Ирины Абашевой</h2>
        </div>
    </div>
);

export default Header;
