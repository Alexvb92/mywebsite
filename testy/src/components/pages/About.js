import React from "react";

const About = () =>
  <div>
    <div className='gendiv'>
       <div className='container'>
          <div className='row'>
          <div class='row'>
       <div class='cont1 col m6 s12 offset-m3'>About Me:</div>
    </div>


            <div className='col m6 s12 offset-m3'>
             <div className='col s12 m12 l6'>
                <img className='javaimg' src={require('../../assets/images/me.png')} alt='lil ol me'/>
                <div className='resume1 col s12'><a href='./assets/Resume-for-Alexander-von-Bredow.pdf' target="_blank">Resume</a></div>
             </div>
             <div className='col s12 m12 l6'>
               <div className='smalltext abtsmall'>My name is Alexander von Bredow and I am a full-stack web developer. I have a degree in Biology, enjoy rock climbing, coffee, and problem solving. Take a look around
               </div>
             </div>
          </div>
       </div>
    </div>
  </div>
</div>;

export default About;
