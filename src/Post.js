import "./style/post.css"
import React from "react";
import { Link } from "react-router-dom"
import moment from "moment";

function Post(props) {
    const { author, createdAt, favoritesCount, title, description, tagList, slug } = props;
    return (
        <div>
            <div className="article-preview">
                <div className="article-meta flex justify-between">
                    <div className="icon">
                    <figure className="profile-img">
                        {/* <Link to="/"> */}
                            
                                <img
                                    src={author.image || `/smiley.jpg`
                                    }
                                    alt={author.username}
                                />
                            
                        {/* </Link> */}
                        </figure>
                        <div className="info">
                            <Link className="author" to={`/profile/${author.username}`}>{author.username}</Link>
                            <p className="date-post"> {moment(createdAt).format('ddd MMM D YYYY')}</p>
                        </div>
                    </div>

                    <div className="pull-xs-right">
                        <button className="btn btn-sm ">
                            <i className="fa-solid fa-heart"></i> {favoritesCount} </button>
                    </div>
                </div>
                <Link className="preview-link" to={`/article/${slug}`}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <div className="flex justify-between ">
                        <Link className="read-more" to={`/article/${slug}`}>Read more....</Link>
                        <ul className="tag-list flex justify-between">
                            {tagList.map((tag) => (
                                <li className="tag-default">{tag}</li>
                            ))}
                        </ul>
                    </div>

                </Link>
            </div>
            <hr/>
        </div>
    )
}

export default Post