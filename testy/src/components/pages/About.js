import React from "react";

const About = () =>
  <div>
    <div className='gendiv'>
       <div className='container'>
          <div className='row'>
             <div className='resume1 listy1'><a href='./assets/Resume-for-Alexander-von-Bredow.pdf' >Resume</a></div>
             <div className='cont1 col m6 s12 offset-m3 abbouter'>About me:</div>
             <div className='col m6 s12 aboutcontent'><img className='javaimg' src='test.jpg' alt='lil ol me'/></div>
             <div className='smalltext col m6 s12 abtsmall'>My name is Alexander von Bredow and I am a full-stack web developer. I create websites, manage server configuration, and wrangle code. I do it all. I have a degree in Biology, enjoy rock climbing, coffee, and problem solving. Take a look around</div>
          </div>
       </div>
    </div>
  </div>;

export default About;
