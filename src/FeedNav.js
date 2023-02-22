import { Link } from "react-router-dom"
import "./style/feedNav.css"


function FeedNav(props) {
    return (
        <ul className="nav nav-pills outline-active">
            <li 
            className="nav-item"
            onClick={props.removeTab} 
            >
                <Link to='/'
                
                className={props.activeTab === "" && "nav-link active"}>
                    Global Feed
                </Link>
            </li>
            {props.activeTab && (
                <li className="nav-item">
                    <Link to='/' 
                    className={props.activeTab && "nav-link active"}>
                        # {props.activeTab}
                    </Link>
                </li>
            )}
            <hr className="hr" />
        </ul>
    )
}

export default FeedNav