import React from 'react'
import './Pageheader.css'
import pageHeader from '../../assets/pageHeader.jpg'
import { Link } from 'react-router-dom'

const Pageheader = ({title, subtitle, links, name}) => {
  return (
    <div className='pageheader'>
        <img src={pageHeader} alt="pageheader image" />
        <div className="pageheader-content-wrapper">
            <h2>{title}</h2>
            <div className="pageheader-link">
                <Link className='pageaheder-link-btns' to='/'>{subtitle}</Link> 
                <span>|</span>
                <span>{name}</span>
            </div>
        </div>
    </div>
  )
}

export default Pageheader