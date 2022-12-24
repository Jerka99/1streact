import { useState, useRef, useCallback } from "react";
import FiveDaysWeather from "../FiveDaysWeather.js";
import  Favorite from '../Favorite.js'
import Clouds from "./../pictures/clouds.jpg";
import Mist from "./../pictures/mist.jpg";
import Snow from "./../pictures/snow.jpg";
import Clear from "./../pictures/clear.jpg";
import Rain from "./../pictures/rain.jpg";
import Thunderstorm from "./../pictures/thunderstorm.jpg";
import Difweather from "./../pictures/difweather.jpg";
import { FaRegStar,FaStar } from 'react-icons/fa';



function Weather(props){
    console.log("weather")
    
    const [weather, setCityWeather] = useState({});
    const [city, setCity] = useState("");
    const [FiveDays, displayFiveDays] = useState("");
    const check = useRef("");
    const clicked = useRef(false);
    const [favorite, setFavorite] = useState({});

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
            });            check.current = city;
                           clicked.current = true;
            }).catch(error => {clicked.current = false;
              console.error(error)
            });          
        
        }

        const handleSubmit = (event) => {
            event.preventDefault();
          }        

          const caller = () =>{
            clicked.current = false;
            fetchWeather();         
            displayFiveDays(<FiveDaysWeather city={city}/>)
          }

          const addFavorites = () =>{
            console.log("clicked.current",clicked.current)
            const keys = Object.keys(favorite);
            let checker = false;
            keys.forEach(key => {
              if(favorite[key] == city){
                checker = true;
              }});
              
            if(clicked.current && !checker){//checker == false
            setFavorite(sumOfFavorites =>({...sumOfFavorites, [check.current]:check.current}))}
          
          else if(clicked.current && checker){
            setFavorite(sumOfFavorites =>{
              const copy ={...sumOfFavorites};
              delete copy[check.current];
              return copy;
              })
          }}
          console.log("favorite",favorite)
        
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
    {favorite[city] == check.current ? <FaStar id="yellowstar"  onClick={addFavorites}></FaStar> :
       <FaRegStar id="star"  onClick={addFavorites}></FaRegStar>}
    <form onSubmit={handleSubmit}>
     <input id="weatherinput" /*ref={city} */ value={city} onChange={(e)=>setCity(e.target.value)}></input> 
     <button id="weatherbutton" onClick={(e)=>{caller()}}>Search</button>
    </form>
    {city == "" ? (<h1>Type city</h1>) : check.current == city && clicked.current == true ? (<><h1>Todays weather in {weather.name}</h1>
    <img id="weatherimg" src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}></img>
    <h3>{weather.description}</h3>
    <h3>Temperature {(weather.temp-273.15).toFixed(1)} <span>&#176;</span>C</h3>
    <h3>Humidity {weather.humidity}</h3>
    <h3>Wind {weather.speed} km/h</h3></>) :  (<h1>Todays weather in {city}</h1>)}
    
    </div>

    <Favorite favorite = {favorite} setCity={setCity}/>

    {  check.current == city && city !== "" && clicked.current ?  (
    <div id="daysHolder">
      {FiveDays}   
    </div>) : null }
    </div>

    </div>
    
    </>

)}




export default Weather;