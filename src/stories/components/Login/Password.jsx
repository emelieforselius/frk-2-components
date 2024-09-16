import React from "react";

const Password = ({onPasswordChange}) => {

    const onPasswordComplete = (e) => {
        onPasswordChange(e.target.value);
    } 
    return(
        <div>
            Password
            <input type='password' onChange={onPasswordComplete}/>
        </div>
    )
}

export default Password;