import moment from 'moment';
import React from 'react';



export default function Comment(props) {
  console.log(props)
  let {user} = props;
  
  let { id, author, body, createdAt } = props.comment;
  return (
    <li className="parent-box">
      <p className="comment padding">{body}</p>
      <div className="flex items-center justify-between second single-cmnt">
        <div className="flex items-center ">
          <img
            className="profile-img"
            src={author.image}
            alt={author.username}
          />
          <span className="user">
            {author.username}
          </span>
          <span className="user">
            {moment(createdAt).format('ddd MMM D YYYY')}
          </span>
        </div>
        {author.username === user.username ? (
          <button
            className="del-btn"
            onClick={() => {
              props.handleDelete(id);
            }}
          >
            <i class="fas fa-trash-alt"></i>
          </button>
        ) : (
          ''
        )}
      </div>
    </li>
  );
}
