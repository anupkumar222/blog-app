import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
<header className="navbar">
    <div className="container flex justify-between item-center">
        <NavLink className="brand" href="/">
            <h1>Conduit</h1>
        </NavLink>
        <nav>
            <ul className="flex item-center nav-menu">
                <li className="nav-item">
                    <NavLink className="active" href="/">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink href="/signup">Signup</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink href="/Login">Login</NavLink>
                </li>
            </ul>
        </nav>
    </div>

</header>
    )
}


export default Header