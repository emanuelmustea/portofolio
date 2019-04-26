import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import menu from "../../routes/menu";

export default class Header extends Component {
     state = { isToggled: false, isTouched: false };
    toggleMenu = () => {
        const newToggledState = !this.state.isToggled;
        this.setState( { isToggled: newToggledState, isTouched: true } );
    }
    render() {
        const toggleClass = this.state.isToggled ? "toggled" : "";
        const touchedClass = this.state.isTouched ? "touched" : "";
        const animationDelay = ( key ) => ( this.state.isToggled ? { animationDelay: `${ ( 100 * key ) + 120 }ms` } : {} );
        const menuItems = menu.map( ( { to, text }, key ) => <Link to={to} onClick={this.toggleMenu} className="menu-item" style={animationDelay( key )} key={key}>{text}</Link> );
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
