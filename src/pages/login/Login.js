import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import "./Login.css";

function Login({postLogin}) {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        postLogin(email, password);
        history.push('/afterlogin')
    };

    const validateEmail = (emailAdress) => {
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return !!emailAdress.match(regexEmail);
    };

    const navigateToRegister = () => {
        history.push('/register');
    };

    return (
        <div className="form-wrapper">
            <p className="fw-bold">Login to your Account</p>
            <form onSubmit={handleSubmit} style={{display: "grid"}}>
                {email.length !== 0 && !validateEmail(email) ?
                    (<div className="error-input">Please provide a valid email</div>) : null}
                <input value={email}
                       onChange={e => setEmail(e.target.value)}
                       className="form-input mt-4"
                       name="email"
                       required
                       placeholder="Email Address"
                       type="text"/>
                {password.length !== 0 && password.length < 8 ?
                    (<div className="error-input mt-2">Please provide a valid Password ( min 8 characters )</div>) : null}
                <input value={password}
                       onChange={e => setPassword(e.target.value)}
                       className="form-input mt-4"
                       name="password"
                       required
                       placeholder="Password" type="password"/>
                <button type="submit" disabled={!validateEmail(email) || password.length < 8}
                        className="form-button mt-4">LOGIN
                </button>
                <div className="mt-3 fw-bold">No account yet ?
                    <span onClick={navigateToRegister}
                          style={{color: '#5886c5', cursor: 'pointer'}}>
                        Create one from here
                    </span>
                </div>
            </form>

        </div>
    );
}

export default Login;
