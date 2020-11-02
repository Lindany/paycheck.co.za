import React, { Component } from 'react';
import './LandingPage.css';
import logo from '../images/logos/paycheck-logo.png';
import hero from '../images/hero-1.png';
import $ from 'jquery'

class componentName extends Component {
    viewMenu = () =>{
        $(".inner").addClass("inner-hover");
        $(".nav-li").slideDown(500);
        console.log("Hello ===")
    }

    hideMenu = () =>{
        $(".inner").removeClass("inner-hover");
        $(".nav-li").slideUp(500);
    }

    render () {
        return (
            <div class="outer">
                    <div class="prod-logo" onMouseMove={()=>{this.viewMenu();}}>
                    <img src={logo} class="prod-img" alt="icon"/>
                    <ul class="main-nav">
                        <li class="nav-li"><a href="#">Why Paycheck</a></li>
                        <li class="nav-li"><a href="#">The Difference</a></li>
                        <li class="nav-li"><a href="#">Refer my Employer</a></li>
                        <li class="nav-li"><a href="#">Contact Us</a></li>
                        <li class="nav-li"><a href="#">Sign-in</a></li>
                  </ul>
                </div>
                <div class="inner" onMouseMove={()=>{this.hideMenu();}}>
                    <div class="prod-left">
                        <h3 class="prod-head"><span styles={"color:#0f457f"}>Welcome To </span>Paycheck</h3>
                        <h3 class="prod-head-sub">Better financial wellness benefits everyone. If your
                            company wants to see an increase in productivity,
                            motivation and retention, come speak to us.</h3>
                    </div>
                    <div class="prod-right">
                        <img src={hero} class="prod-human-img" alt="prod"/>
                    </div>
                </div>
            </div>            
        )
    }
}

export default componentName