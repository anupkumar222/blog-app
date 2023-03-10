import React from "react";
import { Link, withRouter } from 'react-router-dom';
import "./style/singlePost.css";
import { articlesURL } from "./utils/constant";
import Loader from "./Loader";
import CommentBox from "./CommentBox";
import moment from "moment";

class SinglePost extends React.Component {
    state= {
        article: null,
        error: ""
    }

    componentDidMount() {
        
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

    handleDelete = (slug) => {
        fetch(articlesURL + '/' + slug, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.props.user.token,
          },
        })
          .then((res) => {
            if (!res.ok) {
              return Promise.reject('Unable to delete!');
            }
          })
          .then(() => {
            this.props.history.push('/');
          })
          .catch((error) => this.setState({ error }));
      };


render() {
    const {article, error} = this.state;
    const slug = this.props.match.params.slug; 
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
                                {moment(article.createdAt).format('ddd MMM D YYYY')}
                            </time>
                                        {this.props.user &&
            this.props.user.username === article.author.username ? (
              <div>
                <button className="my-post-btn ">
                  <Link className="edit" to={`/edit-article/${slug}`}>
                    <i class="fas fa-edit"></i> Edit Article
                  </Link>
                </button>
                <button
                  className="my-post-btn delete"
                  onClick={() => {
                    this.handleDelete(slug);
                  }}
                >
                  <i class="fas fa-trash-alt"></i> Delete Article
                </button>
              </div>
            ) : (
              ''
            )}
                        </div>
                    </div>
                </div>
                
            </header>
            <div className="container padding">
                <div className="desc">
                {article.body}
                </div>
                <hr/>
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
                            <CommentBox slug={slug} 
                            user={this.props.user}
                            />
                            
                        )}
        </article>
    )
}
}
    


export default withRouter(SinglePost);