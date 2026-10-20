import data from "../data/restro.json";
import RestroCard from "./RestroCard.js";

const Body = () => {
    return (
        <div className="body">
            <div className="searchBar"> Search </div>
            <div className="restroContainer">
                {/* currently i am passing dummy data...
                but we can get data from the api as an object or an array of object and by passing that 
                in the functional component as props.. We can use those data...
                This will make the restroCards truly dynamic! Will do it later.
                
                This concept is called Config driven UI*/}

                {/* <RestroCard restroInfo={data.restaurants[0]}/> */
                    data.restaurants.map((restaurants) => {

                        return (<RestroCard
                            key={restaurants.info.id} 
                            restroInfo={restaurants}
                        />)
                    })    
                }
            </div>
        </div>
    )
};

export default Body;