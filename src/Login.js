import React from 'react';
import "./Login.css";
import { loginUrl } from './spotify';

function Login() {

    return (
        <div className="login">
            <h1>I m the login Page</h1>

            {/*Spotify Logo*/}
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />

            {/*Login with Spotify button*/}
            <a href={loginUrl}>Login with Spotify</a>


        </div>
    )
}

export default Login
