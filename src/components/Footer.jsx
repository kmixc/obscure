import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from "react-router-dom";
import Logo from '../img/logo.svg'
import TextLogo from '../img/logo-text-clean.svg'

export default function Footer() {

    let country = 'CANADA'

    return (
        <div className='footer'>
            <div className='footer-info'>
                <div className='left'>
                    <p>&copy; 2021 obscure.com</p>
                    <Link to="/home">Terms & Conditions</Link>
                    <Link to="/home">Privacy Policy</Link>
                    <Link to="/home">Cookies</Link>
                    <Link to="/home">Accessibility</Link>
                </div>
                <img src={TextLogo} alt='obscure-logo' className='footer-logo' />
                <div className='right'>
                    <Link to="/home">Country: {country}</Link>
                    <Link to="/home">Customer Service</Link>
                    <Link to="/home">Locations</Link>
                    <Link to="/home">Affiliates</Link>
                    <Link to="/home"><img className='footer-img' src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="INSTAGRAM" /></Link>
                    <Link to="/home"><img className='footer-img' src="https://seeklogo.com/images/T/twitter-logo-1DEF94C339-seeklogo.com.png" alt="TWITTER" /></Link>
                    <Link to="/home"><img className='footer-img' src="https://rachelliv.com/wp-content/uploads/2020/08/black-youtube-logo-logodix-black-youtube-logo-500_500.png" alt="YOUTUBE" /></Link>
                </div>
            </div>
            <Marquee
                className='marquee-footer'
                gradient={false}
                speed={20}
            >
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
                obscure
            </Marquee>
        </div>
    )
}
