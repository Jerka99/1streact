
let Favorite = (props) => {
console.log("favoriteeeeeeeeeeeeeeee",props.favorite)

    return <div id={`favoriteBoxHolder${props.show ? "1" : ""}`}>
    <div id="favoriteBox"></div>
  </div>
}
export default Favorite;