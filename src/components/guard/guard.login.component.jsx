import React from 'react';
import './guard.login.css';
export const GuardLogin = props => {
    return (
        <div className='rec4'>
            <p id="emailGuard">Email ID</p>
            <div id="formBoxEmailGuard"></div>
            <p id="passGuard">Password</p>
            <div id="formBoxPassGuard"></div>
            <p id="forgotPassGuard">Forgot Password</p>
            <div id="logButtonGuard">Log In</div>
        </div>
    );
}