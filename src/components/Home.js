import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone,faEye, faFileArrowDown,faArrowRightFromBracket,faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faFacebook,faTwitter,faGoogle,faInstagram,faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link as ScrollLink, Element } from 'react-scroll';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Certificates from './Certificates';

function Home(){
    const [isOffCanvasOpen,setIsOffCanvasOpen]=useState(false);
    const toggleOffCanvas=()=>{
        const x=document.querySelector(".btnX");
        x.style.backgroundColor='red';
        setIsOffCanvasOpen(!isOffCanvasOpen);
    };
    const resumeURL = "https://easyupload.io/5o4wpj";
    const handleDownload = () => {
        // const url = window.URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = resumeURL;
        a.download = 'S V SAI SRIKAR - RESUME FINAL.pdf';
        a.click();
    };
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
  };
  function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 80) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
    return(
        <div className='BackgroundDiv1 Home container-fluid text-center border-top'>

            {/* Arrow Up */}
            <button type='button' className='btn btn-danger btn-floating btn-lg' onClick={topFunction} id="myBtn" title="Go to top"><FontAwesomeIcon icon={faArrowUp} bounce className='ArrowUp text-center mb-3'/></button>

            {/* Photo-Signature-Content */}
            <div className="PhotoSigIntro row row-cols-2 row-cols-md-2 row row-cols-sm-1" id='home'>
                {/* Photo-Signature */}
                <div className="PhotoSig col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xxl-5 border-2">
                    <div className='PhotoSigContent'>
                        <div className="Photo">
                            {/* <video src="https://v.ftcdn.net/05/35/21/95/700_F_535219533_44o8o6WmwOE1GUNgrRjt4N1ZAYOE5nii_ST.mp4" className='avatar image-fluid mb-2 mt-5'></video> */}
                            <img src='https://wepik.com/api/image/ai/9a74c046-7451-43d7-9dbd-18b5cbb95159?thumb=1' className='Profile1 avatar image-fluid mb-2' alt="" />
                            <div className="overlay"></div>
                        </div>
                        {/* <div>
                            <img src={sign} className='Sign w-25 mb-2 mt-2' alt="" />
                        </div> */}
                    </div>
                </div>
                {/* Introduction-Content */}
                <div className="Intro col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xxl-7 mt-5 ms-0">
                    <div className="IntroContent">
                        <h3 className="Name display-2 mt-5">Hi all, I'm Srikar.</h3>
                    </div>
                    <div className="AboutMeHeadDiv">
                        <h2 className="AboutMeHead">About Me</h2>
                    </div>
                    <div className="AboutMeContent">
                        <p className="Description text-white mt-4">Always has a can-do attitude, phenomenal time management skills. Versatile, flexible associate who is always reliable,looking forward to explore new fields and I can utilize my skills and knowledge to the best of my abilities.</p>
                    </div>
                    <button className="Button" data-bs-toggle="offcanvas" data-bs-target="#sidebar" onClick={toggleOffCanvas}>Personal Info.<FontAwesomeIcon className='RightArrow ms-3' icon={faArrowRightFromBracket} shake size='xl' /></button>
                    {/* Off Canvas */}
                    <div className={`OffCanvasContent offcanvas offcanvas-end bg-dark text-white text-center ${isOffCanvasOpen?'show':''}`} id="sidebar">
                        <div className="OffCanvasHeader offcanvas-header d-flex justify-content-between w-100 w-xl-80 w-lg-70 m-md-50 w-sm-30 mt-3">
                            <button type='button' className='btnX btn btn-close mb-4' data-bs-dismiss='offcanvas' aria-label='Close' onClick={toggleOffCanvas} style={{position:'absolute',top:'30px',left:'25px'}}></button>
                            
                            {/* Profile2 photo - Name */}
                            <div className="mt-5 mb-0">
                                <img src='https://img.freepik.com/premium-vector/young-man-avatar-character-vector-illustration-design_24877-18514.jpg' className='Profile2' alt="" />
                                <h3 className="CanvasProfileName display-6 mt-4 text-white">Srikar Sabbani</h3>
                            </div>

                            {/* Contact */}
                            <div className="Contact text-center">
                                <h3 className="ContactHead lead col-12 col-xxl-12 col-xl-10 col-lg-7 col-md-10 col-sm-12" style={{letterSpacing:'1px',fontSize:'21px'}}>CONTACT</h3>
                                <div className="x mt-3 border-top">
                                    <div className="Email row row-cols-12 row-cols-xxl-12 row-cols-xl-10 row-cols-lg-7 row-cols-md-10 row-cols-sm-12 mt-4">
                                        <div className="col-2">
                                            <FontAwesomeIcon icon={faEnvelope} className='text-white mt-2' bounce size="xl"/>
                                        </div>
                                        <div className="col-10 MailAddress">
                                            <a className='h6 Link text-decoration-none text-primary mt-2' href="mailto:svsaisrikar@gmail.com">svsaisrikar@gmail.com</a>
                                        </div>
                                    </div>
                                    <div className="Phone row row-cols-12 row-cols-xxl-12 row-cols-xl-10 row-cols-lg-7 row-cols-md-10 row-cols-sm-12 mt-2">
                                        <div className="col-2">
                                            <FontAwesomeIcon icon={faPhone} className='text-white mt-2' bounce size="lg"/>
                                        </div>
                                        <div className="col-10 PhoneNumber">
                                            <a className='h6 Link text-decoration-none text-primary mt-2' href="tel:+918688136822">+91 8688136822</a>
                                        </div>
                                    </div>
                                    <div className="LinkedIn row row-cols-12 row-cols-xxl-12 row-cols-xl-10 row-cols-lg-7 row-cols-md-10 row-cols-sm-12 mt-2">
                                        <div className="col-2">
                                            <FontAwesomeIcon icon={faLinkedin} bounce className='text-white mt-2' size='xl'/>
                                        </div>
                                        <div className="col-10 LinkedInAddress">
                                            <a className='h6 Link text-decoration-none text-primary mt-2' href="https://www.linkedin.com/in/srikar-sabbani-3042b1201/" target='_blank' rel='noopener noreferer'>https://shorturl.at/ckqC7</a>
                                        </div>
                                    </div>
                                    <div className="Github row row-cols-12 row-cols-xxl-12 row-cols-xl-10 row-cols-lg-7 row-cols-md-10 row-cols-sm-12 mt-2">
                                        <div className="col-2">
                                            <FontAwesomeIcon icon={faGithub} bounce className='text-white mt-2' size='xl'/>
                                        </div>
                                        <div className="col-10 GithubDiv">
                                            <a className='h6 text-decoration-none text-primary mt-2' href="https://github.com/srikar-19" target='_blank' rel='noopener noreferer'>https://github.com/srikar-19    </a>
                                        </div>
                                    </div>
                                    {/* <div className="border-bottom"></div> */}
                                </div>
                            </div>
                            <div className="StrengthsHobbies row row-cols-1 text-center">
                                <div class="Strengths m-auto d-block list-group mt-5 col-12 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 w-75">
                                    <a href="#" className="StrengthHead Strength list-group-item list-group-item-action active border-secondary bg-secondary" style={{color:'#5dff43',letterSpacing:'1px',fontWeight:'bold'}}>STRENGTHS</a>
                                    <a href="#" className="Strength list-group-item list-group-item-action">Self Motivated</a>
                                    <a href="#" className="Strength list-group-item list-group-item-action">Creative</a>
                                    <a href="#" className="Strength list-group-item list-group-item-action">Adaptable</a>
                                    <a href="#" className="Strength list-group-item list-group-item-action">Problem Solving</a>
                                </div>
                                <div class="Hobbies m-auto d-block list-group mt-5 col-12 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 w-75">
                                    <a href="#" className="Hobbie list-group-item list-group-item-action active border-secondary bg-secondary" style={{color:'#5dff43',letterSpacing:'1px',fontWeight:'bold'}}>HOBBIES</a>
                                    <a href="#" className="Hobbie list-group-item list-group-item-action">Listening to Music</a>
                                    <a href="#" className="Hobbie list-group-item list-group-item-action">Photographing</a>
                                    <a href="#" className="Hobbie list-group-item list-group-item-action">Travelling</a>
                                    <a href="#" className="Hobbie list-group-item list-group-item-action">Playing Football</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br />
            <Element name='education'>
                <Education/>
            </Element>
            <br /><br /><br /><br /><br /><br /><br />
            <Element name='projects'>
                <Projects/>
            </Element>
            <br /><br /><br /><br /><br /><br /><br />
            <Element name='skills'>
                <Skills/>
            </Element>
            <br /><br /><br /><br /><br /><br /><br />
            <Element name='certificates'>
                <Certificates/>
            </Element>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="downloadResume">
                <div className='downloadButton'>
                            <div>
                                <button className='button btn btn-dark p-3 Download'><a className='lead' href="https://drive.google.com/file/d/1QUGPlu-OOF9RKYkEUVQo_xA2xSnMD3Rt/view?usp=drive_link" target='_blank' style={{textDecoration:"None",fontSize:"18px",letterSpacing:'.7px',color:"#5dff43", fontFamily:''}}>Download My Resume <FontAwesomeIcon icon={faFileArrowDown} shake className='text-danger ms-2' size='xl'/></a></button>
                            </div>
                </div>
            </div>
            {/* Footer */}
            <footer className='Footer container-fluid bg-dark text-white text-center text-lg-start text-white' style={{width:"100vw",marginLeft:"-25px",marginRight:"-25px",padding:"0px"}}>
                <section className='Section1 text-center row row-cols-1 p-4 ps-5'>
                    <div className="text-center bg-whit col-12 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-5" style={{letterSpacing:'1px',fontSize:'18px'}}>
                        <span>Get connected with me !</span>
                    </div>
                    <div className='text-center row row-cols-1'>
                        <div className='col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                            <a href="https://www.facebook.com/sabbanisaisrikar" target='_blank' className="me-4 text-decoration-none me-2">
                                <span className='text-secondary'>Facebook</span>
                                <FontAwesomeIcon icon={faFacebook} beat className='ms-2 me-2'/>
                            </a>
                        </div>
                        <div className='col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                            <a href="https://twitter.com/SabbaniSrikar" target='_blank' className="me-4 text-decoration-none col-12 col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 me-2">
                                <span className='text-secondary'>Twitter</span>
                                <FontAwesomeIcon icon={faTwitter} beat className='ms-2 me-2' />
                            </a>
                        </div>
                        <div className='col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                            <a href="mailto:svsaisrikar@gmail.com" className="me-4 text-decoration-none col-12 col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 me-2">
                                <span className='text-secondary'>Google</span>
                                <FontAwesomeIcon icon={faGoogle} beat className='ms-2 me-2' style={{color:"#d11f00"}} />
                            </a>
                        </div>
                        <div className='col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                            <a href="https://www.instagram.com/srikar.sabbani/" target='_blank' className="me-4 text-decoration-none col-12 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 me-2">
                                <span className='text-secondary'>instagram</span>
                                <FontAwesomeIcon icon={faInstagram} beat className='ms-2 me-2' style={{color:"#bc2a8d"}}/>
                            </a>
                        </div>
                        <div className='col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                            <a href="https://www.linkedin.com/in/srikar-sabbani-3042b1201/" target='_blank' className="me-4 text-decoration-none col-12 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 me-2">
                                <span className='text-secondary'>LinkedIn</span>
                                <FontAwesomeIcon icon={faLinkedin} beat className='ms-2 me-2 text-white'/>
                            </a>
                        </div>
                        <div className='col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                            <a href="https://github.com/srikar-19" target='_blank' className="text-decoration-none col-12 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 me-2">
                                <span className='text-secondary'>Github</span>
                                <FontAwesomeIcon icon={faGithub} beat className='ms-2 me-2' style={{color:"#0e45ec"}}/>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="Section2">
                    <div className="fluid-container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="mb-4">
                                    <i className=""></i>S V SAI SRIKAR
                                </h6>
                                <p className=''>
                                    A undergraduate student pursuing B.tech(CSE) in VNR VIGNANA JYOTI INSTITUTE OF ENGINEERING AND TECHNOLOGY (2020-2024).
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p>Kakatiya nagar colony, 16 Portions, Kamareddy (503111)</p>
                                <div>
                                    <i className="fas fa-envelope"></i>
                                    <a href="mailto:svsaisrikar@gmail.com" className='text-decoration-none'>svsaisrikar@gmail.com</a>
                                </div>
                                <div>
                                    <i className="fas fa-envelope"></i>
                                    <a href="tel:+918688136822" className='text-decoration-none'>+91 8688136822</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
            
    )
}

export default Home;