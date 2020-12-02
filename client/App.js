import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Products from "./Products"


function App() {
    return(
        <div>
            <Link to="home">Home</Link>
            <Link to="about">About</Link>
            <Link to="products">Products</Link>
            <Switch>
                <Route exact path="home">
                    <Home />
                </Route>
                <Route path="about">
                    <About />
                </Route>
                <Route path="products">
                    <Products />
                </Route>
            </Switch>
        </div>
    )
}
export default App