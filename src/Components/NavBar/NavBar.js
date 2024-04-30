import "./NavBar.css";
import logo from "../../Pages/Images/logo.jpg"

const NavBar = () => {
    return (
        <div className="NavBar">
            <img src={logo} className="logo" alt="tiger" />
            <a className="active" href="Tour">Book A Tour</a>
            <a href="Hotel">Hotel</a>
            <a href="Articles">Articles</a>
            <a href="Profile">Profile</a>
            <a href="Login">Login</a>
            <a href="Register">Register</a>
            <a href="/">Home</a>
        </div>
    );
};

export default NavBar;