import React from 'react'
import {Link} from 'react-router-dom'
import './Cards.css'
function CardItem(props) {
    const {src, title,    text} = props
    return (
        <>
            <li className="cards__item">
               <div className="compare-item">
                   <div className="compare-image-list">
                        <img src={src} />
                        <div class="compere-item-title">{title}</div>
                        <div class="compere-item-exp">{text}</div>
                   </div>
               </div>
            </li>
        </>
    )
}

export default CardItem
