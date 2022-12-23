import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Weather from "./pages/Weather"
import { useState } from 'react';
import Bars from "./comps/bars.js"
import Logo from "./pictures/logo.png"

function App() {
console.log("APPPPPP")
 const [isActive, setActive] = useState(false)

 const toggleClass = () =>{
  setActive(!isActive);
 }
  return (
    <div id='main-body'>  
    <header> 
      <div style={{backgroundImage:`url(${Logo})`}}></div>
    <div id='bar' onClick={toggleClass}><Bars stt0 = {isActive}/></div>
    </header> 
    <div id='leftBar' className={isActive ? "active" : null }>
  <nav id='barsNav'>
    <li>
      <Link onClick={toggleClass}  to="/">Home</Link>
      </li>
      <li>
      <Link onClick={toggleClass} to="/weather">Weather</Link>
      </li>
  </nav>
  </div>
  <Routes>
    <Route path="/" element = {<Home stt = {isActive} />}/>
    <Route path="/weather" element = {<Weather stt = {isActive} />}/>
  </Routes>
  </div>
  );

}

export default App;
