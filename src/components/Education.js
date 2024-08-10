import React,{useRef} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGraduationCap,faBuilding,faSchool,faCircleChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
function Education(){
    return(
        <div className='BackgroundDiv container text-center mb-5 mt-5'>
            <h3 className='EducationHead mb-3'>EDUCATION</h3>
            <div className='border-top pt-5'></div>
            <div className='timeline mt-3 w-100'>
                <div className='timeline-item mb-5' data-date='2020-2024'>
                    <div className='timeline-icon'>
                        <FontAwesomeIcon icon={faGraduationCap} beat />
                    </div>
                    <div className='timeline-content p-5'>
                        <h3 className='eduHead mb-3'>BTECH</h3>
                        <p className='clg text-white'>Vnr Vignana Jyoti College</p>
                        {/* <p className='text-white'>(2020-2024)</p> */}
                        <p className='clg text-white'>CGPA - 8.70/10</p>
                    </div>
                </div>
                <div className='timeline-item mb-5' data-date='2018-2020'>
                    <div className='timeline-icon'>
                        <FontAwesomeIcon icon={faBuilding} beat />
                    </div>
                    <div className='timeline-content p-5'>
                        <h3 className='eduHead mb-3'>INTERMEDIATE</h3>
                        <p className='clg text-white'>Narayana College</p>
                        {/* <p className='text-white'>(2018-2020)</p> */}
                        <p className='clg text-white'>Percentage - 96%</p>
                    </div>
                </div>
                <div className='timeline-item' data-date='2018'>
                    <div className='timeline-icon'>
                        <FontAwesomeIcon icon={faSchool} beat />
                    </div>
                    <div className='timeline-content p-5'>
                        <h3 className='eduHead mb-3'>SCHOOLING</h3>
                        <p className='clg text-white'>Velociity High School</p>
                        {/* <p className='text-white'>(2018)</p> */}
                        <p className='clg text-white'>GPA - 9.5/10</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education