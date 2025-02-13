import React from 'react'
import './Home.css'
import leaderboar1 from '../assets/leaderboard1.jpg'
import leaderboard2 from '../assets/leaderboard2.jpg'

const leaderBoard = [
    {
        id: 1,
        date: "24/10/2025",
        stage: "Genius",
        active: "Best in General Quiz",
        imgURL: "/src/assets/score1.svg",
        name: "Clinton John",
    },
    {
        id: 2,
        date: "01/20/2025",
        stage: "Pro",
        active: "Best in Football Quiz",
        imgURL: "/src/assets/score2.svg",
        name: "Emeka Seedorf",
    },
    {
        id: 4,
        date: "30/05/2025",
        stage: "Genius",
        active: "Best in Music Quiz",
        imgURL: "/src/assets/score4.svg",
        name: "Naimat Mahmood",
    },
    {
        id: 5,
        date: "11/03/2025",
        stage: "Genius",
        active: "Best in Science Quiz",
        imgURL: "/src/assets/score5.svg",
        name: "Ikechukwu Ude",
    },
]

const Score = () => {
  return (
    <div className='score'>
        <h1>LEADERBOARD AND <span className='score-h1-span'>SCORE</span> HIGHLIGHT</h1>
        <div className="score-flex">
            <div className="score-left">
                <div className="score-image1">
                    <img src={leaderboar1} alt="leadboard image" />
                </div>
                <div className="score-image2">
                    <img src={leaderboard2} alt="leadboard2" />
                </div>
                <div className='bubbles score-bubble1'></div>
                <div className='bubbles score-bubble2'></div>
                <div className='bubbles score-bubble3'></div>
                <div className='bubbles score-bubble4'></div>
            </div>
            <div className="score-right">
                    <div className="score-display">
                        {
                            leaderBoard.map((data)=>{
                                return <div className="score-dsiplay-wrapper" key={data.id}>
                                    <div className="score-hr-line"></div>
                                    <div className='score-padding'>
                                    <div className="score-date-genus">
                                    <div className="score-date">
                                    <i className="ri-calendar-line"></i>
                                    <span>{data.date}</span>
                                    </div>
                                    <p>{data.stage}</p>
                                    </div>
                                    <p className='score-active'>{data.active}</p>
                                    <div className="name-rating">
                                    <div className="score-image-name">
                                        <div className="score-image">
                                            <img src={data.imgURL} alt="score-image" />
                                        </div>
                                        <p>{data.name}</p>
                                        </div>
                                        <ul className='score-rating'>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                        </ul>
                                    
                                    </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Score