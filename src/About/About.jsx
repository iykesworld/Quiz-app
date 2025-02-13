import React from 'react'
import './About.css'
import Pageheader from '../component/Pageheader/Pageheader'
import abourHeroImage from '../assets/about-hero-image.svg'
import teamAvatar1 from '../assets/team-avatar-1.svg';
import teamAvatar2 from '../assets/team-avatar-2.svg';
import teamAvatar3 from '../assets/team-avatar-3.svg';
import teamAvatar4 from '../assets/team-avatar-4.svg';
import didYouKnowImg from '../assets/did-you-know-image.jpg'
import count1Img from '../assets/Layer 2.svg'
import count2Img from '../assets/quiz.svg'
import count3Img from '../assets/Vector.svg'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const teamMember = [
  {
    id: 1,
    name: "John Doe",
    position: "Quiz Master",
    imgURL: teamAvatar1,
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Maths PRO",
    imgURL: teamAvatar2,
  },
  {
    id: 3,
    name: "Mike Johnson",
    position: "Football Analyst",
    imgURL: teamAvatar3,
  },
  {
    id: 4,
    name: "Sarah Williams",
    position: "UI Wizard",
    imgURL: teamAvatar4,
  },
]

const countUp = [
  {
    id: 1,
    imgUrl: count1Img,
    title: 'Over 500 Quizes',
    subTitle: 500
  },
  {
    id: 2,
    imgUrl: count2Img,
    title: 'Questions answered daily',
    subTitle: 1000
  },
  {
    id: 3,
    imgUrl: count3Img,
    title: 'Topics to Explore',
    subTitle: 1000
  },
]

const About = () => {
  return (
    <>
    <Pageheader
    title = "About"
    subtitle ="Home"
     links="/" 
     name="About"
    />
    <div className="about">
        <div className="about-hero">
            <div className="about-hero-left">
                <h2>ABOUT US</h2>
                <h3>OUR MISSION</h3>
                <p>Bringing curiosity and excitement to 
                every question.</p>
                <p>We believe learning should be fun and accessible to everyone. Our mission is to offer a platform where users can challenge themselves, discover new facts, and enjoy the thrill of knowledge.”</p>
            </div>
            <div className="about-hero-right">
                <img src={abourHeroImage} alt="About hero image" />
            </div>
        </div>
        <div className="about-team">
            <h1>Our Team</h1>
            <div className='about-team-wrapper'>
              {
                teamMember.map(member => (
                  <div className='about-team-member' key={member.id}>
                    <img src={member.imgURL} alt={member.name} />
                    <h4>{member.name}</h4>
                    <p>{member.position}</p>
                  </div>
                ))
              }
            </div>
        </div>
        <div className="about-bottom">
          <div className="about-bottom-question">
            <div className="about-botton-question-img-wrapper">
              <img src={didYouKnowImg} alt="avatar image" />
            </div>
            <div className="about-bottom-question-text">
              <h3>DID YOU <span>KNOW</span></h3>
              <p>Our founders once spent hours arguing over the answer to a random trivia question. They realized there 
                should be a place where everyone can enjoy fun, fair trivia battles. And thus, Quiz App was born!</p>
              <div className="about-bubbles about-bubbles-one"></div>
            <div className="about-bubbles about-bubbles-two"></div>
            <div className="about-bubbles about-bubbles-three"></div>
            </div>
          </div>
          <div className="about-bottom-count">
            {
              countUp.map(count=> (
                <div key={count.id} className="about-bottom-count-container">
                  <img src={count.imgUrl} alt="count image" />
                  <p>{count.title}</p>
                  <h3><span><CountUp end= {count.subTitle}/>K</span><span>+</span></h3>
                </div>
              ))
            }
          </div>
          <div className='about-bottom-button'>
            <h2>Ready to test your knowledge? <span className='about-h2-span'>Jump into your first</span>quiz!</h2>
            <Link className='about-link-btns'>
              <div className="arrow-link"><i class="ri-arrow-right-line"></i></div>
              <span>Get Started</span>
              </Link>
          </div>
        </div>
    </div>
    </>
  )
}

export default About