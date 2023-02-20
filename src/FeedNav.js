import "./style/feedNav.css"


function FeedNav() {
    return (
        <ul className="nav nav-pills outline-active">
            <li className="nav-item">
                <a href="/" className="nav-link active">Global Feed</a>
            </li>
            <hr/>
        </ul>
    )
}

export default FeedNav