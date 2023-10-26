import React from 'react'

function Certificates() {
  return (
    <div className='BackgroundDiv container text-center mt-5'>
      <h3 className="CertificatesHead">CERTIFICATES</h3>
      <div className='border-top pt-5'></div>
      <div className="Certificates row row-cols-1 mt-4">
        <div className='Certificate ibm col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5 mb-4 text-center'>
          <img className='CertificateImg mb-3' src='https://i.ytimg.com/vi/KW4xTXWVk_s/maxresdefault.jpg' alt="" />
          <p className="lead text-center text-white Certify">Certification of completion of <span className='Bold'>Web Development </span>Internship Plan by IBM SkillsBuild.</p>
        </div>
        <div className='Certificate nptel col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5 mb-4 text-center'>
          <img className='CertificateImg mb-3' src='https://mc.webpcache.epapr.in/mcms.php?size=large&in=https://mcmscache.epapr.in/post_images/website_326/post_26407473/full.jpg' alt="" />
          <p className="lead text-center text-white Certify">Certification of completion of <span className='Bold'>Big Data Computing </span> course by NPTEL.</p>
        </div>
        <div className='Certificate sk col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5 mb-4 text-center'>
          <img className='CertificateImg mb-3' src='https://media.licdn.com/dms/image/C560BAQEurnSUo3oWFw/company-logo_200_200/0/1588835805794/smartknower_logo?e=2147483647&v=beta&t=xmYZ7VFm2M4EtH_7k4YO2UFlfQwzC7-kksMErDWVc1o' alt="" />
          <p className="lead text-center text-white Certify">Certification of completion of <span className='Bold'>Machine Learning </span>course by Smart Knower.</p>
        </div>
        <div className='Certificate pyt col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5 mb-4 text-center'>
          <img className='CertificateImg mb-3' src='https://d1m75rqqgidzqn.cloudfront.net/wp-data/2022/03/22181324/Great_Learning_Logo.jpg' alt="" />
          <p className="lead text-center text-white Certify">Certification of completion of <span className='Bold'>Python Course </span>by Great Learning Academy.</p>
        </div>
        <div className='Certificate conv col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5 mb-4 text-center'>
          <img className='CertificateImg mb-3' src='https://cdn.stumagz.com/images/56d3e5f52289fstryimg' alt="" />
          <p className="lead text-center text-white Certify">Certification of Participation in <span className='Bold'>Convergence Hackathon </span>conducted by our college (VNR VJIET).</p>
        </div>
        <div className='Certificate meg col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5 mb-4 text-center'>
          <img className='CertificateImg mb-3' src='https://i0.wp.com/pingiiit.org/wp-content/uploads/2019/10/megathon.jpg?fit=960%2C960&ssl=1' alt="" />
          <p className="lead text-center text-white Certify">Certification of participation in <span className='Bold'>Megathon (Hackathon) </span>conducted by IIIT- Ecel Hyderabad.</p>
        </div>
      </div>
    </div>
  )
}

export default Certificates
