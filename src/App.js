import './App.css';
import {BrowserRouter, Switch, Route, useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import React, {useState} from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AfterLogin from "./pages/AfterLogin/AfterLogin";

function App() {
    const history = useHistory();
    const [name, setName] = useState("");
    const MySwal = withReactContent(Swal);

    const postLogin = (email, password) => {
        const login = new FormData();
        login.append('email', email);
        login.append('password', password);
        axios.post(`http://localhost:8000/api/login`, login)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                setName(res.data.fname + ' ' + res.data.lname);
            })
            .catch(error => {
                console.log(error);
                MySwal.fire({
                    icon: 'error',
                    title: <p>Oops, an error occured</p>,
                    text: 'Please provide the right email and password, or create another account',
                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: false,
                    confirmButtonText: 'Create Account',
                    cancelButtonText: 'Close',
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = '/register'
                    }
                })
            });
    };

    const postRegister = (firstname, lastname, email, password, phone) => {
        const register = new FormData();
        register.append('email', email);
        register.append('password', password);
        register.append('fname', firstname);
        register.append('lname', lastname);
        register.append('phone', phone);
        axios.post(`http://localhost:8000/api/register`, register)
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                MySwal.fire({
                    icon: 'error',
                    title: <p>Oops, an error occured</p>,
                    text: 'Please provide valid informations',
                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: false,
                    confirmButtonText: 'Login',
                    cancelButtonText: 'Close',
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = '/login'
                    }
                })
            });
    };

    const navigateToComp = (location) => {
        console.log(history);
        history.push(location)
    };

    const goToLogin = () => {
        return (
            <Login postLogin={postLogin}/>
        );
    };

    const goToRegister = () => {
        return (
            <Register postRegister={postRegister}/>
        );
    };

    const goToAfterLogin = () => {
        return (
            <AfterLogin name={name}/>
        );
    };
    return (
        <div className="app-wrapper align-items-center justify-content-center text-center d-flex">
            <BrowserRouter>
                <Switch>
                    <Route exact path='/login' component={goToLogin}/>
                    <Route exact path='/register' component={goToRegister}/>
                    <Route exact path='/afterlogin' component={goToAfterLogin}/>
                    <Route exact path='/' component={Login}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
