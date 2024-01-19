import React, { useState } from "react";
function Contact (){
const [subject, setSubject] = useState('');
const [message, setMessage] = useState('');


    return (
<>
<section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: "url(assets/img/overlay-bg.jpg)"}}>
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        Send Message Us
                      </h5>
                    </div>
                    <div>
                      <form  className="php-email-form">
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required onChange={(e)=> setSubject(e.target.value)} />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea className="form-control" name="message" rows="5" placeholder="Message" required onChange={(e)=>setMessage(e.target.value)}></textarea>
                            </div>
                          </div>
                          <div className="col-md-12 text-center my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                          </div>
                          <div className="col-md-12 text-center">
                            <button type="button" className="button button-a button-big button-rouded">
                              <a href={`mailto:me@danielhagenimana.com?Regarding 
                                   ${subject}&body=${message}`} 
                                 className="bg-slate-700 uppercase text-white p-3 rounded-lg text-center hover:opacity-95">
                                   Send message
                                 </a>
                              </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">
                        Get in Touch
                      </h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                      I'm here to provide information and complete tasks as instructed, 
                      so if you have something you'd like to know or need done, 
                      contacting me is the perfect way to do it.
                      </p>
                      <ul className="list-ico">
                        <li><span className="bi bi-geo-alt"></span> Kigali-Rwanda</li>
                        <li><span className="bi bi-phone"></span> +250 785 395 473</li>
                        <li><span className="bi bi-envelope"></span> me@hagenimanadaniel.com</li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li><a href="https://www.facebook.com/profile.php?id=100008436885107"><span className="ico-circle"><i className="bi bi-facebook"></i></span></a></li>
                        <li><a href="https://www.instagram.com/trophime250/"><span className="ico-circle"><i className="bi bi-instagram"></i></span></a></li>
                        <li><a href="https://twitter.com/Theprie59583402"><span className="ico-circle"><i className="bi bi-twitter"></i></span></a></li>
                        <li><a href="https://www.linkedin.com/in/trophime-karasisi-1186b622b/"><span className="ico-circle"><i className="bi bi-linkedin"></i></span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</>

    )
}
export default Contact;