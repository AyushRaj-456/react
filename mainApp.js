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

const RestroCard = () => {
    return (
        <div className="restroCard">
            <img className="restroImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShMjn9-J45-FXvYls5CnQv8BhVhW368IViY5GLBOlU9g&s=10" ></img>
            <h4 className="restroCardName">Restro name</h4>
            <p className="pronouns">Biryani, Tasty, Good Quality</p>
            <p className="starRating"> 4.4 ↗</p>
            <h6 className="timeTaken"> 22 Mins</h6>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="searchBar"> Search </div>
            <div className="restroContainer">
                <RestroCard/>
                <RestroCard/> 
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