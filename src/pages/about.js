import React from "react";
function About(){
    return(
        
         <main id="main">
<section id="about" className="about-mf sect-pt4 route">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="box-shadow-full">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-sm-6 col-md-5">
                  <div className="about-img">
                    <img src="assets/img/danny.png" className="img-fluid rounded b-shadow-a" alt=""/>
                  </div>
                </div>
                <div className="col-sm-6 col-md-7">
                  <div className="about-info">
                    <p><span className="title-s">Name: </span> <span>Daniel HAGENIMANA</span></p>
                    <p><span className="title-s">Profile: </span> <span>UHDSS GROUP</span></p>
                    <p><span className="title-s">Email: </span> <span>me@hagenimanadaniel.com</span></p>
                    <p><span className="title-s">Phone: </span> <span>+250 785 395 473 </span></p>
                  </div>
                </div>
              </div>
              <div className="skill-mf">
                <p className="title-s">Skill</p>
                <span>Management</span> <span className="pull-right">98%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: "98%"}} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span>Problem Soliving</span> <span className="pull-right">98%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: "98%"}} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span>Risk Management</span> <span className="pull-right">95%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span>Better Communication</span> <span className="pull-right">99%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: "99%"}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                </div><span>Leadership</span> <span className="pull-right">99%</span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: "99%"}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-me pt-4 pt-md-0">
                <div className="title-box-2">
                  <h5 className="title-left">
                    About me
                  </h5>
                </div>
                <p className="lead">
                Daniel Hagenimana is a Rwandan entrepreneur. He is the CEO of UHDSS GROUP, Universal ,
                UHDSS education agency, 
                Universal Certification, Top Skills World, and Universal Brokers. 
                </p>
                <p className="lead">
                Born on 23rd October 1998 in Nyanza, southern Rwanda, he serves as a business advisor and 
                consultant specializing in business development, 
                strategic change management, and market analysis.
                </p>
                <p className="lead">
                He enjoys attending youth business forums and possesses experience in project management and 
                initiating businesses from the ground up, particularly in the field of education. 
                He is expected to complete his Doctorate in Business Management by 2025.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </main>
    )
}
export default About;