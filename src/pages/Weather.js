import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import fetch from "../fetch-wrapper.js"
import FiveDaysWeather from "../weather_comps/FiveDaysWeather.js";
import  Favorite from '../weather_comps/Favorite.js'
import Clouds from "./../pictures/clouds.jpg";
import Mist from "./../pictures/mist.jpg";
import Snow from "./../pictures/snow.jpg";
import Clear from "./../pictures/clear.jpg";
import Rain from "./../pictures/rain.jpg";
import Thunderstorm from "./../pictures/thunderstorm.jpg";
import Difweather from "./../pictures/difweather.jpg";

const cityFromLocalStorage = JSON.parse(localStorage.getItem("city") || "")

function Weather(props){
    console.log("weather")
    
    const [weather, setCityWeather] = useState({});
    const [city, setCity] = useState(cityFromLocalStorage);
    const check = useRef("");
  

    let fetchWeather = (city) => {
      const API = new fetch("https://api.openweathermap.org/data/2.5/");

      API.get("weather?q=" + city + 
      "&appid=ff146a8b4c46b05b8bce4aa16d2a8c35").then((data) =>{
        setCityWeather({
        name : data.name,
        icon : data.weather[0].icon,
        main : data.weather[0].main,
        description : data.weather[0].description,
        temp : data.main.temp,
        humidity : data.main.humidity,
        speed : data.wind.speed
    });    console.log(city);  check.current = city;
    }).catch(error => {
      console.error(error)
    });
    }
    

    useEffect(()=>{
      localStorage.setItem("city",JSON.stringify(city))
    },[check.current])

    useEffect(()=>{
      fetchWeather(city);
    },[])

        const handleSubmit = (event) => {
            event.preventDefault();
          }        


          const fiveDaysFun = useMemo(() =>
          {return<FiveDaysWeather city={city}/>}
          ,[city])

          const caller = useCallback((x) =>{
            fetchWeather(x);         
          },[city])

       


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

    <Favorite check = {check.current} city = {city} setCity = {setCity} caller = {caller} />

    <form onSubmit={handleSubmit}>
     <input id="weatherinput" /*ref={city} */ value={city} onChange={(e)=>setCity(e.target.value)}></input> 
     <button id="weatherbutton" onClick={(e)=>{caller(city);}}>Search</button>
    </form>
    {city == "" ? (<h1>Type city</h1>) : check.current == city && check.current ? (<><h1>Todays weather in {weather.name}</h1>
    <img id="weatherimg" src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}></img>
    <h3>{weather.description}</h3>
    <h3>Temperature {(weather.temp-273.15).toFixed(1)} <span>&#176;</span>C</h3>
    <h3>Humidity {weather.humidity}</h3>
    <h3>Wind {weather.speed} km/h</h3></>) :  (<h1>Todays weather in {city}</h1>)}
    
    </div>


    {  check.current == city && city !== ""  ?  ( //&& check.current
    <div id="daysHolder">
      {fiveDaysFun}   
    </div>) : null }
    </div>

    </div>
    
    </>

)}




export default Weather;