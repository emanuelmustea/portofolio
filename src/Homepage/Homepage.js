import React, { Component } from 'react';
import "./Homepage.css"

export default class Homepage extends Component{
    render(){
        return(<div className="flex column grow-full">
            <div className="v-center center">
                <img src="/lab.svg" width="56px" />
              <div className="logo text huge center">Emanuel Mustea</div>
            </div>
        </div>)
    }
}