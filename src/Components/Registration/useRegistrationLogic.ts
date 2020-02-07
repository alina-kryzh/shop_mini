import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {errorAC} from "../../redux/booleanReducer";
import {sendRegistrationRequest} from "../../redux/registrationReducer";


export  const useRegistrationLogic = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const dispatch = useDispatch();
    const {error, isLoading, success} = useSelector((store: AppStateType) => {return store.boolean});
    useEffect(() => {}, [error]);
    useEffect(() => {}, [isLoading]);
    const onSetEmail = (e: React.FormEvent<HTMLInputElement>): void => {
        setEmail(e.currentTarget.value);
        dispatch(errorAC(``));
    };
    const onSetPassword = (e: React.FormEvent<HTMLInputElement>): void => {
        setPassword(e.currentTarget.value);
        dispatch(errorAC(``));
    };
    const onSetRepeatPassword = (e: React.FormEvent<HTMLInputElement>): void => {
        setRepeatPassword(e.currentTarget.value);
        dispatch(errorAC(``));
    };
    const validate = (email: string) => {
        const expression = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,7}$/i;
        return expression.test(String(email).toLowerCase())
    };
    const onRegisterClick = (): void => {
        if (repeatPassword !== password) {
            dispatch(errorAC(`Passwords don't match`))
        } else if (password.length <= 7) {
            dispatch(errorAC(`Password must contain minimum 8 symbols`))
        } else if (!validate(email)) {
            dispatch(errorAC(`Email is not valid`))
        } else {
            dispatch(sendRegistrationRequest(email, password))
        }
    };
    return {
        error, success, onSetEmail,
        onSetPassword, onSetRepeatPassword,
        onRegisterClick, isLoading
    }
};