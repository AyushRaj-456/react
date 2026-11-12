import { useState , useEffect } from "react";
import { LOGO_URL } from "../utils/constants.js";


const Header = () => {
    // let logBtn = "Log In"; use less as it cant get updated normally
    const [state_btnName, changeBtnName] = useState("Log In");


    useEffect(() => {
        console.log("useEffect called");
    }, [state_btnName]);
     
    // hre [] is a dependency array, if it is not passed in useEffect then the useeffect
    // will be called after each render of the component.

    // if we passs empty dependency array, [] then the useEffect 
    // will be called only once after the first render of the component.
    
    // when we pass a variable in the dependency array, 
    // then the useEffect will be called only when that variable changes. 
    // In this case, it will be called only when the state_btnName changes.
    
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