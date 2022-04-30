import React from 'react';

import './Study.css';
import master from '../../assets/masters/master.png';

const Study = () => {
    return (
        <div className="Study">
            <div className="study__content">
                <div className="study-header">
                    <div className="anim-line"></div>
                    <h1 className="headtext__cormorant ">Обучающие курсы</h1>
                </div>
                <div className="study-main">
                    <div className="app__header_buttons">
                        <a href="#">
                            <span className="head__hover">Очное обучение</span>
                        </a>
                        <a href="#">
                            <span className="head__hover">Онлайн обучение</span>
                        </a>
                    </div>
                    <div className="photo__irina">
                        <img className="irina_study" src={master} />
                    </div>
                </div>
            </div>
            {/* <span className="SkewedOne"></span> */}
            {/* <span className="SkewedTwo"></span> */}
        </div>
    );
};

export default Study;
