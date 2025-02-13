import React, { useState } from 'react'
import './Quiz.css'
import Pageheader from '../component/Pageheader/Pageheader'
import sportImage from '../assets/quiz-category-1.jpg'
import scienceImage from '../assets/quiz-category-2.jpg'
import musicImage from '../assets/quiz-category-3.jpg'
import generalImage from '../assets/quiz-category.jpg'
import sportsIcon from '../assets/football-icon-1.svg'
import musicIcon from '../assets/Group 7.svg'
import scienceIcon from '../assets/science-icon-1.svg'
import generalIcon from '../assets/popular-icon.svg'
import cursoIcon from '../assets/click-icon.svg'
import { Link, useNavigate } from 'react-router-dom'
import Loading from './Loading'

const categories = [
    {
        id: 1,
        title: "FOOTBALL QUIZ",
        path: "sports",
        icon: sportsIcon,
        image: sportImage
    },
    {
        id: 2,
        title: "SCIENCE QUIZ",
        path: "science",
        icon: scienceIcon,
        image: scienceImage
    },
    {
        id: 3,
        title: "MUSIC QUIZ",
        path: "music",
        icon: musicIcon,
        image: musicImage
    },
    {
        id: 4,
        title: "GENERAL KNOWLEDGE",
        path: "general",
        icon: generalIcon,
        image: generalImage
    }
 
]

const Quiz = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleStartQuiz = (path)=>{
        setLoading(true);
        // Start Quiz Here
        setTimeout(()=>{
            navigate(`/quiz/${path}`)
            setLoading(false); 
        }, 5000)
        
    }
  return (
    <>
    {loading && <Loading/>}
    <Pageheader title="Quiz" subtitle="Home" name="Quiz" />
    <div className="quiz">
        <div className="quiz-categories">
            {
                categories.map(category => (
                    <div key={category.id} className='quiz-categories-wrapper' style={{ backgroundImage: `url(${category.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className='quiz-link'>
                            <h2>{category.title}</h2>
                            <button onClick={()=> handleStartQuiz(category.path)} className="quiz-enter">
                                <p>Enter</p>
                                <img src={cursoIcon} alt="curso icon" />
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Quiz