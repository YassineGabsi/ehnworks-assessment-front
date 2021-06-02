import React, { useState } from "react";
import "./Login.css";

function Login({ postLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        postLogin(email, password);

    };

    return (
        <div className="form-wrapper">
            <p>Create your Account</p>
            <form onSubmit={handleSubmit} style={{display: "grid"}}>
                <input value={email}
                       onChange={e => setEmail(e.target.value)}
                       className="form-input mt-4"
                       name="email"
                       required
                       placeholder="Email Address"
                       type="text"/>
                <input value={password}
                       onChange={e => setPassword(e.target.value)}
                       className="form-input mt-4"
                       name="password"
                       required
                       placeholder="Password" type="password"/>
                <button type="submit" className="form-button mt-4">LOGIN</button>
            </form>

        </div>
    );
}

export default Login;
