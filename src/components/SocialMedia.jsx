import React from 'react';
import { BsTwitter, BsInstagram,BsLinkedin } from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href='https://twitter.com/ANSHSJOSHI1'><BsTwitter /></a>  
    </div>
    <div>
      <a href='https://www.linkedin.com/in/ansh-joshi-6162951b3/'><BsLinkedin /></a>
    </div>
    <div>
      <a href='https://www.instagram.com/_anshjoshii/'><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;
