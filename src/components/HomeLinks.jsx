import React from 'react'
import { Link } from "react-router-dom";

let homeItems = [...document.querySelectorAll('.home-item')];

homeItems.forEach(item => {
    let word = item.children[0].innerText.split('')
    item.children[0].children[0].innerHTML = '';
    word.forEach((letter, idx) => {
        item.children[0].innerHTML += `<span style="--index: ${idx};">${letter}</span>`;
    })
    let cloneDiv = item.children[0].cloneNode(true)
    cloneDiv.style.position = 'absolute'
    cloneDiv.style.left = '0'
    cloneDiv.style.top = '0'
    item.appendChild(cloneDiv)
})

export default function HomeLinks() {
    return (
        <div className='home-links'>
            <Link className='home-item' to="/shop">
                <div>
                    <span className='home-item-text'>MENSWEAR</span>
                </div>
            </Link>
            <Link className='home-item' to="/shop">
                <div>
                    <span className='home-item-text'>WOMENSWEAR</span>
                </div>
            </Link>
        </div >
    )
}
