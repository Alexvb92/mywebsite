import React from "react";

const Portfolio = () =>
<div>
  <div className='gendiv'>
     <div className='container'>
        <div className='row'>
           <div className='cont1 col s12 l6'>
              <div className='col s12'>
                 Portfolio
              </div>
              <div className='row'>
                <a href='http://to-go.herokuapp.com/' target='_blank'>
                   <div className='togo col s12 m6 l6'>
                      <div className='col s12 smallertext'>
                         ToGo.herokuapp.com
                      </div>
                      <img id='bkimg' src={require('../../assets/images/togogrey.png')} />
                   </div>
                </a>
                <a href='http://broadkillbeachhouse.com/' target='_blank'>
                   <div className='broadkill col s12 m6 l6'>
                      <div className='col s12 smallertext'>
                         Broadkillbeachhouse.com
                      </div>
                      <img id='bkimg' src={require('../../assets/images/broadkillgrey.png')} />
                   </div>
                </a>
              </div>
           </div>
           <div className='col s12 l6'>
              <div className='row center nomargin'>
                  <div className='row cont1'>
                    Skills
                  </div>
                </div>
              <div className='row center margtop'>
                <div className='col s2 fadein1 javascript1' alt='Javascript'>
                  <div className='hoverer center-align'>JavaScript
                  </div>
                </div>
                <div className='col s2  fadein2 html1'>
                  <div className='hoverer center-align'>
                    HTML5
                  </div>
                </div>
                <div className='col s2 fadein3 css1'>
                  <div className='hoverer center-align'>
                    CSS3
                  </div>
                </div>
                <div className='col s2 fadein4 jquery1'>
                  <div className='hoverer center-align'>Jquery
                  </div>
                </div>
                <div className='col s2 fadein5 git1'>
                  <div className='hoverer center-align'>
                    Git
                  </div>
                </div>
                <div className='col s2 fadein5 linux1'>
                  <div className='hoverer center-align'>
                    Linux
                  </div>
                </div>
              </div>
              <div className='row center '>
                <div className='col s2 leftmarg fadein6 react1'>
                  <div className='hoverer center-align'>
                    React
                  </div>
                </div>
                <div className='col s2 fadein7 mongo1'>
                  <div className='hoverer center-align'>
                    MongoDB
                  </div>
                </div>
                <div className='col s2 fadein8 sql1'>
                  <div className='hoverer center-align'>
                    MySQL
                  </div>
                </div>
                <div className='col s2 fadein9 node1'>
                  <div className='hoverer center-align'>Node
                  </div>
                </div>
                <div className='col s2 fadein9 amazonwebservices1'>
                  <div className='hoverer center-align'>
                  Amazon Web Services
                  </div>
                </div>
                <div className='col s2 fadein10 python1'>
                  <div className='hoverer center-align'>
                    Python
                  </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </div>
</div>

export default Portfolio;
