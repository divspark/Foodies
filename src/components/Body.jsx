import { RestaurantList } from "../Utility/constant"
import { RestaurantCard } from "./RestaurantCard"


export const Body = () => {
    return(
        <div className="restaurant-list">
            {
                RestaurantList.map((restaurant) => {
                    return <RestaurantCard {...restaurant?.info}key={restaurant?.info.id}/>
                })
            }
            
        </div>
    )
}