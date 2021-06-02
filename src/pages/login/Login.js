import React from "react";
import "./Login.css";

function Login() {
    return (
        <div className="form-wrapper">
            <p>Create your Account</p>
            <input className="form-input mt-4" placeholder="Email Address" type="text"/>
            <input className="form-input mt-4" placeholder="Password" type="text"/>
            <button className="form-button mt-4">LOGIN</button>
        </div>
    );
}

export default Login;
