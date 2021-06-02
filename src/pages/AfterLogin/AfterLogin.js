import React, {useState} from "react";

function AfterLogin({name}) {
    return (
        <div className="form-wrapper">
            <p className="fw-bold">Hi {name}, Welcome to your admin account</p>
        </div>
    );
}

export default AfterLogin;
