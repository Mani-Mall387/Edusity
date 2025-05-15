import React from 'react'
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      
      <div className="about-left">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>Embark on a transformative educational journey with our university's comprenhesive education program. Our cutting-edge curriculum is design to empower student with the knowledge, skills and experience needed to excel in the dynamic field of education. </p>
        <p>With a focus on innovation, hands-n learning, and personalized mentorship, our program prepare aspire education to make a meaningful impact in the classrooms, schools, and communities.</p>
        <p>Whether you are aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the prefect pathway to achive your goals and unlock your full potential in shaping the future of education</p>
      </div>

      <div className="about-right">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt=""
        className='play-icon' onClick={()=>{
          {setPlayState(true)}
        }}/>
      </div>
    </div>
  )
}

export default About
