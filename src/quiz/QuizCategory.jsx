import React, { useEffect, useState } from 'react'
import "./Quiz.css"
import { useParams } from 'react-router-dom'
import quizes from '../data/quiz.json'
import Pageheader from '../component/Pageheader/Pageheader'

const QuizCategory = () => {
    const {categoryName} = useParams();
    const [filteredQuiz, setFilteredQuiz] = useState([]);
    // Fetch the quiz data based on the category name and set it to filteredQuiz state
    useEffect(()=>{
        const filtered = quizes.filter((quiz)=> quiz.category=== categoryName.toLowerCase());
        setFilteredQuiz(filtered);
    }, [categoryName])
  return (
    <>
    <Pageheader title={categoryName} subtitle="Home" name={categoryName}/>
    </>
  )
}

export default QuizCategory