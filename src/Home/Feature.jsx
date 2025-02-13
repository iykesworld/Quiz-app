import React from 'react'
import './Home.css'
import footballIcon from '../assets/football-icon.svg'
import questionIcon from '../assets/question-icon.svg'
import musicIcon from '../assets/music-icon.svg'
import scienceIcon from '../assets/science-icon.svg'
import featureImage from '../assets/feature-image.svg'
import { Link } from 'react-router-dom'

const feature_Data = [
    {
        id: 1,
        title: "Football Quiz",
        subtitle: "What is the full meaning of VAR?",
        imgURL: footballIcon,
    },
    {
        id: 2,
        title: "General Quiz",
        subtitle: "When was the first world war?",
        imgURL: questionIcon,
    },
    {
        id: 3,
        title: "Music Quiz",
        subtitle: "which country hosted the first Grammy award?",
        imgURL: musicIcon,
    },
    {
        id: 4,
        title: "Science Quiz",
        subtitle: "What is the full meaning of ICU?",
        imgURL: scienceIcon,
    },
]

const Feature = () => {
  return (
    <div className='feature'>
        <div className="featuretop">
            <h1>WELCOME TO <span>QUIZ</span> APP!</h1>
            <p className='feature-subtitle'>Choose from hundreds of quizzes and challenge yourself across various topics</p>
            <div className="featureData-wrapper">
                {
                    feature_Data.map((data)=>{
                        return <Link className="featureData-content" key={data.id}>
                            <div className="feature-image-wrapper">
                                <div className="feature-image">
                                    <img src={data.imgURL} alt="quiz icon" />
                                </div>
                                <h4>{data.title}</h4>
                            </div>
                            <p>{data.subtitle}</p>
                        </Link>
                    })
                }
            </div>
        </div>
        <div className="feature-bottom">
            <img src={featureImage} alt="feature image" />
            <div className="bubbles bubble-feature-three"></div>
            <div className="bubbles bubble-feature-threeB"></div>
            <div className="bubbles bubble-feature-four"></div>
        </div>
    </div>
  )
}

export default Feature