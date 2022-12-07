
export default function RangeReturn(props){

    return props.days.map((day, index)=>{

        console.log("day",day.dt_txt.substring(11,13) == props.x);


   if(`${day.dt_txt.substring(11,13)}` == props.x){ return (<div className="block3h" key={index}>
    <div>{`${day.dt_txt.substring(11,13)}h - ${parseInt(day.dt_txt.substring(11,13))+3}h`}</div>
    <img  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}></img>
    <h6>{day.weather[0].main}</h6>
    <h6>temperature: {(day.main.temp-273.15).toFixed(1)}</h6>
    <h6>Wind: {day.wind.speed}</h6>
</div>)}
})
}