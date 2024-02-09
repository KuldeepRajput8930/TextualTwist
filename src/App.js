
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Footer from './components/Footer';


function App() {

  //------------------------ States---------------------------------------

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [position, setPosition] = useState("57px");
  const [theme, setTheme] = useState({
    navbarColor: "#04054a",
    buttonColor: "#04054a",
    buttonTextColor: "#fff",
    textColor: "#fff"
  });

  //------------------------ Alert function--------------------------------

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
  }

  const setAlertPosition = () => {
    console.log(position)
    position === "57px" ? setPosition("293.6px") : setPosition("57px")
  }

  //------------------------ setTimeout---------------------------------------

  setTimeout(() => {
    setAlert(null)
  }, 4000);

  //------------------------ Toggle mode ---------------------------------------

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = '#fff';
      showAlert("Dark mode has been  enabled", "Success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = 'black';
      showAlert("Light mode has been  enabled", "Success");
    }
  }

  //------------------------ Themes---------------------------------------

  const setThemeFunction = (navbarColor, buttonColor, buttonTextColor, textColor) => {
    setTheme({
      navbarColor: navbarColor,
      buttonColor: buttonColor,
      textColor: textColor,
      buttonTextColor: buttonTextColor,
    })
  }

  const applyFirstTheme = () => {
    setThemeFunction("#590fd0", "#590fd0", "#fff", "#fff", "black");
    showAlert("Successfull", "Theme applied");
  }
  const applySecondTheme = () => {
    setThemeFunction("#ff0000", "#ff0000", "#fff", "#fff", "black");
    showAlert("Successfull", "Theme applied");
  }
  const applyThirdTheme = () => {
    setThemeFunction("#02254b", "#02254b", "#fff", "#fff", "black");
    showAlert("Successfull", "Theme applied");
  }
  const applyFourthTheme = () => {
    setThemeFunction("#164a41", "#164a41", "#fff", "#fff", "black");
    showAlert("Successfull", "Theme applied");
  }
  const applyDefaultTheme = () => {
    setThemeFunction("#670682", "#670682", "#fff", "#fff", "black");
    showAlert("Successfull", "Theme applied");
  }


  return (
    <>
      <Router>
        <Navbar mode={mode} theme={theme} applyFirstTheme={applyFirstTheme} applySecondTheme={applySecondTheme} applyThirdTheme={applyThirdTheme} applyFourthTheme={applyFourthTheme} applyDefaultTheme={applyDefaultTheme} toggleMode={toggleMode} setAlertPosition={setAlertPosition} />
        <Alert alert={alert} position={position} />
        <Routes>
          <Route exact path="/" element={<Home theme={theme} showAlert={showAlert} mode={mode} />} />
          <Route exact path="/Contact" element={<Contact theme={theme} mode={mode} />} />
          <Route exact path="/About" element={<About/>} />
          <Route exact path="/Services" element={<Services theme={theme} mode={mode} />} />
        </Routes>
        <Footer mode={mode}/>
      </Router>
    </>
  );
}

export default App;
