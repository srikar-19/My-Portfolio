import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
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
              <img src="https://shorturl.at/zTV56" className='CarouselImg ProjectImg' alt="" text="first slide"/>
            </div>
            <div className='ProjectContent'>
              <h4 className='display-6 text-white'>Slot/Appointment Booking System</h4>
              <p className='lead' style={{color:'#CB8589',fontSize:'xl',fontSize:'22px'}}>Helps to book the appointment depending upon its availability (on that particular day/date/time) upon logging into the account with OTP verification.Also, The admins can accept the booking or reject the booking.</p>
              <p className='mt-4' style={{color:'red',fontSize:'larger',fontWeight:'bold'}}>Technologies : Mern Stack Development.</p>
            </div>
          </Carousel.Item>


          {/* item2 */}
          <Carousel.Item className='CarouselItem'>
            {/* <ExampleCarouselImage text="Second slide" /> */}
            <div className="ProjectImg mb-4">
              <img src="https://shorturl.at/ajkr9" className='CarouselImg ProjectImg' alt="" text="first slide"/>
            </div>
            <div className="ProjectContent">
              <h4 className='display-6 text-white'>Online Employee Recruitment System</h4>
              <p className='lead' style={{color:'#CB8589',fontSize:'xl',fontSize:'22px'}}>An online employee hiring portal which recruits job seekers effortlessly and easily with applicant submitted details including all required data.</p>
              <p className='mt-4' style={{color:'red',fontSize:'larger',fontWeight:'bold'}}>Technologies : Html, Css, Javascript, MySql, NodeJs, MongoDb.</p>
            </div>
          </Carousel.Item>

          {/* item3 */}
          <Carousel.Item className='CarouselItem'>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <div className="ProjectImg mb-4">
              <img src="https://shorturl.at/cqtVX" className='CarouselImg ProjectImg' alt="" text="first slide"/>
            </div>
            <div className="ProjectContent">
              <h4 className='display-6 text-white'>Credit Card Fraud Detection System </h4>
              <p className='lead' style={{color:'#CB8589',fontSize:'xl',fontSize:'22px'}}>A Detective system which detects the Fraud cases of credit card access and transactions made by fraud people.</p>
              <p className='mt-4' style={{color:'red',fontSize:'larger',fontWeight:'bold'}}>Technologies : Data Science, Machine learning.</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
