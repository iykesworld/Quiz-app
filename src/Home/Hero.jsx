import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero-page-right.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h1>Test Your Skills in <span>Minutes</span>!</h1>
            <p>Challenge Your Knowledge! Discover, Learn, and 
            Compete with Fun Quizzes Across Topics.</p>
            <div className="button-flex">
                <Link className='hero-start-quiz'>Start Quiz</Link>
                <Link className='hero-learn'><i className="ri-arrow-right-wide-line"></i><span>Learn More</span></Link>
            </div>
        </div>
        <div className="hero-right">
            <img src={heroImage} alt="" />
            <div className="bubbles bubble-one"></div>
            <div className="bubbles bubble-two"></div>
            <div className="bubbles bubble-three"></div>
        </div>
    </div>
  )
}

export default Hero