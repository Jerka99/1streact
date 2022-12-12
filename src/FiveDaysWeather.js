import {memo, useEffect, useState} from "react";
import RangeReturn2 from "./RangeReturn2.js";

let FiveDaysWeather = (props) => {
    console.log("FiveDaysWeather")
    const [weather, setWeather] = useState([]);
    const [buttonDay, SetbuttonDay] = useState([]);
    
    let apiFunction = (prop) => { 
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + prop + 
    "&appid=ff146a8b4c46b05b8bce4aa16d2a8c35")
    .then(response=>response.json())
    .then((data) =>{console.log("data",data); storingFunction(data)
                    
    }).catch(console.error());
    
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
    console.time("for")
    for(let i = 0; i < 6; i++){
        let everyDay = getMyDate(i);
        const allDays = (weatherData.list.filter(element => {
       return element.dt_txt.substring(0,10)===everyDay;
    }))
    setWeather(sumOfAll =>([...sumOfAll, allDays]))
}
console.timeEnd("for")}

   
if(weather[0]?.length > 0)
return(
<>
    <RangeReturn2 weather={weather} buttonDay={buttonDay} x={0}/>
</>)
else{
    return(
        <>
            <RangeReturn2 weather={weather} buttonDay={buttonDay} x={1} />
        </>)
}
} 

export default memo(FiveDaysWeather);
