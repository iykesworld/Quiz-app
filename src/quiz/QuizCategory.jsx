import React, { useEffect, useState } from 'react'
import "./Quiz.css"
import { useParams } from 'react-router-dom'
import quizes from '../data/quiz.json'
import Pageheader from '../component/Pageheader/Pageheader'
import QuizCard from './QuizCard'

const QuizCategory = () => {
    const {categoryName} = useParams();
    const [filteredQuiz, setFilteredQuiz] = useState([]);
    // Fetch the quiz data based on the category name and set it to filteredQuiz state
    useEffect(()=>{
        const filtered = quizes.filter((quiz)=> quiz.category=== categoryName.toLowerCase());
        setFilteredQuiz(filtered);
    }, [categoryName])
  return (
    <div className='quiz-category'>
    <div className="quiz-category-top">
        <h1>{categoryName} Quiz</h1>
        <p className='quiz-category-top-text'>Attention! You have 60 seconds to answer all questions</p>
        <p className='quiz-category-top-text'>Please keep an eye on the timer and make sure to answer all question before time runs out</p>
        <QuizCard questions={filteredQuiz}/>
    </div>
    </div>
  )
}

export default QuizCategory