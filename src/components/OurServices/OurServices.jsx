import React from 'react';
import './OurServices.css';
import { NavLink } from 'react-router-dom';

import servicesPhoto1 from '../../assets/services/servicesPhoto1.jpg';
import servicesPhoto2 from '../../assets/services/servicesPhoto2.jpg';
import servicesPhoto3 from '../../assets/services/servicesPhoto3.jpg';

const OurServices = () => {
  return (
    <div className="OurServices app__bg" id="services">
      <h1 className="headtext__cormorant">Центр ПМ FACE ID</h1>

      <div className="container__services">
        <div className="container__services-box">
          <div className="icon icon-1">
            <img className="imageService" src={servicesPhoto1} />
          </div>
          <div className="content">
            <h2>Губы</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa explicabo hic iure, sapiente inventore
              eius!
            </p>
          </div>
        </div>
        <div className="container__services-box">
          <div className="icon icon-2">
            <img className="imageService" src={servicesPhoto2} />
          </div>
          <div className="content">
            <h2>Веки</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa explicabo hic iure, sapiente inventore
              eius!
            </p>
          </div>
        </div>
        <div className="container__services-box">
          <div className="icon icon-3">
            <img className="imageService" src={servicesPhoto3} />
          </div>
          <div className="content">
            <h2>Брови</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa explicabo hic iure, sapiente inventore
              eius!
            </p>
          </div>
        </div>
        <div className="container__services-box">
          <div className="icon icon-4">
            <img className="imageService" src={servicesPhoto3} />
          </div>
          <div className="content">
            <h2>Удаление</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa explicabo hic iure, sapiente inventore
              eius!
            </p>
          </div>
        </div>
        <div className="container__services-box">
          <div className="icon icon-5">
            <img className="imageService" src={servicesPhoto1} />
          </div>
          <div className="content">
            <h2>Ламинирование</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa explicabo hic iure, sapiente inventore
              eius!
            </p>
          </div>
        </div>
        <div className="container__services-box">
          <div className="icon icon-6">
            <img className="imageService" src={servicesPhoto2} />
          </div>
          <div className="content">
            <h2>Ремувер</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa explicabo hic iure, sapiente inventore
              eius!
            </p>
          </div>
        </div>
      </div>
      <div>
        <NavLink to="/price" className="container__price">
          <p>Прайс</p>
        </NavLink>
      </div>
    </div>
  );
};

export default OurServices;
