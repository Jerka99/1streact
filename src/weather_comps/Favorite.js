import { useState, memo, useEffect } from "react";
import { FaRegStar,FaStar } from 'react-icons/fa';

const favoritesFromLocalStorage = JSON.parse(localStorage.getItem("favs")) || {};

let Favorite = (props) => {
  const [show, showFavorites] = useState(false);
  const [favorite, setFavorite] = useState(favoritesFromLocalStorage);
  const city = props.city;
  const setCity = props.setCity;
  const check = props.check;
  const caller = props.caller;
console.log("FAVORITE")

useEffect(()=>{
  localStorage.setItem("favs",JSON.stringify(favorite))
},[favorite])

const addFavorites = () =>{
  const keys = Object.keys(favorite);
  let checker = false;
  keys.forEach(key => {
    if(favorite[key] == city && !check == false){
      checker = true;
    }});
    
    if(check == city  && !checker){//checker == false
  setFavorite(sumOfFavorites =>({...sumOfFavorites, [check]:check}))}

  else if(check == city && checker){
  setFavorite(sumOfFavorites =>{
    const copy ={...sumOfFavorites};
    delete copy[check];
    return copy;
    })
}}




    return <>
    {favorite[city] == check ? <FaStar id="yellowstar"  onClick={addFavorites}></FaStar> :
    <FaRegStar id="star"  onClick={addFavorites}></FaRegStar>}
    <div id="favoriteBoxHolder">
      <div id="favbutton" onClick={(e)=>showFavorites(!show)}><div>Favorites</div><div>{Object.keys(favorite).length}</div></div>  

    <div id="favoriteBox" className={`${show ? "" : "Remove"}`}>
    {Object.keys(favorite).map((element, index) => {
     return (<div key={index} onClick={()=>{showFavorites(!show);caller(element);setCity(element);}}>
      <h6>{element[0].toUpperCase() + element.substring(1).toLowerCase()}</h6>
      </div>)
    })}


    </div>
  </div></>
}
export default memo(Favorite);