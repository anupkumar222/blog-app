import React from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import NoMatch from "./NoMatch"


function App() {
    return (
        <>
            <Header />
            
            <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NoMatch />} />
            </Routes>
            

        </>
    )
}

export default App;