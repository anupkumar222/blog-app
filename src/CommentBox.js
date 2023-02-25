import React, { Component } from 'react';
import { articlesURL } from './utils/constant';
import Comments from './Comments';
import "./style/commentBox.css"



export default class CommentBox extends Component {
  state = {
    comments: null,
    errors: null,
    body: '',
  };
  
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let body = {
      comment: {
        body: this.state.body,
      },
    };
    fetch(articlesURL + `/${this.props.slug}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Token ${this.props.user.token}`
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (!res.ok)
          return res.json((error) =>
            Promise.reject('Unable to post comments!')
          );
        return res.json();
      })
      .then(() => {
        this.fetchComments();
        this.setState({ body: '' });
      })
      .catch((errors) => {
        this.setState({ errors: errors });
      });
  };

  fetchComments = () => {
    fetch(articlesURL + `/${this.props.slug}/comments`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Token ${this.props.user.token}`
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((errors) => Promise.reject());
        }
        return res.json();
      })
      .then((data) => this.setState({ comments: data.comments }))
      .catch((errors) =>
        this.setState({ errors: 'Unable to fetch comments!' })
      );
  };
  render() {
    return (
      <section className="container-sm">
        <form
          className="border"
          onSubmit={this.handleSubmit}
        >
          <textarea
            name="body"
            rows="3"
            className="comment-box"
            onChange={this.handleChange}
            placeholder="Write a comment..."
            value={this.state.body}
            required={true}
          ></textarea>
          <div className="flex sm-btn">
            <div>
              <img
                className="cmnt-img"
                src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
                alt=""
              />
            </div>
            <button
              className="post-btn"
              type="submit"
            >
              Post Comment
            </button>
          </div>
        </form>
        <Comments
        user={this.props.user}
          slug={this.props.slug}
          fetchComments={this.fetchComments}
          state={this.state}
        />
      </section>
    );
  }
}
