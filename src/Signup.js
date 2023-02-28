import React from "react"
import { signupURL } from "./utils/constant"
import Validation from "./utils/validation"
import { withRouter } from "react-router"


class Signup extends React.Component {
    state= {
        username: "",
        email: "",
        password: "",
        errors: {
            username: "",
            email: "",
            password: ""
        }
    }

    handleChange =(event) => {
        let {name, value} = event.target
        let errors = {...this.state.errors}
        Validation(errors, name, value)
        this.setState({ [name]: value, errors })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {username, email, password} = this.state
        fetch(signupURL, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({ user: {username, email, password}})
        })
        .then((res) => {
            if(!res.ok) {
               return res.json().then(({errors}) => {
                return Promise.reject(errors)
                })
            }
            return res.json()
        })
        .then(({user}) => {
            this.props.updateUser(user)
            this.setState({username: "", email: "", password: "" })
            this.props.history.push('/')
        })
        .catch((errors) => 
            this.setState({errors})
            )
    }
    render() {
        let {username, email, password, errors} = this.state
        return (
            <div className="container ">
                <center>
                    <h2>Sign up</h2>
                    <p>Have an account?</p>
                </center>
                <div className="form-1">
                <form 
            
                onSubmit={this.handleSubmit}
                >
                    
                    <span className="error">{errors.username}</span>
                        <input 
                        name="username"
                        type="username" 
                        placeholder="Your Name" 
                        className="form-control form-control-lg" 
                        value={username}
                        onChange={this.handleChange}
                        />
                    
                    <span className="error">{errors.email}</span>
                        <input 
                        name="email"
                        type="email" 
                        placeholder="Email" 
                        className="form-control form-control-lg" 
                        onChange={this.handleChange}
                        value={email} />
                    
                    <span className="error">{errors.password}</span>
                        <input 
                        name="password"
                        type="password" 
                        placeholder="Password" 
                        className="form-control form-control-lg"
                        onChange={this.handleChange} 
                        value={password} />
                    
                    <input 
                    type="submit"
                    value="Sign up"
                    className="btn btn-lg btn-primary pull-xs-right"
                    disabled={errors.email || errors.password || errors.username}
                    />
                        
                    
      
                        
                </form>
                </div>
    
            </div>
        )
    }
   
}

export default withRouter(Signup)