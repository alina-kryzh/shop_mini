import React from 'react';
import s from './Password.module.css'
import {usePasswordRecoverLogic} from "./usePasswordRecoverLogic";



const PasswordRecover: React.FC = () => {
  const {sendEmailValue, sendRecoveryPassword} = usePasswordRecoverLogic();
  
  return (
    <div className={s.recover}>
        <h2>Forgot password?</h2>
        <input onChange = {sendEmailValue}></input>
        <button onClick = {sendRecoveryPassword}>Send request</button>
    </div>
  );
};

export default PasswordRecover;
