import React from "react"
import Validation from "./utils/validation"


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
    }
    render() {
        let {username, email, password, errors} = this.state
        return (
            <div className="container">
                <center>
                    <h2>Sign up</h2>
                    <p>Have an account?</p>
                </center>
                <form className="form">
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
        )
    }
   
}

export default Signup