import React from "react"
import Loader from "./Loader"
import Post from "./Post"
import "./style/post.css"

function Posts(props){
        const {articles, error} = props;
        if(error) {
           return <p>{error}</p>
        }
        if(!articles) {
            return <Loader />
        }
        if(articles.length < 1) {
            return <h2>No articles found !</h2>
        }
        return articles.map((article) => <Post key={article.slug} {...article}/>);
    
}

export default Posts;