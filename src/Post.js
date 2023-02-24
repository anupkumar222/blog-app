import "./style/post.css"
import React from "react";
import {Link} from "react-router-dom"

function Post(props) {
    const {author, createdAt, favoritesCount, title, description, tagList, slug} = props;
    return (
        <div>
            <div className="article-preview">
                <div className="article-meta flex justify-between">
                    <div className="icon">
                        <Link to="/">
                            <img 
                            src={author.image || 
                            <i class="fa-regular fa-face-smile">
                            </i>
                        } 
                        alt={author.username} 
                        />
                        </Link>
                        <div className="info">
                            <Link className="author" to="/">{author.username}</Link>
                            <p className="date-post">{createdAt}</p>
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
                    <div className="flex justify-between">
                        <Link to={`/article/${slug}`}>Read more...</Link>
                        <ul className="tag-list flex justify-between">
                        {tagList.map((tag) => (
                        <li className="tag-default">{tag}</li>
                        ))}
                         </ul>
                    </div>

                </Link>
            </div>
        </div>
    )
}

export default Post