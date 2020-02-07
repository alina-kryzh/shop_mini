import React from 'react';
import s from './Login.module.css';
import {NavLink, Redirect} from "react-router-dom";
import loading from '../Registration/svgImages/loader.svg';
import {useLoginLogic} from "./useLoginLogic";

const Login: React.FC = () => {
    const {
        isAuth, error, isLoading, email, password,
        rememberMe, setLoginState, setPasswordState,
        setValueState, sendData} = useLoginLogic();


    if (!isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={s.login}>
            <h2>Sign in</h2>
            <span className={s.error}>{error}</span>
            <div className={s.email}>
                <span>Email:</span>
                <input value={email} onChange={(e) => setLoginState(e.currentTarget.value)}/>
            </div>
            <div>
                <span>Password:</span>
                <input value={password} onChange={(e) => setPasswordState(e.target.value)} type={'password'}/>
            </div>


            <NavLink to={'/password_recover'}><span>Forgot password?</span></NavLink>
            <div className={s.rememberMe}>
                <input type={'checkbox'} placeholder={'Remember Me'} onChange={() => setValueState(!rememberMe)} checked={rememberMe}/>
                <span>Remember me</span>
            </div>
            <button onClick={sendData} disabled={isLoading}>Sign In</button>
            {/*<NavLink to={'/registration'}><span>Registration</span></NavLink>*/}
            {isLoading &&
            <img src={loading}/>
            }
        </div>
    );
};

export default Login
