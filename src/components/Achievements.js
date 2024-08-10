import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
function Achievements() {
  return (
    <div className='BackgroundDiv container AchievementsSection text-center mb-5'>
      <h3 className="AchievementsHead">ACHIEVEMENTS</h3>
      <div className='border-top pt-5'></div>
      <div className="Achievements row row-cols-1 mt-4 p-5">
        <ul className='AchievementsList'>

          {/* ACADEMIC */}
          <h2 className='Head1 mb-4 text-white'>Academic : </h2>
          <li className='ListItem  mb-3'>
            <span className='me-3'><FontAwesomeIcon icon={faPlay} /></span>
            Completed a course on Data Structures and Algorithms and obtained 6 star in problem solving on Hackerrank.
          </li>
          <li className='ListItem  mb-3'>
            <span className='me-3'><FontAwesomeIcon icon={faPlay} /></span>
            Completed a course on Machine Learning by Smart Knower.
          </li>
          <li className='ListItem  mb-3'>
            <span className='me-3'><FontAwesomeIcon icon={faPlay} /></span>
            Attended workshop on Web Technologies.
          </li>
          <li className='ListItem  mb-3'>
            <span className='me-3'><FontAwesomeIcon icon={faPlay} /></span>
            Completed a course on Mern Stack development.
          </li>
          <li className='ListItem  mb-3'>
            <span className='me-3'><FontAwesomeIcon icon={faPlay} /></span>
            Completed an online course on Python Data Structures.
          </li>

          {/* EXTRA CURRICULAR */}
          <h2 className='Head2 mt-5 mb-4 text-white'>Extra Curricular : </h2>
          <li className='ListItem  mb-3'>
            <span className='me-3'><FontAwesomeIcon icon={faPlay} /></span>
            Runner up in Running race competition conducted in school.
          </li>
          <li className='ListItem  mb-3'>
            <span className='me-3'><FontAwesomeIcon icon={faPlay} /></span>
            Got into Football team as a Vice Captain in school.
          </li>
          <li className='ListItem  mb-3'>
            <span className='me-3'><FontAwesomeIcon icon={faPlay} /></span>
            Won 1st prize in Essay writing conducted in school.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Achievements
