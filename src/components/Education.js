import React,{useRef} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGraduationCap,faBuilding,faSchool} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
function Education(){
    return(
        <div className='BackgroundDiv container text-center mt-5'>
            <h3 className='EducationHead mb-3'>EDUCATION</h3>
            <div className='border-top'></div>
            <div className='Education row row-cols-1 row-cols-lg-4 p-5'>
                <div className="Educations col-12 col-lg-3 col-md-12 col-sm-12 ms-3 p-3 mt-4">
                    <h3 className='display-6 text-white'><FontAwesomeIcon icon={faGraduationCap} beat className='me-3 text-white'/>Btech</h3>
                    <p className="lead text-white">VNR VIGNANA JYOTI COLLEGE <br />(2020-2024) <br />CGPA - 8.55/10 <br /></p>
                </div>
                <div className="Educations col-12 col-lg-3 col-md-12 col-sm-12 ms-3 p-3 mt-4">
                    <h3 className='display-6 text-white'><FontAwesomeIcon icon={faBuilding} beat className='me-3'/>Intermediate</h3>
                    <p className="lead text-white">NARAYANA COLLEGE <br /> (2018-2020) <br />Percentage - 96% <br /></p>
                </div>
                <div className="Educations col-12 col-lg-3 col-md-12 col-sm-12 ms-3 p-3 mt-4">
                    <h3 className='display-6 text-white me-3'><FontAwesomeIcon icon={faSchool} beat className='me-3'/>Schooling</h3>
                    <p className="lead text-white">VELOCITY SCHOOL <br />(2018) <br />GPA - 9.5/10<br /></p>
                </div>
            </div>
        </div>
    )
}

export default Education