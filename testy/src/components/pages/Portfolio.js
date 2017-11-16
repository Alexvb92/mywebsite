import React from "react";

const Portfolio = () =>
<div>
  <div className='gendiv'>
     <div className='container'>
        <div className='row'>
           <div className='cont1 col s12 m6'>
              <div className='col s12'>
                 Portfolio
              </div>
              <a href='http://to-go.herokuapp.com/' target='_blank'>
                 <div className='togo col s12'>
                    <div className='col s12 smallertext'>
                       ToGo.herokuapp.com
                    </div>
                    <img id='bkimg' src='./assets/images/togogrey.png' />
                 </div>
              </a>
              <a href='http://broadkillbeachhouse.com/' target='_blank'>
                 <div className='broadkill col s12'>
                    <div className='col s12 smallertext'>
                       Broadkillbeachhouse.com
                    </div>
                    <img id='bkimg' src='./assets/images/broadkillgrey.png' />
                 </div>
              </a>
           </div>
           <div className='listy1 aander'>
              &amp;&amp;
           </div>
           <div className='resume listy1'>
              <a href='./assets/Resume-for-Alexander-von-Bredow.pdf' >
                 Resume
              </a>
           </div>
           <div className='col s12 m6'>
              <div className='row center nomargin'>
                 <div className='row cont1'>
                    Skills
                 </div>
                 <i className='icons fadein6 devicon-webpack-plain' alt='Webpack'></i>
                 <i className='icons fadein7 devicon-jquery-plain'></i>
              </div>
              <div className='row center nomargin'>
                 <i className='icons fadein5 devicon-react-original'></i>
                 <i className='icons fadein1 devicon-javascript-plain'></i>
                 <i className='icons fadein8 devicon-html5-plain'></i>
              </div>
              <div className='row center nomargin'>
                 <i className='icons fadein14 devicon-css3-plain'></i>
                 <i className='icons fadein4 devicon-bootstrap-plain'></i>
                 <i className='icons fadein2 devicon-nodejs-plain'></i>
                 <i className='icons fadein9 devicon-git-plain'></i>
              </div>
              <div className='row center nomargin'>
                 <i className='icons fadein13 devicon-mongodb-plain'></i>
                 <i className='icons fadein3 devicon-atom-original'></i>
                 <i className='icons fadein10 devicon-heroku-original'></i>
              </div>
              <div className='row center nomargin'>
                 <i className='icons fadein12 devicon-mocha-plain'></i>
                 <i className='icons fadein11 devicon-sequelize-plain'></i>
              </div>
           </div>
        </div>
     </div>
  </div>
</div>

export default Portfolio;
