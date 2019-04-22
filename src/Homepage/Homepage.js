import React from "react";
import "./Homepage.css";
import logo from "../assets/lab.svg";

export default function Homepage() {
    return (
        <div className="homepage flex column grow-full">
            <div className="v-center center">
                <img src={logo} className="logo img" width="56px" alt="" />
                <div className="logo text huge center">Emanuel Mustea</div>
                <div className="heading">
                A young, passionate, involved into the world of JavaScript.
                </div>
                <div className="bottom-buttons">
                    <button className="btn dark">
                        <span>FIND MORE ABOUT ME</span>
                    </button>
                    <button className="btn dark">
                        <span>
                        MY CREATIONS</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
