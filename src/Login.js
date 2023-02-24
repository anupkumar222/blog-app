import React from "react"
import { Link } from "react-router-dom"
import { loginURL } from "./utils/constant"
import Validation from "./utils/validation"
import { withRouter } from "react-router-dom"


class Login extends React.Component {

    state= {
        email: "",
        password: "",
        errors: {
            email: "",
            password: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { email, password} = this.state
        fetch(loginURL, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({ user: { email, password}})
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
            this.props.history.push('/')
        })
        .catch((error) => 
        this.setState((prevState => {
            return {
                ...prevState,
                errors: {
                    ...prevState.errors,
                    email: 'Email or Passowrd is incorrect!'
                }
            }
        })))
    }

    handleChange =(event) => {
        let {name, value} = event.target
        let errors = {...this.state.errors}

        Validation(errors, name, value)

        this.setState({ [name]: value, errors })
    }


    render() {
        let {email, password, errors} = this.state
        return (
            <div className="container auth-page">
                <div className="container-sm page">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 col-xs-12">
                            <center>
                                <h2 className="text-xs-center">Sign in</h2>
                                <p className="text-xs-center">
                                    <Link className="login-link" to="/signup">Need an account?</Link>
                                </p>
                            </center>
    
                            <form onSubmit={this.handleSubmit}>
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
                                value={password}/>
    
                                <input 
                                className="btn btn-lg btn-primary pull-xs-right"
                                type="submit"
                                disabled={errors.email || errors.password }
                                value="Sign in"
                                />
                                  
                              
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
   
}

export default withRouter(Login)