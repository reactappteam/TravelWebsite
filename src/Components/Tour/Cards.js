import React from 'react'
import Button  from '../UI/Button'
import './Cards.css'

function CardsGuide() {
    return (
        <>
        <h1>تور</h1>
        <div className="container">        
             <div className="tour__tabs">
                 <div className="tour__wrapper">
                    <ul className="nav-tabs">
                        <li>
                        <a data-toggle="tab" href="#tabTour_26">
                            <h5>تمامی تورها</h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_26">
                            <h5>تور های خارجی</h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_27">
                        <h5>
                        تورهای داخلی
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_0">
                        <h5>
                        تور یک روزه
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_1">
                        <h5>
                        تور چند روزه
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_2">
                        <h5>
                        تور طبیعت گردی
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_3">
                        <h5>
                        تور ماجراجویانه
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_4">
                        <h5>
                        تور لوکس
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_5">
                        <h5>
                        تور آفردار
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_6">
                        <h5>
                        تور لحظه آخری
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_7">
                        <h5>
                        تور آموزشی
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_8">
                        <h5>
                        تور نمایشگاهی
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_9">
                        <h5>
                        تور سافاری
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_10">
                        <h5>
                        تور داخلی
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_11">
                        <h5>
                        تور خارجی
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_12">
                        <h5>
                        تور کودکان
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_13">
                        <h5>
                        تور تاریخی و فرهنگی
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_14">
                        <h5>
                        تور کوه نوردی
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_15">
                        <h5>
                        تور نوروز
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_16">
                        <h5>
                        تور عید
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_17">
                        <h5>
                        تور تعطیلات
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_18">
                        <h5>
                        تور ویژه
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_19">
                        <h5>
                        تور ایرانگردی
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_20">
                        <h5>
                        تور جهانگردی
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_21">
                        <h5>
                        تور زیارتی
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_22">
                        <h5>
                        تور مسافرتی
                        </h5>
                        </a>
                        </li>
                        <li>
                        <a data-toggle="tab" href="#tabTour_23">
                        <h5>
                        تور کویر گردی
                        </h5>
                        </a>
                        </li>
                    </ul>
                 </div>
                
            </div>
        </div>
        
        <div className="tour__tabs">

        <div className="tab-content">
                <div className="tab-pane">
                    <header className="tab-header">
                        <div className="tab-text">
                            تور
                        </div>
                        <div className="tab-sort-filter tab-text">
                            مرتب شده بر اساس
                            <span className="selectTours">
                                <select className="tab-sort-input" >
                                    <option value="newest">جدیدترین</option>
                                    <option value="cheapest" >ارزان ترین</option>
                                    <option value="viewCount" >پربازدید ترین</option>
                                </select>
                            </span>
                        </div>
                    </header>
                    <div className="tabs-content">
                        <ul>
                            <li>
                                <a href="#">
                                    <span> تور کیش 2 روز و 3 شب</span>
                                    <p>از 1.600.000</p>
                                    <p> 3 روز و 2 شب</p>
                                    <p>از 2 آذر 1399 الی 4 آذر 1399</p>
                                    <p>شرکت خدمات سفر تعطیلات    </p>
                                </a>
                               
                            </li>
                            <li>
                                <a href="#">
                                    <span> تور کیش 2 روز و 3 شب</span>
                                    <p>از 1.600.000</p>
                                    <p> 3 روز و 2 شب</p>
                                    <p>از 2 آذر 1399 الی 4 آذر 1399</p>
                                    <p>شرکت خدمات سفر تعطیلات    </p>
                                </a>
                               
                            </li>
                        </ul>
                        <div className="more-tour-button">
                             <Button buttonStyle="btn--tour" buttonSize="btn--large">تور های بیشتر</Button>
                        </div>
                       
                    </div>
                </div>
            </div>
       
        </div>
            
        </> 
            
      
    )
}

export default CardsGuide
