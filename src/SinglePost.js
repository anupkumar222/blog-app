import React from "react";
import { Link, withRouter } from 'react-router-dom';
import "./style/singlePost.css";
import { articlesURL } from "./utils/constant";
import Loader from "./Loader";

class SinglePost extends React.Component {
    state= {
        article: null,
        error: ""
    }

    componentDidMount() {
        console.log(this.props)
        let slug = this.props.match.params.slug;

            fetch(articlesURL + '/' + slug)
            .then((res) => {
                if(!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then((data) => {
                this.setState({
                    article : data.article, 
                    error: "",
                })
            })
            .catch((err) => {
                this.setState({
                    error: 'Not able to fetch article!'
                })
            })
        
    }



render() {
    const {article, error} = this.state;
    if(error) {
       return <p>{error}</p>
    }
    if(!article) {
        return <Loader />
    }
    return(
        <article >
            <header className="head" >
                <div className="container padding">
                    <h3>
                        {article.title}
                    </h3>
                    <div className="flex">
                        <Link to="/">
                        <figure className="image">
                        <img 
                        src={article.author.image || 
                            <i class="fa-regular fa-face-smile">
                            </i>
                        } 
                        alt="img"
                        />
                        </figure>

                        </Link>
                        <div>
                            <Link to="/">
                            <p>{article.author.username}</p>
                            </Link>
                            <time dateTime="" className="date">
                                {article.createdAt}
                            </time>
                        </div>
                    </div>
                </div>
                
            </header>
            <div className="container padding">
                <div className="desc">
                {article.body}
                </div>
            </div>
                        {this.props.user === null ? (
                                        <footer>
                                        <div className="footer-single padding container">
                                            <p>
                                                <Link to="/login">Login</Link> or 
                                                <Link to="/signup"> Signup </Link>
                                                to add comments on this article
                                            </p>
                                        </div>
                                    </footer>
                        ) : (
                            ''
                        )}
        </article>
    )
}
}
    


export default withRouter(SinglePost);