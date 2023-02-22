import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
<header className="navbar">
    <div className="container flex justify-between item-center">
        <NavLink className="brand" to="/">
            <h1>Conduit</h1>
        </NavLink>
        <nav>
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
    </div>

</header>
    )
}


export default Header