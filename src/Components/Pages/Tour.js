import React from 'react'
import Button from '../UI/Button'
import CardsGuide from '../Tour/Cards'
import Cards from '../Cards/Cards'
import '../../App.css'

const Tour =()=>{
    return(
        <>
        <div className="tourism" style={{backgroundImage:`url(images/tourism.jpg)`}}>
           
            <div className="tourism-box">
                <input className="search-input" type="text" placeholder="نام شهر یا کشور" autocomplete="off" />
                <Button className="btn" buttonStyle="btn--search--place" btnSize="btn--large">
                   جستجوی تور
                </Button>
            </div>
        </div>
        <CardsGuide />
        <Cards />
        </>
       
    )
}
export default Tour