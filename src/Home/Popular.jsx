import React from 'react'
import './Home.css'
import video1 from '../assets/vid11.mp4'
import video2 from '../assets/vid12.mp4'
import video3 from '../assets/vid13.mp4'
import video4 from '../assets/video7.mp4'
import video5 from '../assets/vid15.mp4'
import video6 from '../assets/vid16.mp4'
import { Link } from 'react-router-dom'

const video_Data = [
    {
        id: 1,
        vidUrl: video1,
        title: "What is the national flower of Japan?",
    },
    {
        id: 2,
        vidUrl: video2,
        title: "What is the largest ocean on Earth?",
    },
    {
        id: 3,
        vidUrl: video3,
        title: "Who was the first woman to win a Nobel Prize?",
    },
    {
        id: 4,
        vidUrl: video4,
        title: "How many stripes are on the US flag?",
    },
    {
        id: 5,
        vidUrl: video5,
        title: "What is the national animal of Australia?",
    },
    {
        id: 6,
        vidUrl: video6,
        title: "What was the Turkish city of Istanbul called until 1923?",
    },
];
const video_Data2 =[
    {
        id: 1,
        vidUrl: video4,
        title: "How many stripes are on the US flag?",
    },
    {
        id: 2,
        vidUrl: video5,
        title: "What is the national animal of Australia?",
    },
    {
        id: 3,
        vidUrl: video6,
        title: "What was the Turkish city of Istanbul called until 1923?",
    },
    {
        id: 4,
        vidUrl: video1,
        title: "What is the national flower of Japan?",
    },
    {
        id: 5,
        vidUrl: video2,
        title: "What is the largest ocean on Earth?",
    },
    {
        id: 6,
        vidUrl: video3,
        title: "Who was the first woman to win a Nobel Prize?",
    },
]

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR <span className='popular-h1-span'>QUIZZES</span></h1>
        <div className="popular-video-container">
            <div className="popular-video-display">
                {
                    video_Data.map((data)=>{
                        return <div className="video-wrapper" key={data.id}>
                            <video src={data.vidUrl} autoPlay muted loop className='popular-video1' alt="popular quiz video"></video>
                        </div>
                    })
                }
            </div>
            <div className="popular-video-display">
                {
                    video_Data.map((data)=>{
                        return <div className="video-wrapper" key={data.id}>
                            <video src={data.vidUrl} autoPlay muted loop className='popular-video1' alt="popular quiz video"></video>
                        </div>
                    })
                }
            </div>
        </div>
        <Link className='popular-link-btns'>
        <div className="arrow-link"><i class="ri-arrow-right-line"></i></div>
        <span>Get Started</span>
        </Link>
    </div>
  )
}

export default Popular