import React from 'react';

import './OurMasters.css';
import master from '../../assets/masters/master.png';

// const images = [master, master, master, master, master];

const OurMasters = () => {
    return (
        <div className="OurMasters app__bg">
            <h1 className="headtext__cormorant">Наши мастера</h1>
            <div className="OurMasters__cards">
                <div className="OurMasters__card-Master">
                    <div className="OurMasters__card-Masters-content">
                        <h2>Master Master</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Velit illum, quaerat libero nemo consequatur
                            omnis!
                        </p>
                        <a href="#">Записаться</a>
                    </div>
                    <img className="imageMasters" src={master} />
                </div>
                <div className="OurMasters__card-Master">
                    <div className="OurMasters__card-Masters-content">
                        <h2>Master Master</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Velit illum, quaerat libero nemo consequatur
                            omnis!
                        </p>
                        <a href="#">Записаться</a>
                    </div>
                    <img className="imageMasters" src={master} />
                </div>
                <div className="OurMasters__card-Master">
                    <div className="OurMasters__card-Masters-content">
                        <h2>Master Master</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Velit illum, quaerat libero nemo consequatur
                            omnis!
                        </p>
                        <a href="#">Записаться</a>
                    </div>
                    <img className="imageMasters" src={master} />
                </div>
                <div className="OurMasters__card-Master">
                    <div className="OurMasters__card-Masters-content">
                        <h2>Master Master</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Velit illum, quaerat libero nemo consequatur
                            omnis!
                        </p>
                        <a href="#">Записаться</a>
                    </div>
                    <img className="imageMasters" src={master} />
                </div>
            </div>
        </div>
    );
};

export default OurMasters;
