import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {sendRecoveryPasswordRequest} from "../../redux/passwordRecoveryReducer";


export const usePasswordRecoverLogic = () => {
    const [emailValue , setEmailValue] = useState('');
    

    const dispatch = useDispatch();
    let sendEmailValue = (e: React.FormEvent<HTMLInputElement>) =>{setEmailValue(e.currentTarget.value)};
    const sendRecoveryPassword = () =>{dispatch(sendRecoveryPasswordRequest(emailValue))};
    return{sendEmailValue, sendRecoveryPassword}
};