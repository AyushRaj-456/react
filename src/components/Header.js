import { LOGO_URL } from "../utils/constants.js";

const Header = () => {
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
                    <li>Login</li>

                </ul>
            </div>
        </div>
    )
};

export default Header;