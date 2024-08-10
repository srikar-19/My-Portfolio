import React,{useEffect} from 'react'
function Skills(){
    return(
        <div className='BackgroundDiv container text-center mb-5 mt-5'>
            <h3 className="SkillsHead mb-3">SKILLS</h3>
            <div className='border-top pt-5'></div>
            <div className="Skills row row-cols-1 p-3 mt-4">
                {/* section1 */}
                <h3 className="Programming text-white display-6 mt-5">Programming :</h3>
                <div className="Programming text-center row row-cols-1 p-3">
                    
                    {/* skill1 */}
                    <div className="Skill1Content Skillcontent h5 col-12 col-lg-4 col-md-6 col-sm-6 p-4 mt-1 text-white" id='Skill1'>Python
                        <div class="progress mt-2">
                            <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    {/* skill2 */}
                    <div className="Skill2Content Skillcontent h5 col-12 col-lg-4 col-md-6 col-sm-6 p-4 p-4 mt-1 text-white" id='Skill2'>C++
                        <div class="progress mt-2">
                            <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    {/* skill3 */}
                    <div className="Skill3Content Skillcontent h5 col-12 col-lg-4 col-md-6 col-sm-6 p-4 p-4 mt-1 text-white" id='Skill3'>C
                        <div class="progress mt-2">
                            <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    {/* skill4 */}
                    <div className="Skill4Content Skillcontent h5 col-12 col-lg-4 col-md-6 col-sm-6 p-4 p-4 mt-1 text-white" id='Skill4'>Java
                        <div class="progress mt-2">
                            <div className="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>

                {/* section2 */}
                <h3 className="Web text-white mt-5 display-6">Web Development :</h3>
                <div className="WebDevelopment row row-cols-1 p-3">
                    {/* skill4 */}
                    <div className="Skill4Content Skillcontent h5 col-12 col-lg-4 col-md-6 col-sm-6 p-4 p-4 mt-1 text-white" id='Skill4'>HTML
                        <div class="progress mt-2">
                            <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    {/* skill5 */}
                    <div className="Skill5Content Skillcontent h5 col-12 col-lg-4 col-md-6 col-sm-6 p-4 p-4 mt-1 text-white" id='Skill5'>CSS
                        <div class="progress mt-2">
                            <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    {/* skill6 */}
                    <div className="Skill6Content Skillcontent h5 col-12 col-lg-4 col-md-6 col-sm-6 p-4 p-4 mt-1 text-white" id='Skill6'>Bootstrap
                        <div class="progress mt-2">
                            <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    {/* skill7 */}
                    <div className="Skill7Content Skillcontent h5 col-12 col-lg-4 col-md-6 col-sm-6 p-4 p-4 mt-1 text-white" id='Skill7'>React
                        <div class="progress mt-2">
                            <div className="progress-bar" role="progressbar" style={{width: '72%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    {/* skill8 */}
                    <div className="Skill8Content Skillcontent h5 col-12 col-lg-4 col-md-6 col-sm-6 p-4 p-4 mt-1 text-white" id='Skill8'>Javascript
                        <div class="progress mt-2">
                            <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    {/* skill9 */}
                    <div className="Skill9Content Skillcontent h5 col-12 col-lg-4 col-md-6 col-sm-6 p-4 p-4 mt-1 text-white" id='Skill9'>Node.js / Express.js
                        <div class="progress mt-2">
                            <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>

                {/* section3 */}
                <h3 className="Os text-white mt-5 display-6">Database :</h3>
                <div className="Os row row-cols-1 p-3">
                    {/* skill10 */}
                    <div className="Skill10Content Skillcontent h5 col-12 col-lg-4 col-md-6 col-sm-6 p-4 mt-1 text-white m-auto d-block" id='Skill10'>SQL
                        <div class="progress mt-2">
                            <div className="progress-bar" role="progressbar" style={{width: '67%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    {/* skill11 */}
                    <div className="Skill11Content Skillcontent h5 col-12 col-lg-4 col-md-6 col-sm-6 p-4 mt-1 text-white m-auto d-block" id='Skill11'>MongoDB
                        <div class="progress mt-2">
                            <div className="progress-bar" role="progressbar" style={{width: '61%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
        
                {/* section4 */}
                <h3 className="Os text-white mt-5 display-6">OS :</h3>
                <div className="Os row row-cols-1 p-3">
                    {/* skill9 */}
                    <div className="Skill9Content Skillcontent h5 col-12 p-4 mt-1 text-white" id='Skill9'>Linux
                        <div class="progress mt-2">
                            <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>

                {/* section5 */}
                <h3 className="Os text-white mt-5 display-6">Other :</h3>
                <div className="Os row row-cols-1 p-3">
                    {/* skill9 */}
                    <div className="Skill9Content Skillcontent h5 col-12 p-4 mt-1 text-white" id='Skill9'>Machine Learning
                        <div class="progress mt-2">
                            <div className="progress-bar" role="progressbar" style={{width: '62%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills