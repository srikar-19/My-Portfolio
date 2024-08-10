import React from 'react'

import ibm from '../images/ibm.png'
import nptel from '../images/nptel.jpeg';
import sk from '../images/sk.jpg';
import pyt from '../images/pyt.png';
import conv from '../images/conv.png';
import meg from '../images/meg.png';
function Certificates() {
  return (
    <div className='BackgroundDiv container text-center mt-5 mb-5'>
      <h3 className="CertificatesHead">CERTIFICATES</h3>
      <div className='border-top pt-5'></div>
      <div className="Certificates row row-cols-1 mt-4">
        <div className='Certificate ibm col-12 col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 p-5 mb-4 text-center'>
          <img className='CertificateImg mb-3' src={ibm} alt="" />
          <p className="lead text-center text-white Certify">Certification of completion of <span className='Bold'>Web Development </span>Internship Plan by IBM SkillsBuild.</p>
        </div>
        <div className='Certificate nptel col-12 col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 p-5 mb-4 text-center'>
          <img className='CertificateImg mb-3' src={nptel} alt="" />
          <p className="lead text-center text-white Certify">Certification of completion of <span className='Bold'>Big Data Computing </span> course by NPTEL.</p>
        </div>
        <div className='Certificate sk col-12 col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 p-5 mb-4 text-center'>
          <img className='CertificateImg mb-3' src={sk} alt="" />
          <p className="lead text-center text-white Certify">Certification of completion of <span className='Bold'>Machine Learning </span>course by Smart Knower.</p>
        </div>
        <div className='Certificate pyt col-12 col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 p-5 mb-4 text-center'>
          <img className='CertificateImg mb-3' src={pyt} alt="" />
          <p className="lead text-center text-white Certify">Certification of completion of <span className='Bold'>Python Course </span>by Great Learning Academy.</p>
        </div>
        <div className='Certificate conv col-12 col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 p-5 mb-4 text-center'>
          <img className='CertificateImg mb-3' src={conv} alt="" />
          <p className="lead text-center text-white Certify">Certification of Participation in <span className='Bold'>Convergence Hackathon </span>conducted by our college (VNR VJIET).</p>
        </div>
        <div className='Certificate meg col-12 col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 p-5 mb-4 text-center'>
          <img className='CertificateImg mb-3' src={meg} alt="" />
          <p className="lead text-center text-white Certify">Certification of participation in <span className='Bold'>Megathon (Hackathon) </span>conducted by IIIT- Ecel Hyderabad.</p>
        </div>
      </div>
    </div>
  )
}

export default Certificates
