import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import logo from "../../assets/lab.svg";

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
                    <Link to="/about-me">
                        <button className="btn dark">
                            <span>FIND MORE ABOUT ME</span>
                        </button>
                    </Link>
                    <Link to="/portofolio">
                        <button className="btn dark">
                            <span>
                        MY CREATIONS</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
