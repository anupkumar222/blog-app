import React from "react"
import Loader from "./Loader"
import { tagsURL } from "./utils/constant"
import "./style/sidebar.css"

class Sidebar extends React.Component {
    state = {
        tags : null,
        error: ""
    }
    
    componentDidMount() {
        fetch(tagsURL)
        .then((res) => {
            if(!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        })
        .then(({tags}) => {
            this.setState({
                tags, error: ""
            })
        })
        .catch((err) => {
            this.setState({
                error: 'Not able to fetch tags!'
            })
        })
    }

    render() {
        const {tags, error} = this.state;
        if(error) {
            return <p>{error}</p>
        }
        if(!tags) {
            return <Loader />
        }
        return(
            <aside className="tags">
               <h2 className="sidebar-h2">Popular Tags</h2>
               <div className="parent-tag flex wrap">
               {tags.map((tag) => (
                <div className="tag">{tag}</div>
               ))} 
               </div>
            
            </aside>
        )
    }
}
export default Sidebar;