import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
    
    return (
<header className="navbar">
    <div className="container flex justify-between item-center">
        <NavLink className="brand" to="/">
            <h1>Conduit</h1>
        </NavLink>
        
        {
            props.isLoggedIn && props.user && props.user.username ? <AuthHeader username={props.user.username} /> : <NonAuthHeader />
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

class AuthHeader extends React.Component {
   render() {

    const username = this.props.username;

  
    return(
        <nav className="nav-menu">
        <ul className="flex item-center nav-menu">
            <li className="nav-item">
                <NavLink activeClassName="active" to="/" exact>
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName="active" to="/newpost">
                 New_Post  
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName="active" to="/settings">
                Settings
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName="active" to={`/profile/${username}`}>
                Profile
                </NavLink>
            </li>
        </ul>
    </nav> 
    )
   }
  
}

export default Header