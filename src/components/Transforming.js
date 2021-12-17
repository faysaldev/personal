import React from 'react'
import {Link} from 'react-router-dom'

function Transforming() {
    return (
        <section className='transforming'>
            <div className="container">

                <div className="row">
                    <div className="col-md-12 transforming_title">
                        <h1>We love transforming product ideas to digital realities.</h1>
                    </div>
            </div>

                <div className="foodly-part">
                    <div className="foodPart__left">
                        <img className="foodFirst__img" src="/img/foodly-mobile-1-opt.png" />
                        <img className='secondImgage' src="/img/foodly-mobile-2-opt.png" />
                        
                        <div className="circle__img">
                            <img  src="/img/foodly-mobile-image-3.png"/>
                        </div>
                    </div>
                    <div className="foodPart__right">
                        <div className="partRight__image">
                            <img src="/img/foodly-sec-icn.png" />
                        </div>
                        <div className="partRight__info">
                            <span>MOBILE APP</span>
                            <h3>Foodly - the hub of delicious cuisines</h3>
                            <p>Order breakfast, lunch, or dinner, rate your favorite restaurants and track your order - one platform to curb your hunger.</p>

                          
                        <Link to='/viewCase'>VIEW CASE STUDY</Link>
                  
                        </div>
                    </div>
                </div>

                <div className="foodly-part hictic">
                    <div className="foodPart__right hictic__left">
                        <div className="partRight__image">
                            <img src="/img/hictic-logo-icn.png" />
                        </div>
                        <div className="partRight__info">
                            <span>MOBILE APP</span>
                            <h3>Hictic - revolutionizing traditional avertising & digital marketing</h3>
                            <p>Launch new adverts and engage with your customers - an all-in-one platform that promotes your brand and builds engagement.</p>

                          
                                <Link to='/viewCase'>VIEW CASE STUDY</Link>
                  
                        </div>
                    </div>

                    <div className="foodPart__left hictic__right">
                        <img src="/img/hictic-mobile-1-opt.png" alt="" />
                        <img src="/img/hictic-mobile-2-opt.png" alt="" />
                    </div>
                </div>

                <div className="foodly-part curious hictic">
                    <div className="foodPart__left curious__left">
                        <img src="/img/curious-mobile-1-opt.png" alt="" />
                        <img src="/img/curious-mobile-2-opt.png" alt="" />
                    </div>

                    <div className="curious__right">
                        <div className="partRight__image">
                            <img src="/img/curious-logo-icn.png" />
                        </div>
                        <div className="partRight__info">
                            <span>MOBILE APP</span>
                            <h3>Curious - a social platform to connect globally with complete anonymity</h3>
                            <p>Get insights into the latest happenings and connect with people of similar interests in your vicinity with complete anonymity.</p>

                          
                                <Link to='/viewCase'>VIEW CASE STUDY</Link>
                  
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Transforming
