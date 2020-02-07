import React from 'react';
import s from '../Registration/Registration.module.css';
import {NavLink, Redirect} from "react-router-dom";
import loading from "../Registration/svgImages/loader.svg";
import {useRegistrationLogic} from "./useRegistrationLogic";


const Registration: React.FC = () => {
    const {error, success, onSetEmail, onSetPassword,
        onSetRepeatPassword, onRegisterClick,
        isLoading} = useRegistrationLogic();

    if (success) return <Redirect to="/login"/>;

    return (
        <div className={s.registration}>
            <h2>Register</h2>
                <div className={s.email}>
                    <span>Email:</span>
                    <input type="text" onChange={onSetEmail}/>
                </div>
                <div className={s.password}>
                    <span >Password:</span>
                    <input type="password" onChange={onSetPassword}/>
                </div>
                <div className={s.repeatPassword}>
                    <span>Repeat password:</span>
                    <input type="password" onChange={onSetRepeatPassword}/>
                </div>
            <span className={s.sp}>{error}</span>
            {isLoading &&
            <span><img src={loading} alt=""/></span>
            }
            <button onClick={onRegisterClick} disabled={isLoading}>Register</button>
            <NavLink to='/login'><span>Sign in</span></NavLink>
        </div>
    );
};


export default Registration;