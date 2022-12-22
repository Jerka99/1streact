import RangeReturn1 from "./RangeReturn1";
import { useState, useEffect } from "react";

export default function RangeReturn2 (prop){
   console.log("rangereturn2")
    const weather = prop.weather;
    const buttonDay = prop.buttonDay;
    const [displayBlock, toggle] = useState(prop.x);

    useEffect(()=>{
      toggle(prop.x)
      },[prop.x]
      )

    return <> 
    <div id="dayButtons">
    { weather[0]?.length !==0 ? (
    <div onClick={(e)=>{toggle(0); }}>
                                             {buttonDay[0] ?? "Loading..."}</div>) : null}
    <div onClick={(e)=>{toggle(1); }}>{buttonDay[1] ?? "Loading..."}</div>
    <div onClick={(e)=>{toggle(2); }}>{buttonDay[2] ?? "Loading..."}</div>
    <div onClick={(e)=>{toggle(3); }}>{buttonDay[3] ?? "Loading..."}</div>
    <div onClick={(e)=>{toggle(4); }}>{buttonDay[4] ?? "Loading..."}</div>
    { weather[5]?.length !==0 ? (
    <div onClick={(e)=>{toggle(5); }}>
                                             {buttonDay[5] ?? "Loading..."}</div>) : null}
    </div>

    <div id="holderChild">
    {weather.map((days, index)=>{
        
           if(index === displayBlock && days.length !== 0){
            return (<div className={`flexDays ${index}`} key={index} >
           <div id="date_n_day" >{`${days[0]?.dt_txt.substring(8,10)}.${days[0]?.dt_txt.substring(5,7)}. ${buttonDay[index]?? "Loading..."} `}</div>
           <RangeReturn1 days={days} />
           </div>)}

        })}
      </div> </> 

}