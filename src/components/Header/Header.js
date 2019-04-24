import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends Component {
    constructor() {
        super();
        this.state = { isToggled: false, isTouched: false };
        this.menu = [
            { to: "/home", text: "Home" },
            { to: "/about-me", text: "About Me" },
            { to: "/portofolio", text: "Portofolio" },
            { to: "/contact", text: "Contact" },
        ];
    }
    toggleMenu = () => {
        const newToggledState = !this.state.isToggled;
        this.setState( { isToggled: newToggledState, isTouched: true } );
    }
    render() {
        const toggleClass = this.state.isToggled ? "toggled" : "";
        const touchedClass = this.state.isTouched ? "touched" : "";
        const animationDelay = ( key ) => ( this.state.isToggled ? { animationDelay: `${ ( 100 * key ) + 120 }ms` } : {} );
        const menuItems = this.menu.map( ( { to, text }, key ) => <Link to={to} onClick={this.toggleMenu} className="menu-item" style={animationDelay( key )} key={key}>{text}</Link> );
        return ( <header className={`${ toggleClass } ${ touchedClass }`}>
            <div className="background flex column">
                {menuItems}
            </div>
            <div className="menu-icon" onClick={this.toggleMenu}>
                <i className="menu-bar"></i>
                <i className="menu-bar"></i>
                <i className="menu-bar"></i>
            </div>
        </header> );
    }
}
