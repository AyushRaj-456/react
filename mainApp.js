import React from "react";
import ReactDOM from "react-dom/client";

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
    return (
        <div className="restroCard">
            <img className="restroImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShMjn9-J45-FXvYls5CnQv8BhVhW368IViY5GLBOlU9g&s=10" ></img>
            <h4 className="restroCardName">{ props.restroCardName }</h4>
            <p className="pronouns">{ props.pronouns }</p>
            <p className="starRating">{ props.starRating }</p>
            <h6 className="timeTaken">{ props.timetaken }</h6>
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
                This will make the restroCards truly dynamic! Will do it later*/}
                <RestroCard restroCardName="NiksFood" pronouns="Non Veg" starRating="4.9" timetaken="14 Minutes"/>
                <RestroCard restroCardName="KFC India" pronouns="Non Veg" starRating="4.2" timetaken="21 Minutes"/> 
                <RestroCard restroCardName="Class Of Glass" pronouns="Fried Finger, Crackable Glass Cake, Juice" starRating="3.9" timetaken="44 Minutes"/>
                <RestroCard restroCardName="Biryani World" pronouns="Non Veg, Chicken, Hotty Biryani" starRating="4.2" timetaken="29 Minutes"/> 
                
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