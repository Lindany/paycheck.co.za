import React, { Component } from 'react';
import './Login.css';
import Dashboard from './Dashboard';

class componentName extends Component {
    
    render () {
        let imgName = "https://banner2.kisspng.com/20180320/stq/kisspng-payroll-computer-icons-human-resources-tax-busines-tax-vector-drawing-5ab0ee6108da66.4067552415215448010363.jpg"
        return (
            
            <form >
            <div class="imgcontainer">
                <img src={imgName} alt="Avatar" class="avatar"/>
               <div> Welcome to Paychek</div>
            </div>

            <div class="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>
                    
                <button onClick={()=>{<Dashboard/>}}>Login</button>
                <label>
                <input type="checkbox" checked="checked" name="remember"/> Remember me
                </label>
            </div>

            <div class="container" styles={"background-color:#f1f1f1"}>
                <button type="button" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <a href="#">password?</a></span>
            </div>
            </form>
        )
    }
}

export default componentName