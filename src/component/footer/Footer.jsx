import React from 'react'
import './Footer.css'
import logo from '../../assets/QUIZ -1.svg'
import { Link } from 'react-router-dom'

const socials_Data = [
    {
        id: 1,
        title: "ri-facebook-circle-line"
    },
    {
        id: 2,
        title: "ri-instagram-line"
    },
    {
        id: 3,
        title: "ri-twitter-x-line"
    },
    {
        id: 4,
        title: "ri-tiktok-line"
    },

]

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className='footer'>
        <div className="footer-newsletter">
            <h1>Join Us 
            And Stay Tuned</h1>
            <form className='fotter-newsletter-form'>
                <input type="text" placeholder='Your Email' />
                <button>Subscribe</button>
            </form>
        </div>
        <div className="footer-main">
            <div className="footer-main-top">
                <div className="logo-wrapper">
                    <div className="footerlogo">
                        <img src={logo} alt="logo" />
                    </div>
                    <p>This is a quiz app where you can test your knowledge and also learn. It also offers you the option of choosing your field of concentration and where you are good at. </p>
                </div>
                <ul className='footer-contacts'>
                    <li>
                        <i className="ri-phone-line"></i>
                        <div className="phone-details">
                            <p>Call</p>
                            <span>+23498725435</span>
                        </div>
                        </li>
                        <li>
                        <i className="ri-mail-line"></i>
                        <div className="email-details">
                            <p>Email</p>
                            <span>contact@email.com</span>
                        </div>
                        </li>
                        <li>
                        <i className="ri-map-pin-fill"></i>
                        <div className="location-details">
                            <p>Address</p>
                            <span>23B Aka Lane, Okpoko</span>
                        </div>
                        </li>
                </ul>
                <ul className="quick-link">
                    <li>Quick Links</li>
                    <li><Link className='quicklinks-link'>About Us</Link></li>
                    <li><a href='#'>Recent Events</a></li>
                    <li><a href='#'>Our News</a></li>
                    <li><a href='#'>Schedules</a></li>
                    <li><a href='#'>Classes</a></li>
                </ul>
            </div>
            <div className="footer-mainbottom">
                <hr />
                <div className="footer-main-bottom-flex">
                    <div className="fotter-copyright">
                        <span>@ Copyright {year} Iykes Designs all right Reserved</span>
                    </div>
                    <ul className="footer-socials">
                        {
                            socials_Data.map((data)=>{
                                return <li className="fottersocials-list" key={data.id}>
                                    <i className={data.title}></i>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer