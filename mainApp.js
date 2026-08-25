import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data/restro.json" with { type: "json" };



/*
    - Main Web Page
        - Header
            - Logo
            - Navigation Links
        - Body
            - Search 
            - Restro Container
                - Restro Cards
                    - image
                    - name
                    - star rating
                    - time to reach

            - Footers
                - Required Links
                - Details About the Org
*/
const Header = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src ="https://img.magnific.com/premium-vector/food-logo-vector-design-template_600323-3904.jpg?semt=ais_hybrid&w=740&q=80"></img>
            </div>

            <div className="navItems">
                <ul className="headerLinks">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <li>Login</li>

                </ul>
            </div>
        </div>
    )
}

const RestroCard = (props) => {
    // console.log(props);
    // unable to implement the image using imageCode from the json... do it later 
    const imgUrl = "https://media-assets.swiggy.com/swiggy/image/upload/" + props.restroInfo.info.cloudinaryImageId;
    return (
        <div className="restroCard">
            {/* {const imgUrl = }  */}
            <img className="restroImg" src={imgUrl}></img>
            <h4 className="restroCardName">{props.restroInfo.info.name}</h4>
            <p className="pronouns">{props.restroInfo.info.cuisines.join(", ")}</p>
            <p className="starRating">{"Rating " + props.restroInfo.info.avgRating}</p>
            <h6 className="timeTaken">{props.restroInfo.info.sla.slaString}</h6>
        </div>
    )
}

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
}

const AppLayout = () => {
    return (
        <div className="App">
            <Header/>
            <Body/>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

// console.log(data);