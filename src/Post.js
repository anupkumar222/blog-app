import "./style/post.css"
import React from "react";

function Post(props) {
    const {author, createdAt, favoritesCount, title, description, tagList} = props;
    return (
        <div>
            <div className="article-preview">
                <div className="article-meta flex justify-between">
                    <div className="icon">
                        <a href="/@Anah Benešová">
                            <img src={author.image || <i class="fa-regular fa-face-smile"></i>} alt={author.username} />
                        </a>
                        <div className="info">
                            <a className="author" href="/@Anah Benešová">{author.username}</a>
                            <p className="date">{createdAt}</p>
                        </div>
                    </div>

                    <div className="pull-xs-right">
                        <button className="btn btn-sm ">
                            <i className="fa-solid fa-heart"></i> {favoritesCount} </button>
                    </div>
                </div>
                <a className="preview-link" href="/article/Try-to-transmit-the-HTTP-card-maybe-it-will-override-the-multi-byte-hard-drive!-120863">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <div className="flex justify-between">
                        <div>Read more...</div>
                        <ul className="tag-list flex justify-between">
                        {tagList.map((tag) => (
                        <li className="tag-default">{tag}</li>
                        ))}
                         </ul>
                    </div>

                </a>
            </div>
        </div>
    )
}

export default Post