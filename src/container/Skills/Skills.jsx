import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip }  from 'react-tooltip';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Skills.scss';


// const skills= [
//   {title:'web-development',description:'I am a Good Developer',projectLink:'www.google.com',codeLink:'www.youtube.com',imgUrl:images.about01},
// ]



const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    

    const backendExperiences = [
      {
        year: '2023',
        works: [
          {
            name: 'Accenture Virtual Experience (Developer) ',
            company: 'Accenture',
            desc: 'Work 1 description'
          },
          {
            name: 'React Professional Certification',
            company: 'Meta ',
            desc: 'React Professional Certification'
          }
        ]
      },

      {
        year: '2022',
        works: [

          {
            name: 'MERN Stack (Training )',
            company: 'CodeBetter Institute ',
            desc: 'Web-Developer'
          },
          {
            name: 'Php Web-developer (Intern)',
            company: 'Soft-tech Solutions',
            desc: 'Web-Developer'
          },
         
        ]
      },
      {
        year: '2021',
        works: [
          {
            name: 'Calarts: Graphic Design Fundamentals',
            company: 'Califorina Institute of Arts ',
            desc: 'Work 3 description'
          },
        ]
      },
      {
        year: '2020',
        works: [
          {
            name: 'Higher Secondary Education (12th Sci)',
            company: 'Presidency School',
            desc: 'Work 3 description'
          },
        ]
      },

    ];
    const backendSkills = [
 
      {
        name: 'C++',
        bgColor: '#DDE6ED',
        icon: images.cpp
      },
      {
        name: 'HTML',
        bgColor: '#DDE6ED',
        icon: images.html
      },
      {
        name: 'CSS',
        bgColor: '#DDE6ED',
        icon: images.css
      },
      {
        name: 'Javascript',
        bgColor: '#DDE6ED',
        icon: images.javascript
      },
      {
        name: 'Jquery',
        bgColor: '#DDE6ED',
        icon: images.jquery
      },
      {
        name: 'React JS',
        bgColor: '#DDE6ED',
        icon: images.r
      },
      {
        name: 'Redux',
        bgColor: '#DDE6ED',
        icon: images.redux
      },
      {
        name: 'Node JS',
        bgColor: '#DDE6ED',
        icon: images.n
      },
   
    
     
    ];

    setExperiences(backendExperiences);
    setSkills(backendSkills);
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);