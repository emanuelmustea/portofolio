import React, { Component } from 'react';
import "./Header.css"

export default class Header extends Component{
    constructor(){
        super();
        this.state={isToggled:false}
        this.menu = [
            {link: "/home", text: "Home"},
            {link: "/about-me", text: "About Me"},
            {link: "/portofolio", text:"Portofolio"},
            {link: "/contact", text:"Contact"}
        ]
    }
    toggleMenu = () =>{
        const newToggledState = !this.state.isToggled
        this.setState({isToggled: newToggledState});
    }
    render(){
        const toggleClass = this.state.isToggled ? "toggled" : "";
        const animationDelay = (key) => this.state.isToggled ? {animationDelay: 122*key + "ms"} : {};
        const menuItems = this.menu.map((element, key)=> <div className="menu-item" style={animationDelay(key)} key={key}>{element.text}</div>) 
        return (<header className={toggleClass}>
            <div className="background flex column">
                {menuItems}
            </div>
            <div className="menu-icon" onClick={this.toggleMenu}>
            <i className="menu-bar"></i>
            <i className="menu-bar"></i>
            <i className="menu-bar"></i>
            </div>
        </header>)
    }
}