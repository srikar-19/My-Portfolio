import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Portfolio from '../images/Portfolio.png';
import Music1 from '../images/Music1.jpg';
import Slot from '../images/slot.png'
import Credit from '../images/credit.jpg'
import Ehire from '../images/ehire.jpg'

function Projects() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    <div className="BackgroundDiv container text-center mb-5 mt-5">
      <h3 className='ProjectsHead mb-3'>PROJECTS</h3>
      <div className='border-top pt-5'></div>
      <div className='Projects w-100 p-5 mt-3'>
        <Carousel className='Carousel text-center' activeIndex={index} onSelect={handleSelect}>

          {/* item1 */}
          <Carousel.Item className='CarouselItem text-center'>
            {/* <ExampleCarouselImage text="First slide" /> */}
            <div className="ProjectImg mb-4">
              <img src={Ehire} className='CarouselImg ProjectImg' alt="" text="first slide"/>
            </div>
            <div className='ProjectContent'>
              <h4 className='display-6 text-white mb-3'>Integrated e-Recruitment System</h4>
              <p className='ProjectDesc text-white'>An effortless online employee hiring portal which streamlines the recruitment process by collecting and organizing applicant-submitted details, ensuring all the information is readily available for recruiters to make their decisions.</p>
              <p className='Tech mt-4'>Technologies : HTML, CSS, Javascript, SQL, Node.Js, MongoDb</p>
            </div>
          </Carousel.Item>


          {/* item2 */}
          <Carousel.Item className='CarouselItem'>
            {/* <ExampleCarouselImage text="Second slide" /> */}
            <div className="ProjectImg mb-4">
              <img src={Music1} className='CarouselImg ProjectImg' alt="" text="first slide"/>
            </div>
            <div className="ProjectContent">
              <h4 className='display-6 text-white mb-3'>Audio Advisory Platform</h4>
              <p className='ProjectDesc text-white'>A cutting-edge music suggestion application which helps to discover a list of songs seamlessly which are closely aligned to the selected track from the drop-down menu based on the internal music similarities.</p>
              <p className='Tech mt-4'>Technologies : Machine Learning, Front-End Web Development</p>
            </div>
          </Carousel.Item>

          {/* item3 */}
          <Carousel.Item className='CarouselItem'>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <div className="ProjectImg mb-4">
              <img src={Slot} className='CarouselImg ProjectImg' alt="" text="first slide"/>
            </div>
            <div className="ProjectContent">
              <h4 className='display-6 text-white mb-3'>Slot/Appointment Booking System</h4>
              <p className='ProjectDesc text-white'>Helps to book an appointment depending upon its availability (on that particular day/date/time) on logging into account with OTP verification & The admins can accept or reject the booking too.</p>
              <p className='Tech mt-4'>Technologies : HTML, CSS, Bootstrap, React.Js, SQL, Node.Js, MongoDb</p>
            </div>
          </Carousel.Item>

          {/* item4 */}
          <Carousel.Item className='CarouselItem'>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <div className="ProjectImg mb-4">
              <img src={Portfolio} className='CarouselImg ProjectImg' alt="" text="first slide"/>
            </div>
            <div className="ProjectContent">
              <h4 className='display-6 text-white mb-3'>Portfolio</h4>
              <p className='ProjectDesc text-white'>Designed my own captivating modern Portfolio which contains all my bio data and one can download my resume through it (Responsive web app).</p>
              <p className='Tech mt-4'>Technologies : HTML, CSS, Bootstrap, React.Js</p>
            </div>
            
          </Carousel.Item>
          {/* item5 */}
          <Carousel.Item className='CarouselItem'>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <div className="ProjectImg mb-4">
              <img src={Credit} className='CarouselImg ProjectImg' alt="" text="first slide"/>
            </div>
            <div className="ProjectContent">
              <h4 className='display-6 text-white mb-3'>Credit Card Fraud Detection System </h4>
              <p className='ProjectDesc text-white'>A Detective system which detects the Fraud cases of credit card access and transactions made by fraud people.</p>
              <p className='Tech mt-4'>Technologies : Data Science, Machine learning</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
