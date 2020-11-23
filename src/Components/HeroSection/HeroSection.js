import React from 'react'
import Button from '../UI/Button'
import './HeroSection.css'
const HeroSection=()=> {
    return (
        <div className="hero-container">  
            <video src="/videos/1.mp4" autoPlay muted loop />
            <h1>ماجراجویی در انتظار تو است</h1>
            <p> منتظر چه چیزی هستی</p>
            <div className="hero-buttons">
                <Button className="btn" buttonStyle="btn--outline" btnSize="btn--large">
                    شروع کن
                </Button>
                <Button className="btn" buttonStyle="btn--primary" btnSize="btn--large">
                  پیش نمایش<i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    )
}
export default HeroSection