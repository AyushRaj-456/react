import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body.js";
import RestroCard from "./components/RestroCard.js";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import data from "./data/restro.json" with { type: "json" };
import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



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
            <Outlet/>
        </div>
    )
};

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children : [
            {
                path : "/",
                element : <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
        ],
        errorElement: <Error/>,
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);

// console.log(data);