import React, { useState } from "react";
import User from "./User";
import Password from "./Password";
import Button from "./Button";
import styles from './Login.module.css';

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <User onUserChange={setUser} />
      <Password onPasswordChange={setPassword} />
      <Button />
    </div>
  );
};

export default Login;
