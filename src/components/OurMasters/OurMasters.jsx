import React from 'react';
import { NavLink } from 'react-router-dom';

import masterIrina from '../../assets/masters/masterIrina.png';
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
        <div className="lvl1">
          <div className="OurMasters__card-Master">
            <div className="OurMasters__card-Masters-content">
              <h2>Мастер-преподаватель Ирина:</h2>
              <p className="p-silver">Перманентный макияж бровей/губ/век(стрелка) </p>
              <ul>
                <li>Основная 7000р</li>
                <li>Коррекция 4000р</li>
                <li>Обновление 5000р</li>
                <li>Межресничка основная 5000р</li>
                <li>Коррекция 3000р</li>
                <li>Обновление 4000р</li>
                <li>Волоски: Основная 5000р</li>
                <li>Волоски: Коррекция 3000р</li>
              </ul>
              {/* <a href="#">Записаться</a> */}
            </div>
            <img className="imageMasters" src={masterIrina} />
          </div>

          <div className="OurMasters__card-Master">
            <div className="OurMasters__card-Masters-content">
              <h2>Администратор: Анастасия</h2>
            </div>
            <img className="imageMasters" src={masterNasty} />
          </div>
        </div>

        <div className="lvl2">
          <div className="OurMasters__card-Master">
            <div className="OurMasters__card-Masters-content">
              <h2>Топ-мастер: Анна</h2>
              <p className="p-silver">Перманентный макияж бровей/губ/век (межресничка, стрелочка)</p>
              <ul>
                <li>Основная 4000р</li>
                <li>Коррекция 2000р</li>
                <li>Обновление 4000р</li>
              </ul>
            </div>

            <img className="imageMasters" src={masterAnna} />
          </div>

          <div className="OurMasters__card-Master">
            <div className="OurMasters__card-Masters-content">
              <h2>Стефания</h2>
              <p className="p-silver">Перманентный макияж бровей/губ/век (межресничка, стрелочка)</p>
              <ul>
                <li>Основная 4000р</li>
                <li>Коррекция 2000р</li>
                <li>Обновление 4000р</li>
                <li>Удаление некачественного татуажа лазером брови-1500р</li>
                <li>Лазером веки-2000р</li>
                <li>Ремувер брови/губы/веки - 2500р</li>
                <li>Удаление тату от 500р</li>
              </ul>
            </div>
            <img className="imageMasters" src={masterStefania} />
          </div>
        </div>

        <div className="lvl3"></div>
        <div className="OurMasters__card-Master">
          <div className="OurMasters__card-Masters-content">
            <div className="read-next">
              <h2>Мастер: Лилия</h2>
              <p className="p-silver">Перманентный макияж бровей/губ/век (межресничка, стрелочка)</p>
              <ul>
                <li>Основная 4000р</li>
                <li>Коррекция 2000р</li>
                <li>Обновление 4000р</li>
                <li>Удаление некачественного татуажа лазером брови-1500р</li>
                <li>Лазером веки-2000р</li>
                <li>Ремувер брови/губы/веки - 2500р</li>
                <li>Удаление тату от 500р</li>
                <li>Окрашивание ресниц - 200р</li>
                <li>Окрашивание бровей - 200р</li>
                <li>Оформление + окрашивание бровей краской - 500р </li>
                <li>Оформление + окрашивание бровей хной - 700р</li>
                <li>Ламинирование бровей - 1200р</li>
                <li>Ламинирование ресниц - 1200р </li>
                <li>КОМПЛЕКС: Ламинирование + оформление + окрашивание бровей краской - 1500р </li>
                <li>КОМПЛЕКС: Ламинирование + оформление + окрашивание бровей хной - 1700р </li>
                <li>Ламинирование ресниц + Ламинирование бровей - 2000р</li>
              </ul>
            </div>
          </div>
          <img className="imageMasters" src={masterLilia} />
        </div>
      </div>

      <div>
        <NavLink to="/entry" className="container__price">
          <p>Записаться</p>
        </NavLink>
      </div>
    </div>
  );
};

export default OurMasters;
