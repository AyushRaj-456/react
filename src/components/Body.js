import data from "../data/restro.json";
import RestroCard from "./RestroCard.js";
import { useState, useEffect } from "react";

const Body = () => {

    // useState is a hook that allows us to add state to functional components. 
    // It returns an array with two elements: the current state value and a 
    // function to update it. We can use this function to update the state and 
    // trigger a re-render of the component.

    // it can be used to implement the filter potion on our page.
    // We can use it to store the current filter value and update it when the user
    // changes the filter. We can then use this value to filter the restaurants 
    // displayed on the page.

    const [allRestro, setFilteredRestro] = useState(data.restaurants); // whatever is passed is the defualt value

    useEffect( () => {
        // console.log("useEffect called"); // this is the function called after endering the body.
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.11940&lng=85.39620&carousel=true&third_party_vendor=1"
            );

            if (!response.ok) {
                throw new Error("Something went wrong: " + response.status);
                console.log("Error:", response.status);
            }

            const jsonData = await response.json();

            console.log(jsonData);

        } catch (error) {
            console.log("Actual error:", error.message);
        }
    };


    return (
        <div className="body">
            <div className="searchBar"> Search </div>
            <button className="filterBar" onClick={() => {
                const filteredList = allRestro.filter(
                    (restro) => restro.info.avgRating > 4
                ); // it is used to filed out the resto.

                setFilteredRestro(filteredList); 
                // it is used to update the state of the filtered resto.
            }}>
                Filter </button>
            <div className="restroContainer">
                {/* currently i am passing dummy data...
                but we can get data from the api as an object or an array of object and by passing that 
                in the functional component as props.. We can use those data...
                This will make the restroCards truly dynamic! Will do it later.
                
                This concept is called Config driven UI*/}

                {/* <RestroCard restroInfo={data.restaurants[0]}/> */
                    allRestro.map((restaurants) => {
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