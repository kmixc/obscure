import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import caroOne from '../img/caro-1.png'
import caroTwo from '../img/caro-2.png'
import caroThree from '../img/caro-3.png'
import TypeIt from 'typeit-react'
import Moment from 'react-moment'

export default function HomeCarousel() {
    return (
        <div>
            <Carousel
                showArrows={false}
                showThumbs={false}
                swipeable={true}
                infiniteLoop={true}
                emulateTouch={true}
                showIndicators={false}
                showStatus={false}
            >
                <div className='caro-one'>
                    <TypeIt className="caro-one-text"
                        options={{
                            strings: ['obscure. '],
                            speed: 100,
                            waitUntilVisible: true,
                            loop: true,
                            loopDelay: 4000,
                            deleteSpeed: 80,
                            startDelay: 1000
                        }}
                    />
                    <img src={caroOne} />
                    <Moment className='caro-time' local format='hh:mm:ss' />
                </div>
                <div className='caro-two'>
                    <TypeIt className="caro-two-text"
                        options={{
                            strings: ['fashion. '],
                            speed: 170,
                            waitUntilVisible: true,
                            loop: true,
                            loopDelay: 5000,
                            deleteSpeed: 80,
                            startDelay: 3000
                        }}
                    />
                    <img src={caroTwo} />
                    <Moment className='caro-time' local format='hh:mm:ss' />
                </div>
                <div className='caro-three'>
                    <TypeIt className="caro-three-text"
                        options={{
                            strings: ['reality. '],
                            speed: 140,
                            waitUntilVisible: true,
                            loop: true,
                            loopDelay: 3000,
                            deleteSpeed: 80,
                            startDelay: 2000,
                            lifeLike: true
                        }}
                    />
                    <img src={caroThree} />
                    <Moment className='caro-time' local format='hh:mm:ss' />
                </div>
            </Carousel>
        </div>
    )
}
