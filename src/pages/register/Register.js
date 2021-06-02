import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import "./Register.css";

function Register({postRegister}) {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [confEmail, setConfEmail] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        postRegister(firstname, lastname, email, password, phone);

    };

    const validateEmail = (emailAdress) => {
        if (email !== confEmail && email !== '') {
            return false;
        }
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return !!emailAdress.match(regexEmail);
    };

    const validatePassword = () => {
        return (password === confPassword);
    };

    const navigateToLogin = () => {
        history.push('/login');
    };


    return (
        <div className="form-wrapper">
            <p className="fw-bold">Create your Account</p>
            <form onSubmit={handleSubmit} style={{display: "grid"}}>
                <input value={firstname}
                       onChange={e => setFirstName(e.target.value)}
                       className="form-input mt-4"
                       name="First Name"
                       required
                       placeholder="First Name"
                       type="text"/>

                <input value={lastname}
                       onChange={e => setLastName(e.target.value)}
                       className="form-input mt-4"
                       name="Last Name"
                       required
                       placeholder="Last Name"
                       type="text"/>

                <input value={phone}
                       onChange={e => setPhone(e.target.value)}
                       className="form-input mt-4"
                       name="Phone"
                       required
                       placeholder="Phone"
                       type="text"/>

                {email.length !== 0 && !validateEmail(email) ?
                    (<div className="error-input">Please provide a valid email</div>) : null}
                <input value={email}
                       onChange={e => setEmail(e.target.value)}
                       className="form-input mt-4"
                       name="email"
                       required
                       placeholder="Email Address"
                       type="text"/>
                <input value={confEmail}
                       onChange={e => setConfEmail(e.target.value)}
                       className="form-input mt-4"
                       name="conf email"
                       required
                       placeholder="Confirm Email"
                       type="text"/>
                {password.length !== 0 && password.length < 8 ?
                    (<div className="error-input mt-2">Please provide a valid Password  ( min 8 characters )</div>) : null}
                <input value={password}
                       onChange={e => setPassword(e.target.value)}
                       className="form-input mt-4"
                       name="password"
                       required
                       placeholder="Password" type="password"/>
                {!validatePassword() ?
                    (<div className="error-input mt-2">Passwords doesn't match</div>) : null}
                <input value={confPassword}
                       onChange={e => setConfPassword(e.target.value)}
                       className="form-input mt-4"
                       name="conf password"
                       required
                       placeholder="Confirm Password" type="password"/>
                <button type="submit" disabled={!validateEmail(email) || password.length < 8 || !validatePassword()}
                        className="form-button mt-4">CREATE  ACCOUNT
                </button>
                <div className="mt-3 fw-bold">Already have an account ?
                    <span onClick={navigateToLogin}
                          style={{color: '#5886c5', cursor: 'pointer'}}>
                        Login from here
                    </span>
                </div>
            </form>

        </div>
    );
}

export default Register;
