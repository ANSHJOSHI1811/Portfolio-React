import React, {useState,useEffect } from 'react';
import { AiFillGithub ,AiOutlineLink} from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    // Simulating backend response
    const backendWorks = [
      {
        title: 'MOVIX List',
        description: 'Created a webApp where you can View Information About the Upcoming Movie',
        codeLink: 'https://github.com/ANSHJOSHI1811/Task_Tracker',
        projectLink: 'https://movixapp-one.vercel.app/',
        imgUrl: images.movix,
        tags: ['React-JS', 'All']
      },
      {
        title: 'Youtube Clone',
        description: 'Create a Youtube Clone using React-Redux and Customs Hooks ',
        codeLink: 'https://github.com/ANSHJOSHI1811/Task_Tracker',
        projectLink: 'https://youtubeeclone.vercel.app/',
        imgUrl: images.yt,
        tags: ['React-JS', 'All']
      },
      {
        title: 'Crypto App',
        description: 'Created Crypto Currency Tracking App using using React ',
        codeLink: 'https://github.com/ANSHJOSHI1811/Task_Tracker',
        projectLink: 'https://cryptocapp.vercel.app/',
        imgUrl: images.crypto,
        tags: ['React-JS', 'All']
      },
      {
        title: 'Postman Clone',
        description: 'A React-based Postman clone for simplifying API development, testing, and debugging with an intuitive user interface.',
        codeLink: 'https://github.com/ANSHJOSHI1811',
        projectLink: 'https://postmancclone.vercel.app/',
        imgUrl: images.react,
        tags: ['React-JS', 'All']
      },
      {
        title: 'Pious E-Commerce',
        description: 'Created a MERN Stack Project using MVC Archtecut',
        codeLink: 'https://github.com/ANSHJOSHI1811',
        projectLink: 'https://difficult-bikini-toad.cyclic.app/login',
        imgUrl: images.full,
        tags: ['Full-Stack', 'All']
      },
      {
        title: 'IHBA Web-App',
        description: 'A website for checking bed availability and facilities in hospitals, ensuring efficient access to healthcare resources.',
        codeLink: 'https://github.com/bhavika372/Indore-Hospitals---Copy-2-',
        projectLink: 'https://github.com/bhavika372/Indore-Hospitals---Copy-2-',
        imgUrl: images.ihba,
        tags: ['Minor-Project', 'All']
      },
      {
        title: 'CultiMate',
        description: 'A simple ML and DL based website which recommends the best crop to grow, fertilizers to use and the diseases caught by your crops.',
        codeLink: 'https://github.com/Anushka177/Cultimate-final-project',
        projectLink: 'https://github.com/Anushka177/Cultimate-final-project',
        imgUrl: images.cultimate,
        tags: ['Minor-Project', 'All']
      },
      {
        title: 'ToDo List',
        description: 'Developed a dynamic and interactive Todo List using React to track and manage tasks efficiently.',
        codeLink: 'https://github.com/ANSHJOSHI1811/Task_Tracker',
        projectLink: 'www.google.com',
        imgUrl: images.todo,
        tags: ['React-JS', 'All']
      },
   
    ];

    setWorks(backendWorks);
    setFilterWork(backendWorks);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My Creative <span>Work</span> Section</h2>

      <div className="app__work-filter">
        {['React-JS','Full-Stack','Minor-Project','All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
               
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiOutlineLink/>
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);