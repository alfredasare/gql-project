import React from 'react';
import './App.css';
import {GlobalStyle} from "./utils/Global";
import ScrollToTop from "./utils/scroll-to-top";
import {Switch, Route} from "react-router-dom";
import Home from "./pages/home/home.component";
import NavBar from "./components/navbar/navbar.component";

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            {/*<ScrollToTop/>*/}
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </div>
    );
}

export default App;
