import React from "react"
import { Route, Switch } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import NoMatch from "./NoMatch"
import SinglePost from "./SinglePost"


class App extends React.Component {
    state = {
        isLoggedIn: false,
        user: null
    }

updateUser = (user) => {
    this.setState({
        isLoggedIn: true,
        user
    })
}

    render() {
        return (
            <>
                <Header 
                isLoggedIn={this.state.isLoggedIn} 
                user={this.state.user}
                />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/signup">
                        <Signup updateUser={this.updateUser} />
                    </Route>
                    <Route path="/login">
                        <Login updateUser={this.updateUser} />
                    </Route>
                    <Route path="/article/:slug" component={SinglePost}>
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
    
    
    
    
            </>
        )
    }
  
}

export default App;