import React from "react"
import { Route, Switch } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import NoMatch from "./NoMatch"
import SinglePost from "./SinglePost"
import { localStorageKey, userVerifURL } from "./utils/constant"
import FullPageSpinner from "./FullPageSpinner"
import NewPost from "./NewPost"
import Settings from "./Setting"
import Profile from "./Profile"


class App extends React.Component {
    state = {
        isLoggedIn: false,
        user: null,
        isVerifying: true
    }

    componentDidMount() {
        let storageKey = localStorage[localStorageKey];
        if(storageKey) {
            fetch(userVerifURL, {
                method: 'GET',
                headers: {
                    authorization: `Token ${storageKey}`
                }
            })
            .then((res) => {
                if(res.ok) {
                    return res.json();
                }
                return res.json().then(({errors}) => {
                    return Promise.reject(errors)
                   })
            })
            .then(({user}) => this.updateUser(user))
            .catch((errors) => console.log(errors))
        } else {
            this.setState({isVerifying: false})
        }
    }

updateUser = (user) => {
    this.setState({
        isLoggedIn: true,
        user,
        isVerifying: false
    })
    localStorage.setItem(localStorageKey, user.token)
}

    render() {
        if(this. state.isVerifying) {
            return <FullPageSpinner /> 
        }
        return (
            <>
                <Header 
                isLoggedIn={this.state.isLoggedIn} 
                user={this.state.user}
                />
            {
                this.state.isLoggedIn ? <AthenticatedApp /> : <UnAuthenticatedApp updateUser={this.updateUser}/>
            }
    
    
    
    
            </>
        )
    }
  
}

function AthenticatedApp () {
return(
    <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/newpost">
                        < NewPost />
                    </Route>
                    <Route path="/settings">
                        <Settings />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/article/:slug" component={SinglePost}>
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
)
}

function UnAuthenticatedApp (props) {
return (
    <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/signup">
                        <Signup updateUser={props.updateUser} />
                    </Route>
                    <Route path="/login">
                        <Login updateUser={props.updateUser} />
                    </Route>
                    <Route path="/article/:slug" component={SinglePost}>
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
)
}

export default App;