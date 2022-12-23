import { useState } from "react";
let Favorite = (props) => {
  const [show, showFavorites] = useState(false);
  const favorite = props.favorite
console.log("favoriteeeeeeeeeeeeeeee",favorite)

    return <div id="favoriteBoxHolder">
      <div id="favbutton" onClick={(e)=>showFavorites(!show)}><div>Favorites</div><div>{Object.keys(favorite).length}</div></div>  

    <div id="favoriteBox" className={`${show ? "" : "Remove"}`}></div>
  </div>
}
export default Favorite;