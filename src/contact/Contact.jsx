import React from "react";
import "./Contact.css";
import Pageheader from "../component/Pageheader/Pageheader";
import callImg from '../assets/Call.svg'
import emailImg from '../assets/Email.svg'
import locationImg from '../assets/Vector-1.svg'

const contact_Data = [
    {
        id: 1,
        title: "Call Us",
        icon: callImg,
        link: "tel:08012345678"
    },
    {
        id: 2,
        title: "Email",
        icon: emailImg,
        link: "contact@email.com"
    },
    {
        id: 3,
        title: "Address",
        icon: locationImg,
        link: "34B Addess Rd, Suite 330, Boston, MA"
    },
]

const Contact = () => {
  return (
    <>
      <Pageheader title="Contact" subtitle="Home" links="/" name="Contact" />
      <div className="contact">
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31517.64601913817!2d7.472392542285315!3d9.0905469722741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a42a5e3f47d%3A0xa5b2f06d94fb9ecb!2sMaitama%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1729602196171!5m2!1sen!2sng"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Responsive Google Map"
          ></iframe>
        </div>
        <div className="contact-details">
            <div className="contact-form">
                <h2>Add Comment</h2>
                <form className="contact-form-field">
                    <div className="contact-form-field-input">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    </div>
                    <textarea placeholder="Message" rows={4}></textarea>
                </form>
            </div>
            <div className="contact-info">
                <h2>Our Contacts</h2>
                <ul className="contact-info-list">
                    {
                        contact_Data.map((data)=>(
                            <li key={data.id}>
                                <div className="contact-icon">
                                     <img src={data.icon} alt={data.title} />
                                </div>
                                <div className="contact-details-list">
                                    <h3>{data.title}</h3>
                                    <p>{data.link}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
