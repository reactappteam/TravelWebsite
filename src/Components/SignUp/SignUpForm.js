import React from 'react'
import Button from '../UI/Button'
import './SignUpForm.css'
function SignUpForm() {
    return (
        <div className="signup-container">
           <div className="signup-form">
                <input className="text-input" type="text" placeholder="نام و نام خانوادگی" autocomplete="off" />
                <input className="text-input" type="text" placeholder="شماره همراه" autocomplete="off" />
                <input className="text-input" type="email" placeholder="ایمیل" autocomplete="off" />
                <div className="more-tour-button">
                   <Button buttonStyle="btn--tour" buttonSize="btn--large"> ثبت نام</Button>
                </div>
            </div> 
        </div>
    )
}

export default SignUpForm
