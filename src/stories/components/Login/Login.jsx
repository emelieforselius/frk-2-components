import React, { useState } from "react";
import User from "./User";
import Password from "./Password";

const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <h2>Login</h2>
            <User onUserChange={setUser}/>
            <Password onPasswordChange={setPassword}/>
        </div>
    )
}

export default Login;