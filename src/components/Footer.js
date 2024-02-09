import React from 'react'
import logo from './img/logo.png'
import insta from './img/insta.svg'
import fb from './img/fb.svg'
import replit from './img/replit.svg'
import github from './img/github.svg'
export default function Footer(props) {
    return (
        <div>
            <div className={`footer`} style={props.mode === 'light' ? { backgroundColor: "#e7e7ea" } : { backgroundColor: "#1b1e21" }}>
                <div className='d-flex align-items-center my-0 justify-content-center'>
                    <img className="footer-logo" src={logo} alt="logo" />
                    <div className='mx-4'>TextualTwist</div>
                </div>
                <div className='copyright mx-1'>Copyright © 2024 TextualTwist.com</div>
                <div className="footer-icons mx-1">
                    <img src={fb} alt="facebook" style={props.mode === 'light' ? { filter: "none" } : { filter: "invert()" }} />
                    <a href="https://www.instagram.com/_hello_you_07/" rel="noopener noreferrer" target="_blank"><img src={insta} alt="" style={props.mode === 'light' ? { filter: "none" } : { filter: "invert()" }} /></a>
                    <a href="https://github.com/KuldeepRajput8930" rel="noopener noreferrer" target="_blank"><img src={github} alt="" style={props.mode === 'light' ? { filter: "none" } : { filter: "invert()" }} /></a>
                    <a href="https://replit.com/@KuldeepRajput3" rel="noopener noreferrer" target="_blank"><img src={replit} alt="" style={props.mode === 'light' ? { filter: "none" } : { filter: "invert()" }} /></a>
                </div>
            </div>
        </div>
    )
}
