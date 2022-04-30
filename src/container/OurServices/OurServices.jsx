import React from 'react';

import './OurServices.css';
import servicesPhoto1 from '../../assets/services/servicesPhoto1.jpg';
import servicesPhoto2 from '../../assets/services/servicesPhoto2.jpg';
import servicesPhoto3 from '../../assets/services/servicesPhoto3.jpg';

const OurServices = () => {
    return (
        <div className="OurServices">
            <h1 className="headtext__cormorant__OurServices-black">
                Наши услуги
            </h1>

            <div className="container__services">
                <div className="container__services-box">
                    <div className="icon icon-1">
                        {/* <ion-icon name="eye-outline"></ion-icon> */}
                        <img className="imageService" src={servicesPhoto1} />
                    </div>
                    <div className="content">
                        <h2>Design</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Culpa explicabo hic iure, sapiente inventore
                            eius!
                        </p>
                    </div>
                </div>
                <div className="container__services-box">
                    <div className="icon icon-2">
                        {/* <ion-icon name="archive-outline"></ion-icon> */}
                        <img className="imageService" src={servicesPhoto2} />
                    </div>
                    <div className="content">
                        <h2>Design</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Culpa explicabo hic iure, sapiente inventore
                            eius!
                        </p>
                    </div>
                </div>
                <div className="container__services-box">
                    <div className="icon icon-3">
                        {/* <ion-icon name="heart-outline"></ion-icon> */}
                        <img className="imageService" src={servicesPhoto3} />
                    </div>
                    <div className="content">
                        <h2>Design</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Culpa explicabo hic iure, sapiente inventore
                            eius!
                        </p>
                    </div>
                </div>
                <div className="container__services-box">
                    <div className="icon icon-4">
                        {/* <ion-icon name="heart-outline"></ion-icon> */}
                        <img className="imageService" src={servicesPhoto3} />
                    </div>
                    <div className="content">
                        <h2>Design</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Culpa explicabo hic iure, sapiente inventore
                            eius!
                        </p>
                    </div>
                </div>
                <div className="container__services-box">
                    <div className="icon icon-5">
                        {/* <ion-icon name="eye-outline"></ion-icon> */}
                        <img className="imageService" src={servicesPhoto1} />
                    </div>
                    <div className="content">
                        <h2>Design</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Culpa explicabo hic iure, sapiente inventore
                            eius!
                        </p>
                    </div>
                </div>
                <div className="container__services-box">
                    <div className="icon icon-6">
                        {/* <ion-icon name="archive-outline"></ion-icon> */}
                        <img className="imageService" src={servicesPhoto2} />
                    </div>
                    <div className="content">
                        <h2>Design</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Culpa explicabo hic iure, sapiente inventore
                            eius!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
