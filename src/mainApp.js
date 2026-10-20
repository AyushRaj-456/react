import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body.js";
import RestroCard from "./components/RestroCard.js";
import Header from "./components/Header.js";
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