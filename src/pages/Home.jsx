import React from 'react'
import HomeCarousel from '../components/HomeCarousel';
import HomeContent from '../components/HomeContent';
import HomeLinks from '../components/HomeLinks';
import { Link } from "react-router-dom";

//images
import imageOne from '../img/home-content-1.png'
import imageTwo from '../img/home-content-2.png'
import imageThree from '../img/home-content-3.png'
import imageFour from '../img/home-content-4.png'
import imageFive from '../img/home-content-5.png'


export default function Home() {
    return (
        <div>
            <HomeCarousel />
            <HomeLinks />

            <div className='content-one'>
                <HomeContent
                    img={imageOne}
                    feat="featured"
                    brand="NIKE ORIGINALS"
                    linkName="SHOP NIKE"
                    route="/shop"
                />
                <HomeContent
                    img={imageTwo}
                    feat="featured"
                    brand="UNDEFEATED FOOTWEAR"
                    linkName="SHOP UNDEFEATED"
                    route="/shop"
                />
            </div>
            <div className='content-two'>
                <HomeContent
                    img={imageFour}
                    feat="news:"
                    display='none'
                    brand="NEW DROP SOON"
                    route="/home"
                    gray="grayscale(0%)"
                />
                <HomeContent
                    img={imageFive}
                    feat="news:"
                    display='none'
                    brand="PRADA ADDED"
                    route="/home"
                    gray="grayscale(0%)"
                />
                <HomeContent
                    img={imageThree}
                    feat="news:"
                    brand="NIKE ORIGINALS (BTS)"
                    display='none'
                    route="/home"
                    gray="grayscale(0%)"
                />
            </div>


        </div >
    )
}
