import React, { Component } from "react";
import "./Contact.css";

export class Contact extends Component {
    state = {hasError: false, requestDone: false, fromInput: '', messageInput: ''};

    sendMail = () => {
        const {fromInput: from, messageInput: message} = this.state;
        if(!from || !message){
            return this.setState({hasError: true, requestDone: false});
        }
        const options = {
            method: 'POST',
            body: JSON.stringify({from, message}),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }
        fetch('https://us-central1-static-website-test-999999.cloudfunctions.net/emanuelmustea_portofolio/send-mail/', options)
        .then(res => {
            if(!res.ok) {
                return this.setState({hasError: true});
            }
            return this.setState({hasError: false, messageInput: "", fromInput: "" })
        })
        .catch(() => this.setState({hasError: true}) )
        .finally(() => this.setState({requestDone: true}))
    }

    handleFromChange = (event) => {
        this.setState({fromInput: event.target.value})
    }

    handleMessageChange = (event) => {
        this.setState({messageInput: event.target.value})
    }

    render() {
        const { hasError, requestDone, fromInput, messageInput } = this.state;
        return (
            <div className="contact flex column grow-full">
                <div className="v-center">
                    <div className="page-title">
                    <div className="name">
                        <span className="normal">Get in touch</span>
                    </div>
                    </div>
                    <div className="heading">
                    Got a cool project in mind, and think I can help you with it? Or maybe you just want to know more things about me. Drop a message, and I'll be happy to help you.
                    </div>
                    {hasError && requestDone && <div className="error">We can't send your message right now. Please try again later!</div>}
                    {hasError && !requestDone && <div className="error">Both inputs must be filled in order to send your message.</div>}
                    {!hasError && requestDone && <div className="success">Your message was successfully sent!</div>}
                    <div className="input-area">
                        <input value={fromInput} onChange={this.handleFromChange} placeholder="your email..." />
                        <textarea value={messageInput} onChange={this.handleMessageChange} placeholder="your message..." rows="6"></textarea>
                        <input type="submit" value="Send" onClick={this.sendMail} />
                    </div>
                </div>
            </div>
        );
    }
}
