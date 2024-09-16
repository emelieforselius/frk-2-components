import React from "react";
import styles from './Login.module.css';

const Password = ({onPasswordChange}) => {

    const onPasswordComplete = (e) => {
        onPasswordChange(e.target.value);
    } 
    return(
        <div className={styles.passwordContainer}>
            Password
            <input type='password' onChange={onPasswordComplete}/>
        </div>
    )
}

export default Password;