import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Layout from "./Layout";

function App() {
    return ( <div className="App flex column">
        <Layout />
        <Header />
    </div> );
}

export default App;
