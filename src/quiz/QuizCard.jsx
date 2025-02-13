import React, { useState } from 'react'
import './Quiz.css'

const QuizCard = ({questions}) => {
    // const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswer = (questionId, selectedOption) => {
        setAnswers({...answers, [questionId]: selectedOption });
    }
    const handleSubmit = ()=>{
        setShowResult(true);
        let userScore = 0;
        Object.keys(answers).forEach(questionId => {
            if(questions[questionId-1].answer === answers[questionId]){
                userScore++;
            }
        });
        setScore(userScore);
    }
  return (
    <div className='quiz-card'>
        <div className="quiz-question-container">
        {
            questions.map((question, index)=>(
                <div key={question.id} className='quiz-card-wrapper'>
                    <h3><span className='quiz-indexNo'>{index+1}</span> {question.question}</h3>
                    <div className="quiz-options">
                        {
                            question.options.map((option, index)=> (
                                <div key={index} className={answers[question.id]===option? 'quiz-option-wrapper quiz-option-answer' : 'quiz-option-wrapper'} onClick={()=> handleAnswer(question.id, option)}>
                                    <p className='quiz-option-index'>Option {index + 1}</p>
                                    <p className='quiz-options-list'>{option}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ))
        }
        <button className='quiz-submit-btn'>Submit Quiz</button>
        </div>
        <div></div>
    </div>
  )
}

export default QuizCard