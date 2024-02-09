import React from 'react'
import { Link } from 'react-router-dom'



export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: props.theme.navbarColor, color: props.theme.textColor }}>
      <div className="container-fluid">

        <Link className="navbar-brand" style={{ color: props.theme.textColor }} to="/">TextualTwist</Link>
        <button className="navbar-toggler" onClick={props.setAlertPosition} type="button" style={{ color: props.theme.buttonTextColor }} data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" style={{ color: props.theme.textColor }} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: props.theme.textColor }} to="/Services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: props.theme.textColor }} to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-4" style={{ color: props.theme.textColor }} to="/Contact">Contact Us</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center me-4">
            <div className="btn-group">
              <button type="button" className="btn border" style={{ backgroundColor: props.theme.buttonColor, color: props.theme.buttonTextColor }}>Themes</button>
              <button type="button" className="btn dropdown-toggle dropdown-toggle-split border" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false" style={{ backgroundColor: props.theme.buttonColor, color: props.theme.buttonTextColor }}>
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu" style={{ backgroundColor: document.body.style.backgroundColor, color: document.body.style.color }}>
                <li className="theme" onClick={props.applyFirstTheme}>
                  <div className="themeShape themeColor1"></div>
                  <div className="dropdown-item bg-transparent" style={{ color: document.body.style.color }}>Intedimensional Blue</div>
                </li>
                <li className="theme" onClick={props.applySecondTheme}>
                  <div className="themeShape themeColor2"></div>
                  <div className="dropdown-item bg-transparent" style={{ color: document.body.style.color }}>Luminous Bright Red</div>
                </li>
                <li className="theme" onClick={props.applyThirdTheme}>
                  <div className="themeShape themeColor3"></div>
                  <div className="dropdown-item bg-transparent" style={{ color: document.body.style.color }}>Oxford Blue </div>
                </li>
                <li className="theme" onClick={props.applyFourthTheme}>
                  <div className="themeShape themeColor4"></div>
                  <div className="dropdown-item bg-transparent" style={{ color: document.body.style.color }}>Brunswick Green </div>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li className="theme" onClick={props.applyDefaultTheme}>
                  <div className="themeShape defaultColor"></div>
                  <div className="dropdown-item bg-transparent" style={{ color: document.body.style.color }}>Default</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="form-check form-switch align-items-center d-flex my-2">
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label mx-2" style={{ color: props.theme.textColor }} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
        </div>
      </div>
    </nav >
  )
}
