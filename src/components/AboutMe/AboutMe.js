import React from "react";
import "./AboutMe.css";

export function AboutMe() {
    return (
        <div className="about-me flex column grow-full">
            <div className="v-center">
                <div className="page-title">
                <div className="name">
                    <span className="normal">EMANUEL</span>, 21
                </div>
                <div className="avatar">
                 <img alt="" src="https://avatars1.githubusercontent.com/u/16580772" />
                </div>
                </div>
                <div className="heading">
                Hello there. If you are on this page probably you're interested to find out more things about me. Well, there isn't much to say. I'm <i>Emanuel Mustea</i>, aged 21, living in a beautiful Romanian city right in the heart of <i>Transylvania</i>, called <i>Cluj-Napoca</i>. But enough of my personal life.
                <br /><br />
                I'm also a web developer building nice websites since 2015. But probably you are not here to hear about my experience, and if you are let me introduce to you a friend of mine. It's called LinkedIn. 
                <br/><br/>
                You can still find me on social media by following the links bellow. 
                </div>
                <div class="buttons">
                    <a target="_new" className="btn-rounded icon-instagram" href="https://www.instagram.com/emanuelmustea/"></a>
                    <a target="_new" className="btn-rounded icon-facebook" href="https://www.facebook.com/emanuel.mustea.33"></a>
                    <a target="_new" className="btn-rounded icon-github" href="https://github.com/emanuelmustea">Github</a>
                    <a target="_new" className="btn-rounded icon-linkedin" href="https://ro.linkedin.com/in/emanuelmustea">LinkedIn</a>
                </div>
            </div>
        </div>
    );
}
