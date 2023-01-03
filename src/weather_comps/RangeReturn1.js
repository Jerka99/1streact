import { useState } from "react";

export default function RangeReturn1(props){

    const [x, setX] = useState(props.days[0].dt_txt.substring(11,13))
    let days = props.days;
    const fun = (e, d) =>{
        let input = e.target.value;
        let num = 100/(d.length);
        

        if(input >= 0 && input < num){
            setX(d[0].dt_txt.substring(11,13));
        }
        else if(input > num && input < num*2){
            setX(d[1].dt_txt.substring(11,13));
        }
        else if(input > num*2 && input < num*3){
            setX(d[2].dt_txt.substring(11,13));
        }
        else if(input > num*3 && input < num*4){
            setX(d[3].dt_txt.substring(11,13));
        }
        else if(input > num*4 && input < num*5){
            setX(d[4].dt_txt.substring(11,13));
        }
        else if(input > num*5 && input < num*6){
            setX(d[5].dt_txt.substring(11,13));
        }
        else if(input > num*6 && input < num*7){
            setX(d[6].dt_txt.substring(11,13));
        }
        else if(input > num*7 && input < num*8){
            setX(d[7].dt_txt.substring(11,13));
        }
            }

    return <>
    {days.map((day, index)=>{

        console.log("day",day.dt_txt.substring(11,13) == x);

   if(`${day.dt_txt.substring(11,13)}` == x){ return (<div className="block3h" key={index}>
    <div>{`${day.dt_txt.substring(11,13)}h - ${("0"+(parseInt(day.dt_txt.substring(11,13))+3)).substr(-2)}h`}</div>
    <img  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}></img>
    <h6>{day.weather[0].main}</h6>
    <h6>temperature: {(day.main.temp-273.15).toFixed(1)}</h6>
    <h6>Wind: {day.wind.speed}</h6>
</div>)}
})}
    <input id="input" type="range" defaultValue={0} onInput={(e)=>fun(e, days)} ></input>

</>
}