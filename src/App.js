import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';

import React, {useState} from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
    const [name, setName] = useState("");

    const postLogin = (email, password) => {
        const login = new FormData();
        login.append('email', email);
        login.append('password', password);
        axios.post(`http://localhost:8000/api/login`, login)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    const goToLogin = () => {
        return (
            <Login postLogin={postLogin}/>
        );
    };
    return (
        <div className="app-wrapper align-items-center justify-content-center text-center d-flex">
            <BrowserRouter>
                <Switch>
                    <Route exact path='/login' component={goToLogin}/>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/' component={Login}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
