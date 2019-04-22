import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Homepage from "./Homepage/Homepage";

class App extends Component {
    render = () => (
        <div className="App flex column">
            <Homepage />
            <Header />
        </div>
    )
}

export default App;
