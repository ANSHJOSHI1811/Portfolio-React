import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
const abouts = [
  {title:'React-Developer',description:'React developer adept at building dynamic web applications with modern JavaScript frameworks',imgUrl:images.front},
  {title:'Graphics-Designer',description:'Creative graphics designer skilled in visual storytelling and captivating design',imgUrl:images.graphic},
  {title:'JS-Backend Developer',description:'Enthusiastic beginner JS Backend Developer eager to learn and contribute to building server-side applications.',imgUrl:images.back},
]
const About = () => {
  return (
    <>
      <h2 className="head-text">Programmer in <span>Day</span> <br />Graphix Designer at <span>Night</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);