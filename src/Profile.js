import React from "react"
import Pagination from "./Pagination";
import Posts from "./Posts";
import ProfileBanner from "./ProfileBanner"
import { articlesURL } from "./utils/constant";
import "./style/post.css"

class Profile extends React.Component {

    state = {
        activeTab: "my",
        articles: []
    }

    handleActive = (tab) => {
        this.setState({
            activeTab: tab
        }, () => this.fetchData())
    }

    fetchData = () => {

        fetch(articlesURL + `/?${this.state.activeTab}=${this.props.user.username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Token ${this.props.user.token}`
            },
        })
        .then((res) => {
            if(!res.ok) {
                throw new Error(`Can not fetch data  for specific user!`);
            }
            return res.json();
        })
        .then((data) => {
            console.log(data.articles, "ar")
            this.setState({
                articles : data.articles, 
            })
        })
        .catch((err) => {
            this.setState({
                error: 'Not able to fetch articles!'
            })
        })
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const {activeTab} = this.state;
        const {user} = this.props
        return (
            <section >
                <ProfileBanner user={user} />
                <div className="container">
                    <div className=" outline-active">
                        <div className="nav-item">
                            <button className={activeTab === "my" ? 
                            "active nav-link profile-feed" : "nav-link profile-feed"}
                            onClick={() => this.handleActive('my')}
                            >
                                My Articles
                            </button>
                            <button className={activeTab === "fav" ? 
                            "active nav-link profile-feed" : "nav-link profile-feed"}
                            onClick={() => this.handleActive('fav')}
                            >
                                Favourited Articles
                            </button>
                        </div>
                        <Posts articles={this.state.articles} />
                        <Pagination />
                    </div>
                </div>
            </section>
        
        )
    }
    
    }
    
    export default Profile