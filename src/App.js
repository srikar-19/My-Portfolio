/* global jQuery */
import logo from './logo.svg';
import './App.css';
// import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink,useLocation } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import Home from './components/Home';
import Chat from './components/Chat';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import $ from 'jQuery';

function App() {
  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   const navBar = document.getElementById('.navbar');
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //     navBar.style.marginTop('100px');

  //   }
  // };
  return (
    <Router> {/* Add the Router component here */}
      <div className="BackgroundDiv1 BackgroundDiv">
        <div className="Body">
          <nav className="navbar navbar-expand-lg p-3 navbar-dark bg-dark">
          <div className="container-fluid p- mt-2">
            <Link className="navbar-brand text-white" href='#'>Srikar Sabbani's Portfolio<FontAwesomeIcon className='ms-2' icon={faMeteor} fade /></Link>
            <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id='navbarSupportedContent'>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link text-white active" to="">Home</NavLink>
                  {/* <ScrollLink
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="nav-link text-white" style={{cursor:'pointer'}}>
                    Home
                  </ScrollLink> */}
                </li>
                <li className="nav-item">
                  {/* <NavLink className="nav-link text-white" to="education">Education</NavLink> */}
                  <ScrollLink
                    to="education"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="nav-link text-white" style={{cursor:'pointer'}}>
                    Education
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  {/* <NavLink className="nav-link text-white" to="projects">Projects</NavLink> */}
                  <ScrollLink
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="nav-link text-white" style={{cursor:'pointer'}}>
                    Projects
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  {/* <NavLink className="nav-link text-white" to="skills">Skills</NavLink> */}
                  <ScrollLink
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="nav-link text-white" style={{cursor:'pointer'}}>
                      Skills
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  {/* <NavLink className="nav-link text-white" to="certificates">Certificates</NavLink> */}
                  <ScrollLink
                    to="certificates"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="nav-link text-white" style={{cursor:'pointer'}}>
                    Certificates
                  </ScrollLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link navlink text-white" to="chat">Chat with me</NavLink>
                </li> */}
              </ul>
            </div>
          </div>
          </nav>
        </div>
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/certificates" element={<Certificates />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;