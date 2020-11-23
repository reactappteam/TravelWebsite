import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>مقاصد برتر</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="images/9.jpg"
                            text="دیدن آبشار ناشناخته در دل جنگل های آمازون"
                            label="ناشناخته ها"
                            psth="/dervices"
                        />
                        <CardItem 
                            src="images/8.jpg"
                            text="کویری زیبا در قلب ایران"
                            label="ناشناخته ها"
                            psth="/dervices"
                        />
                        </ul>
                        <ul className="cards__items">
                        <CardItem 
                            src="images/2.jpg"
                            text="سفری خاطره انگیز در جزایر کارائیب"
                            label="لاکچری"
                            psth="/dervices"
                        />
                        <CardItem 
                            src="images/1.jpg"
                            text="آرامشی عمیق در رشته کوه های آلپ"
                            label="لاکچری"
                            psth="/dervices"
                        />
                        <CardItem 
                            src="images/6.jpg"
                            text="تجربه ای متفاوت از گردش در یک شهر"
                            label="ناشناخته"
                            psth="/dervices"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
