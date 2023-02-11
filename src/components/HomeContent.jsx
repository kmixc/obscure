import React from 'react'
import { Link } from "react-router-dom";


export default function HomeContent(props) {
    return (
        <div className='box-content'>
            <div style={{ filter: `${props.gray}` }} className='box-image'>
                <img src={props.img} alt="fashion" />
            </div>
            <div className='box-text'>
                <div className='box-info'>
                    <span>{props.feat}</span>
                    <h3>{props.brand}</h3>
                </div>
                <Link style={{ display: `${props.display}` }} to={props.route}>{props.linkName}</Link>
            </div>
        </div>
    )
}
