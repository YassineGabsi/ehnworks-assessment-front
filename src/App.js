import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import React from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
function App() {
  return (
    <div className="app-wrapper align-items-center justify-content-center text-center d-flex">
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/' component={Login}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
