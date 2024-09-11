import {IMG_URL, RestaurantList} from "../Utility/constant.js"

//Optional Chaining - ?
export const RestaurantCard = ({name,cuisines,avgRating,cloudinaryImageId}) => {
    return(
        <div className="restaurant-card">
            <img src= {IMG_URL + cloudinaryImageId} alt="burger-king" />
            <h2>{name}</h2>
            <h3>{cuisines[0]}</h3>
            <h4>{avgRating} rating</h4>
        </div>
    )
}