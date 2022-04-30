import React, { useRef, useEffect, useState } from 'react';

// import { images } from '../../constants';
import './AboutUs.css';

import { motion } from 'framer-motion';
import images from './images';

const AboutUs = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth + carousel.current.offsetWidth);
    }, []);

    return (
        <div className="app__aboutus  section__padding" id="about">
            {/* <div className="gradient-about"></div>
            <div className="gradient-about"></div>
            <div className="gradient-about"></div> */}
            <div className="app__aboutus-content">
                <div className="aboututs__header">
                    <h1 className="headtext__cormorant">Обо мне</h1>
                    {/* <div className="anim-line"></div> */}
                </div>
                <div className="aboututs__main">
                    <div className="app__aboutus-content_about">
                        <h1 className="headtext__cormorant__mini">
                            Сколько лет в ПМ
                        </h1>
                        <p className="p__opensans">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nulla, id quo fugit harum facere doloribus
                            porro at earum perspiciatis cupiditate unde esse
                            exercitationem iusto, minus sit asperiores numquam
                            consequatur illo? Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Nulla, id quo fugit
                            harum facere doloribus porro at earum perspiciatis
                            cupiditate unde esse exercitationem iusto, minus sit
                            asperiores numquam consequatur illo?
                        </p>
                        <p className="p__opensans">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nulla, id quo fugit harum facere doloribus
                            porro at earum perspiciatis cupiditate unde esse
                            exercitationem iusto, minus sit asperiores numquam
                            consequatur illo? Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Nulla, id quo fugit
                            harum facere doloribus porro at earum perspiciatis
                            cupiditate.
                        </p>
                    </div>

                    <div className="app__aboutus-content_diplomas">
                        <h1 className="headtext__cormorant__mini">
                            Регалии и дипломы
                        </h1>

                        <motion.div ref={carousel} className="carousel">
                            <motion.div
                                drag="x"
                                dragConstraints={{ right: 100, left: -width }}
                                className="inner-carousel"
                                animate={{ x: 250 }}
                            >
                                {images.map((image) => {
                                    return (
                                        <motion.div
                                            className="item"
                                            key={image}
                                        >
                                            <img src={image} alt="" />
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
