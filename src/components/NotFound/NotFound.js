import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import menu from "../../routes/menu";

export default function NotFound() {
    const menuLinks = menu.map( ( { to, text }, key ) => <Link to={to} key={key}>{text}</Link> );
    return (
        <div className="not-found flex column grow-full">
            <div className="v-center center">
                <div className="header">This is not the page you are looking for</div>
                <div className="big-title">404</div>
                <div className="menu">{menuLinks}</div>
            </div>
        </div>
    );
}
