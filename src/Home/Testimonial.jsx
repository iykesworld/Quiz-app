import React from 'react'
import './Home.css'

const testimonial_Data = [
    {
        id: 1,
        imgURL: "/src/assets/testimonial1.jpg",
        socials: ["ri-facebook-line", "ri-instagram-line", "ri-twitter-x-line", "ri-tiktok-line"],
        name: "Cole Levi",
        subtitle: "This is the best quiz web app. It is very educating and also interactive. I had fun while learning and testing myself"
    },
    {
        id: 2,
        imgURL: "/src/assets/testimonial2.jpg",
        socials: ["ri-facebook-line", "ri-instagram-line", "ri-twitter-x-line", "ri-tiktok-line"],
        name: "Ngozi Christiana",
        subtitle: "This is the best quiz web app. It is very educating and also interactive. I had fun while learning and testing myself"
    },
    {
        id: 3,
        imgURL: "/src/assets/testimonial3.jpg",
        socials: ["ri-facebook-line", "ri-instagram-line", "ri-twitter-x-line", "ri-tiktok-line"],
        name: "Pius Nweke",
        subtitle: "This is the best quiz web app. It is very educating and also interactive. I had fun while learning and testing myself"
    },
    {
        id: 4,
        imgURL: "/src/assets/testimonial4.jpg",
        socials: ["ri-facebook-line", "ri-instagram-line", "ri-twitter-x-line", "ri-tiktok-line"],
        name: "Tolu Oladipo",
        subtitle: "This is the best quiz web app. It is very educating and also interactive. I had fun while learning and testing myself"
    },
]

const Testimonial = () => {
  return (
    <div className='testimonial'>
        <h1>TESTIMONIAL</h1>
        <div className="testimonials-wrapper">
            {
                testimonial_Data.map((data)=>{
                    return <div className="testimonial-container">
                        <div className="testimonial-image-container">
                            <img src={data.imgURL} alt="testimonail image" />
                            <ul className='testimonial-socials'>
                                <li><i className="ri-facebook-circle-line"></i></li>
                                <li><i className="ri-instagram-line"></i></li>
                                <li><i className="ri-twitter-x-line"></i></li>
                                <li><i className="ri-tiktok-line"></i></li>
                            </ul>
                        </div>
                        <h4>{data.name}</h4>
                        <p>{data.subtitle}</p>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Testimonial