import { useState, useEffect, useRef } from "react";
import FiveDaysWeather from "../FiveDaysWeather.js";
import Clouds from "./../pictures/clouds.jpg";
import Mist from "./../pictures/mist.jpg";
import Snow from "./../pictures/snow.jpg";
import Clear from "./../pictures/clear.jpg";
import Rain from "./../pictures/rain.jpg";
import Thunderstorm from "./../pictures/thunderstorm.jpg";
import Difweather from "./../pictures/difweather.jpg";


function Weather(props){
    console.log("weather")
    
    const [weather, setCityWeather] = useState({});
    const [city, setCity] = useState("")
    const [change, changeChange] = useState("")
    const check = useRef("")


    let fetchWeather = () => { 
            fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + 
            "&appid=ff146a8b4c46b05b8bce4aa16d2a8c35")
            .then((response)=>response.json())
            .then((data) =>{
                setCityWeather({
                name : data.name,
                icon : data.weather[0].icon,
                main : data.weather[0].main,
                description : data.weather[0].description,
                temp : data.main.temp,
                humidity : data.main.humidity,
                speed : data.wind.speed
            });
            check.current = city;}).catch(error => {
              console.error(error)
            });          
        
        }

        const handleSubmit = (event) => {
            event.preventDefault();
          }        

          const caller = () =>{
            if(check?.current !== city){
            fetchWeather()}
            changeChange(<FiveDaysWeather city={city}/>)}
          
        

return(<>  
    <div id="weatherbody" style={
    weather.main === "Clear" ? {backgroundImage: `url(${Clear})`} :
    weather.main === "Clouds" ? {backgroundImage: `url(${Clouds})`} :
    weather.main === "Fog" || weather.main === "Haze" || weather.main === "Mist"  ? {backgroundImage: `url(${Mist})`} : 
    weather.main === "Thunderstorm" ? {backgroundImage: `url(${Thunderstorm})`} : 
    weather.main === "Rain" || weather.main === "Drizzle" ? {backgroundImage: `url(${Rain})`} :
    weather.main === "Snow" ? {backgroundImage: `url(${Snow})`} : {backgroundImage: `url(${Difweather})`}} >
    <div id="flexiblebody" className={props.stt ? "active" : null }>
    <div id="weather-box">  
    <form onSubmit={handleSubmit}>
     <input id="weatherinput" /*ref={city} */ value={city} onChange={(e)=>setCity(e.target.value)}></input> 
     <button id="weatherbutton" onClick={(e)=>{caller()}}>Search</button>
    </form>
    {city == "" ? (<h1>Type city</h1>) : check.current == city ? (<><h1>Todays weather in {weather.name}</h1>
    <img id="weatherimg" src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}></img>
    <h3>{weather.description}</h3>
    <h3>Temperature {(weather.temp-273.15).toFixed(1)} <span>&#176;</span>C</h3>
    <h3>Humidity {weather.humidity}</h3>
    <h3>Wind {weather.speed} km/h</h3></>) :  (<h1>Todays weather in {city}</h1>)}
    </div>
    {check.current !== city ? null : (
    <div id="daysHolder">
      {change}   
    </div>)}
    </div>
    </div>
    
    </>

)}




export default Weather;