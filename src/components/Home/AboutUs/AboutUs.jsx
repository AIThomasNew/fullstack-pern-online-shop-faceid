import React, { useRef, useEffect, useState } from 'react';
import './AboutUs.css';
import imagesVertical from './imagesV';
import imagesGorizontal from './imagesG';
import { motion } from 'framer-motion';

const AboutUs = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    const [width2, setWidth2] = useState(0);
    const carousel2 = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth / 11 + carousel.current.offsetWidth);
    }, []);
    useEffect(() => {
        setWidth2(carousel2.current.scrollWidth / 0.9 - carousel2.current.offsetWidth);
    }, []);

    return (
        <div className="app__aboutus  section__padding" id="about">
            <div className="app__aboutus-content">
                <div className="aboutus__header">
                    <h1 className="headtext__cormorant">Обо мне</h1>
                </div>

                <div className="aboutus__main">
                    <div className="app__aboutus-content_about">
                        <h1 className="headtext__cormorant__mini">Сколько лет в ПМ</h1>
                        <p className="p__opensans">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, id quo fugit harum facere
                            doloribus porro at earum perspiciatis cupiditate unde esse exercitationem iusto, minus sit
                            asperiores numquam consequatur illo? Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nulla, id quo fugit harum facere doloribus porro at earum perspiciatis cupiditate unde
                            esse exercitationem iusto, minus sit asperiores numquam consequatur illo?
                        </p>
                        <p className="p__opensans">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, id quo fugit harum facere
                            doloribus porro at earum perspiciatis cupiditate unde esse exercitationem iusto, minus sit
                            asperiores numquam consequatur illo? Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nulla, id quo fugit harum facere doloribus porro at earum perspiciatis cupiditate.
                        </p>
                    </div>

                    <div className="app__aboutus-content_diplomas">
                        <h1 className="headtext__cormorant__mini">Регалии и дипломы</h1>

                        <motion.div ref={carousel} className="carousel">
                            <motion.div
                                drag="x"
                                dragConstraints={{ right: 100, left: -width }}
                                className="inner-carousel"
                                animate={{ x: 250 }}>
                                {imagesVertical.map((imageVertical) => {
                                    return (
                                        <motion.div className="item" key={imageVertical}>
                                            <img src={imageVertical} alt="" />
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>

                        <motion.div ref={carousel2} className="carousel-2">
                            <motion.div
                                drag="x"
                                dragConstraints={{ right: 100, left: -width2 }}
                                className="inner-carousel-2"
                                animate={{ x: 250 }}>
                                {imagesGorizontal.map((imageGorizontal) => {
                                    return (
                                        <motion.div className="item-2" key={imageGorizontal}>
                                            <img src={imageGorizontal} alt="" />
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
