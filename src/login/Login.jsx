import React, { useState } from 'react'
import './Login.css';
import logo from '../assets/QUIZ -1.svg'

const Login = () => {
    const [currState, setCurrentState] = useState('Sign Up');
  return (
    <div className='login'>
        <img src={logo} alt="logo" />
        <form className='login-form'>
            <h2>{currState}</h2>
            {currState === 'Sign Up' && <input type="text" placeholder='Username' />}
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button type='submit'>{ currState === 'Sign Up' ? 'Sign Up' : 'Login'}</button>
            <div className='login-term'>
                <input type="checkbox" />
                <p>Agree to the terms of use & privacy policy</p>
            </div>
            <div className='login-forget'>
                {
                    currState === 'Sign Up' ? <p>Already have an account <span onClick={()=> setCurrentState('Login')}>click here</span></p> :
                    <p>Create an Account <span onClick={()=> setCurrentState('Sign Up')}>click here</span></p>
                }
            </div>
        </form>
    </div>
  )
}

export default Login