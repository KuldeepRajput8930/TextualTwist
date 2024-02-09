import React from 'react'
import logo from './img/logo.png'
import insta from './img/insta.svg'
import fb from './img/fb.svg'
import replit from './img/replit.svg'
import github from './img/github.svg'
export default function About(props) {


  return (
    <>
      <div className='contact-container'>
        <div className="contact">
          <h2>Feel free to contact me!</h2>
          <img className="logo" src={logo} alt="logo" />
          <div className="icons">
            <a href="/" rel="noopener noreferrer" target="_blank"><img src={fb} alt="" style={props.mode === 'light' ? { filter: "none" } : { filter: "invert()" }} /></a>
            <a href="https://www.instagram.com/_hello_you_07/" rel="noopener noreferrer" target="_blank"><img src={insta} alt="" style={props.mode === 'light' ? { filter: "none" } : { filter: "invert()" }} /></a>
            <a href="https://github.com/KuldeepRajput8930" rel="noopener noreferrer" target="_blank"><img src={github} alt="" style={props.mode === 'light' ? { filter: "none" } : { filter: "invert()" }} /></a>
            <a href="https://replit.com/@KuldeepRajput3" rel="noopener noreferrer" target="_blank"><img src={replit} alt="" style={props.mode === 'light' ? { filter: "none" } : { filter: "invert()" }} /></a>
          </div>
        </div>
      </div>
    </>
  );
}
