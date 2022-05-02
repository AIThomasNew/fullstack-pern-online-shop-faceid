import React from 'react';
import irinaStudy from '../../assets/masters/irinaStudy.png';
import masterAnna from '../../assets/masters/masterAnna.png';
import masterLilia from '../../assets/masters/masterLilia.png';
import masterNasty from '../../assets/masters/masterNasty.png';
import masterStefania from '../../assets/masters/masterStefania.png';

import './OurMasters.css';

const OurMasters = () => {
    return (
        <div className="OurMasters app__bg">
            <h1 className="headtext__cormorant">Наши мастера</h1>
            <div className="OurMasters__cards">
                <div className="OurMasters__card-Master">
                    <div className="OurMasters__card-Masters-content">
                        <h2>Master Master</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit illum, quaerat libero nemo
                            consequatur omnis!
                        </p>
                        <a href="#">Записаться</a>
                    </div>
                    <img className="imageMasters" src={irinaStudy} />
                </div>
                <div className="OurMasters__card-Master">
                    <div className="OurMasters__card-Masters-content">
                        <h2>Master Master</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit illum, quaerat libero nemo
                            consequatur omnis!
                        </p>
                        <a href="#">Записаться</a>
                    </div>

                    <img className="imageMasters" src={masterAnna} />
                </div>
                <div className="OurMasters__card-Master">
                    <div className="OurMasters__card-Masters-content">
                        <h2>Master Master</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit illum, quaerat libero nemo
                            consequatur omnis!
                        </p>
                        <a href="#">Записаться</a>
                    </div>

                    <img className="imageMasters" src={masterLilia} />
                </div>
                <div className="OurMasters__card-Master">
                    <div className="OurMasters__card-Masters-content">
                        <h2>Master Master</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit illum, quaerat libero nemo
                            consequatur omnis!
                        </p>
                        <a href="#">Записаться</a>
                    </div>

                    <img className="imageMasters" src={masterNasty} />
                </div>
                <div className="OurMasters__card-Master">
                    <div className="OurMasters__card-Masters-content">
                        <h2>Master Master</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit illum, quaerat libero nemo
                            consequatur omnis!
                        </p>
                        <a href="#">Записаться</a>
                    </div>

                    <img className="imageMasters" src={masterStefania} />
                </div>
            </div>
        </div>
    );
};

export default OurMasters;
