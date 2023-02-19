import React from "react"

function Login() {
    return (
        <div class="container auth-page">
            <div class="container page">
                <div class="row">
                    <div class="col-md-6 offset-md-3 col-xs-12">
                        <center>
                        <h2 class="text-xs-center">Sign in</h2>
                        <p class="text-xs-center">
                            <a className="login-link" href="/register">Need an account?</a>
                        </p>
                        </center>

                        <form>
                            
                                <input type="text" placeholder="Email" class="form-control form-control-lg" value="" />
                            
                            
                                <input type="password" placeholder="Password" class="form-control form-control-lg" value="" />
                            
                            <button class="btn btn-lg btn-primary pull-xs-right">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login