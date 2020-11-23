import React from 'react'
import Button from '../UI/Button'
import './HeroSection.css'
const HeroSection=()=> {
    return (
        <div className="hero-container">  
            <video src="/videos/1.mp4" autoPlay muted loop />
           
            <div className="hero-buttons">
                {/* <Button className="btn" buttonStyle="btn--outline" btnSize="btn--large">
                    شروع کن
                </Button>
                <Button className="btn" buttonStyle="btn--primary" btnSize="btn--large">
                  پیش نمایش<i className="far fa-play-circle" />
                </Button> */}
                <input className="search-input" type="text" placeholder="جستجوی مکان، شهر، کشور و..." autocomplete="off" />
                <Button className="btn" buttonStyle="btn--search" btnSize="btn--large">
                   جستجو
                </Button>
            </div>
        </div>
    )
}
export default HeroSection