import React from 'react'
import './Quiz.css'

const Loading = () => {
  return (
    <div className='loading'>
        <div className='loading-wave'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <h1>Stay Seated Stay Sharp. Starting Quiz in a moment</h1>
    </div>
  )
}

export default Loading