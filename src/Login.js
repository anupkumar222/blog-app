import React from "react"

function Login() {
    return (
        <div className="container auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <center>
                        <h2 className="text-xs-center">Sign in</h2>
                        <p className="text-xs-center">
                            <a className="login-link" href="/register">Need an account?</a>
                        </p>
                        </center>

                        <form>
                            
                                <input type="text" placeholder="Email" className="form-control form-control-lg" value="" />
                            
                            
                                <input type="password" placeholder="Password" className="form-control form-control-lg" value="" />
                            
                            <button className="btn btn-lg btn-primary pull-xs-right">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login