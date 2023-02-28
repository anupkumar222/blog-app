import "./style/setting.css"
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { userVerifURL } from './utils/constant';
import Validation from "./utils/validation";



class Settings extends React.Component {
    state = {
        image: '',
        username: '',
        bio: '',
        email: '',
        password: '',
        errors: {
          image: '',
          username: '',
          bio: '',
          email: '',
          password: '',
        },
      };

      componentDidMount() {
        let { username, email, image, bio } = this.props.user;
        this.setState({ username, email, image, bio });
      }

      handleChange = (event) => {
        let { name, value } = event.target;
        let { errors } = this.state;
        Validation(errors, name, value);
        this.setState({ [name]: value });
      };
      handleLogout = () => {
        localStorage.clear();
        this.props.setIsLoggedIn(false);
        this.props.history.push('/');

      };

      handleSubmit = (event) => {
        event.preventDefault();
        let { image, username, bio, email, password } = this.state;
        let body = {
          user: {
            email,
            bio,
            image,
            username,
          },
        };


        if (password) body.user.password = password;
        fetch(userVerifURL, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.props.user.token,
          },
          body: JSON.stringify(body),
        })
          .then((res) => {
            if (!res.ok) {
              return res.json().then((errors) => Promise.reject(errors));
            }
            return res.json();
          })
          .then((user) => {
            this.props.updateUser(user.user);
            this.props.history.push('/');
          })
          .catch((errors) => {
            this.setState({ errors: errors.errors });
          });
         }

    

    render() {
        let { image, username, bio, email, password, errors } = this.state;
        return (
            <div className="col-md-6 offset-md-3 col-xs-12 container-sm">
            <h1 className="text-xs-center text-center">Your Settings</h1>
            <form >
                <fieldset className="padding padding-left">
                
                <input
                    className="form-control form-control-lg"
                    type="text" 
                    name="image"
                    placeholder="URL of profile picture"
                    onChange={this.handleChange}
                    value={image} />
            

                    <span className="text-red-500 block text-center">
                    {errors.username}
                     </span>
                    <input className="form-control form-control-lg"
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={this.handleChange}
                        value={username} />
                
                <span className="text-red-500 block text-center">
            {errors.bio}
          </span>
                    <textarea className="form-control form-control-lg"
                        rows="8" 
                        placeholder="Short bio about you"
                        onChange={this.handleChange}
                        value={bio}
                        >
                        
                    </textarea>
                
                    <span className="text-red-500 block text-center">
            {errors.email}
          </span>
                    <input className="form-control form-control-lg"
                        type="email"
                        placeholder="Email" 
                        value={email}
                        onChange={this.handleChange}
                        />
                
                <span className="text-red-500 block text-center">
            {errors.password}
          </span>
                    <input className="form-control form-control-lg"
                        type="password"
                        name="password"
                        placeholder="New Password"
                        onChange={this.handleChange}
                        value={password} />
                          
                <button className="btn btn-lg btn-primary pull-xs-right"
                    type="button"
                    onClick={this.handleSubmit}
                    disabled={errors.email || errors.password}
                    >Update Settings
                    </button>
            </fieldset>
            </form>
            <hr />
            <button className="btn btn-setting"
            onClick={this.handleLogout}
            >
                Or click here to logout.
                </button>
        </div>
        )
    }
   
 

}

export default withRouter(Settings)