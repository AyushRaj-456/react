import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";


const Header = () => {
    // let logBtn = "Log In"; use less as it cant get updated normally
    const [state_btnName, changeBtnName] = useState("Log In");

    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src = {LOGO_URL} alt="Logo"></img>
            </div>

            <div className="navItems">
                <ul className="headerLinks">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    {/* <li>Login</li> */}
                    <li>
                        <button className="login_btn" onClick={() => {
                        
                        (state_btnName === "Log In") ? changeBtnName("Log Out!") : changeBtnName("Log In");
                    }}> {state_btnName} </button>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;