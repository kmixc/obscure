import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../img/logo.svg'
import '../App.css';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='right'>
                <Link to="/shop/mens">MENSWEAR</Link>
                <Link to="/shop/womens">WOMENSWEAR</Link>
                <Link to="/shop/sale">SALE</Link>
                <Link to="/shop/accessories">EVERYTHING ELSE</Link>
            </div>
            <div className='left'>
                <Link to='/home'><img alt='company-logo' src={Logo} /></Link>
            </div>
            <div className='right'>
                <Link to="/about">ABOUT</Link>
                <Link to="/login">LOGIN</Link>
                <Link to="/wishlist">WISHLIST</Link>
                <Link to="/shoppingbag">SHOPPING BAG</Link>
            </div>
        </div>
    )
}
