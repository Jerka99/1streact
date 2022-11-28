import {useEffect, useState} from "react";
// import {fun} from "./fun.js";
let FiveDaysWeather = (props) => {
    console.log("brojpozivaaaaaaa")
    const [weather, setWeather] = useState([]);
    const [newclass, toggle] = useState(0);
    const [buttonDay, SetbuttonDay] = useState([]);
    const [x,setX] = useState("00")
    
    let apiFunction = (prop) => { 
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + prop + 
    "&appid=ff146a8b4c46b05b8bce4aa16d2a8c35")
    .then(response=>response.json())
    .then((data) =>{console.log("data",data); storingFunction(data)
                    
    }).catch(error=>{alert("invalid name");
    })
}
useEffect(()=>{
    console.log("useeffect",props)
    apiFunction(props.city)
    SetbuttonDay([])
                },[props]
    )
let temp ;
let getMyDate = (i) =>{
    let date = new Date;
    // let hourEpoch = date.setHours(date.getHours())
    // let hour = new Date(hourEpoch).toString().substring(16,18)
    let dayEpoch = date.setDate(date.getDate() + i);
    let day = new Date(dayEpoch).toString().substring(8,10);
    
    if(temp !== i){
        temp = i;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    SetbuttonDay(buttonDays=>([...buttonDays, `${days[date.getDay()]}`]))}

    let monthEpoch = date.setMonth(date.getMonth());
    let monthX = new Date(monthEpoch).toString().substring(4,7).toLocaleLowerCase();
    var months = ["","jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    let month = `0${months.indexOf(monthX)}`.substr(-2);
    let yearEpoch = date.setFullYear(date.getFullYear());
    let year = new Date(yearEpoch).toString().substring(11,15);
    
    console.log("date", `${year}-${month}-${day}`);
    return `${year}-${month}-${day}`;
}


let storingFunction = (weatherData) => {
    setWeather([])
    let i = 0;
    while(i < 6){
    const allDays = (weatherData.list.filter(element => {
       return element.dt_txt.substring(0,10)===getMyDate(i)
    }))
    setWeather(sumOfAll =>([...sumOfAll, allDays]))
    i=i+1
}}


   let blocksFunction = (days) =>{
    return days.map((day, index)=>{

        console.log("day",day.dt_txt.substring(11,13));

   if(`${day.dt_txt.substring(11,13)}` == x){ return (<div className="block3h" key={index}>
    <div>{`${day.dt_txt.substring(11,13)}h - ${parseInt(day.dt_txt.substring(11,13))+3}h`}</div>
    <img  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}></img>
    <h6>{day.weather[0].main}</h6>
    <h6>temperature: {(day.main.temp-273.15).toFixed(1)}</h6>
    <h6>Wind: {day.wind.speed}</h6>
</div>)}
})}
    

    const fun = (e, d) =>{
        let input = e.target.value;
        
        let num = 100/(d.length);

        if(input >= 0 && input < num){
            setX(d[0].dt_txt.substring(11,13));
        }
        if(input > num && input < num*2){
            setX(d[1].dt_txt.substring(11,13));
        }
        if(input > num*2 && input < num*3){
            setX(d[2].dt_txt.substring(11,13));
        }
        if(input > num*3 && input < num*4){
            setX(d[3].dt_txt.substring(11,13));
        }
        if(input > num*4 && input < num*5){
            setX(d[4].dt_txt.substring(11,13));
        }
        if(input > num*5 && input < num*6){
            setX(d[5].dt_txt.substring(11,13));
        }
        if(input > num*6 && input < num*7){
            setX(d[6].dt_txt.substring(11,13));
        }
        if(input > num*7 && input < num*8){
            setX(d[7].dt_txt.substring(11,13));
        }
            }
            const check = () =>{
                setX(weather[0][0].dt_txt.substring(11,13))
            }
return(
<>
    <div id="dayButtons">
    <div onClick={(e)=>{toggle(0); check()}}>{buttonDay[0]}</div>
    <div onClick={(e)=>{toggle(1); setX(0)}}>{buttonDay[1]}</div>
    <div onClick={(e)=>{toggle(2); setX(0)}}>{buttonDay[2]}</div>
    <div onClick={(e)=>{toggle(3); setX(0)}}>{buttonDay[3]}</div>
    <div onClick={(e)=>{toggle(4); setX(0)}}>{buttonDay[4]}</div>
    <div onClick={(e)=>{toggle(5); setX(0)}}>{buttonDay[5]}</div>
    </div>
    
    <div id="holderChild">
    {weather.map((days, index)=>{console.log("werd",days)

           if(index == newclass  && days.length !== 0){return (<div className={`flexDays ${index}`} key={index} >
           {/* <div  >{`${days[0].dt_txt.substring(8,10)}.${days[0].dt_txt.substring(5,7)}.`}</div> */}
           <>{blocksFunction(days)}</>
           <input id="input" type="range" onInput={(e)=>fun(e, days)}  ></input>
           </div>)}

        })}
      </div>  
</>)} 

export default FiveDaysWeather;
