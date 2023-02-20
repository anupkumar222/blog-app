import React from "react"

function Signup() {
    return (
        <div className="container">
            <center>
                <h2>Sign up</h2>
                <a>Have an account?</a>
            </center>
            <form className="form">
                
                    <input type="text" placeholder="Your Name" className="form-control form-control-lg" value="" />
                
                
                    <input type="text" placeholder="Email" className="form-control form-control-lg" value="" />
                
                
                    <input type="password" placeholder="Password" className="form-control form-control-lg" value="" />
                
                <button className="btn btn-lg btn-primary pull-xs-right">Sign up</button>
            </form>


        </div>
    )
}

export default Signup