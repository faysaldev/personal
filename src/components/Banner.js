import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// interval={3000} 
//  autoPlay  infiniteLoop 

function Banner() {
    return (
        <div className="banner">
<Carousel showStatus={false} showIndicators={false} showThumbs={false} >
                <div className='singleItem'>
                    <img src="/img/banner1.jpg" />
                    <div className="info col-md-4">
                        <h1>Revolutionzing <span>enterprises digitally</span></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ipsum perspiciatis vero ut aspernatur iste vel quaerat eveniet aliquid natus. Libero recusandae facere nihil numquam quia sapiente magnam fugiat. Facilis.</p>

                    <button>Let's Talk</button>
                    </div>
                    <div className="bg__overlay" />
                </div>
                <div className='singleItem'>
                    <img src="/img/banner2.jpg" />
                    <div className="info col-md-4">
                        <h1>Blockchain <span>development</span></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ipsum perspiciatis vero ut aspernatur iste vel quaerat eveniet aliquid natus. Libero recusandae facere nihil numquam quia sapiente magnam fugiat. Facilis.</p>

                    <button>Let's Talk</button>
                    </div>
                    <div className="bg__overlay" />
                </div>
                <div className='singleItem'>
                    <img src="/img/banner3.jpg" />
                    <div className="info col-md-4">
                        <h1>Al and machine <span>learning</span></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ipsum perspiciatis vero ut aspernatur iste vel quaerat eveniet aliquid natus. Libero recusandae facere nihil numquam quia sapiente magnam fugiat. Facilis.</p>

                    <button>Let's Talk</button>
                    </div>
                    <div className="bg__overlay" />
                </div>
                <div className='singleItem'>
                    <img src="/img/banner4.jpg" />
                    <div className="info col-md-4">
                        <h1>Modernizing mobile <span>Platforms</span></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ipsum perspiciatis vero ut aspernatur iste vel quaerat eveniet aliquid natus. Libero recusandae facere nihil numquam quia sapiente magnam fugiat. Facilis.</p>

                    <button>Let's Talk</button>
                    </div>
                    <div className="bg__overlay" />
                </div>
                <div className='singleItem'>
                    <img src="/img/banner5.jpg" />
                   <div className="info col-md-4">
                        <h1>Augmented & virtual <span>reality</span></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ipsum perspiciatis vero ut aspernatur iste vel quaerat eveniet aliquid natus. Libero recusandae facere nihil numquam quia sapiente magnam fugiat. Facilis.</p>

                    <button>Let's Talk</button>
                    </div>
                    <div className="bg__overlay" />
                </div>
            </Carousel>

            <div className="banner__bottom">
                <div className="bannerBottom__left">
                    <h4>Trusted by</h4>
                    <ul>
                        <li><img src="/img/politico-small.png" /></li>
                        <li><img src="/img/wall-mart-small.png" /></li>
                        <li><img src="/img/tissot-small.png" /></li>
                        <li><img src="/img/sapient-small.png" /></li>
                    </ul>
                </div>

                <div className="bannerBottom__right">
                    <h4>Awards</h4>
                    <ul>
                        <li><img src="/img/badge-top-app-company-united-states.png" /></li>
                        <li><img src="/img/top-mobile-app-developers.png" /></li>
                        <li><img src="/img/mobile-appnew-2019.png" /></li>
                        <li><img src="/img/app_development_compay1.png" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Banner
