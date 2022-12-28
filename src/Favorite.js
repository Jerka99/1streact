import { useState, memo } from "react";
let Favorite = (props) => {
  const [show, showFavorites] = useState(false);
  const favorite = props.favorite
  const setCity = props.setCity;
  
console.log("FAVORITE")


    return <div id="favoriteBoxHolder">
      <div id="favbutton" onClick={(e)=>showFavorites(!show)}><div>Favorites</div><div>{Object.keys(favorite).length}</div></div>  

    <div id="favoriteBox" className={`${show ? "" : "Remove"}`}>
    {Object.keys(favorite).map((element, index) => {
     return (<div key={index} onClick={()=>{showFavorites(!show);props.caller(element);setCity(element);}}>
      <h6>{element[0].toUpperCase() + element.substring(1).toLowerCase()}</h6>
      </div>)
    })}


    </div>
  </div>
}
export default memo(Favorite);