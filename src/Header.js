import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
    console.log(props.isLoggedIn)
    return (
<header className="navbar">
    <div className="container flex justify-between item-center">
        <NavLink className="brand" to="/">
            <h1>Conduit</h1>
        </NavLink>
        
        {
            props.isLoggedIn ? <AuthHeader /> : <NonAuthHeader />
        }
    </div>

</header>
    )
}

function NonAuthHeader() {
    return(
        <nav className="nav-menu">
        <ul className="flex item-center nav-menu">
            <li className="nav-item">
                <NavLink activeClassName="active" to="/" exact>
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName="active" to="/signup">Signup</NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName="active" to="/login">Login</NavLink>
            </li>
        </ul>
    </nav> 
    )
}

function AuthHeader() {
    return(
        <nav className="nav-menu">
        <ul className="flex item-center nav-menu">
            <li className="nav-item">
                <NavLink activeClassName="active" to="/" exact>
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName="active" to="/signup">
                 New Post   
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName="active" to="/login">
                Settings
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName="active" to="/login">
                Profile
                </NavLink>
            </li>
        </ul>
    </nav> 
    )
}

export default Header