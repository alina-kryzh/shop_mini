import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {errorAC} from "../../redux/booleanReducer";
import {putLoginTC} from "../../redux/loginReducer";


export const useLoginLogic = () => {
    let [email, setLoginState] = useState('');
    let [password, setPasswordState] = useState('');
    let [rememberMe, setValueState] = useState(false);
    let error = useSelector((store: AppStateType) => store.boolean.error);
    let isAuth = useSelector((store: AppStateType) => store.profile.isAuth);
    let isLoading = useSelector((store: AppStateType) => store.boolean.isLoading);
    let dispatch = useDispatch();
    let validationEmail = (email: string) => {
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return reg.test(String(email).toLowerCase())
    };
    let sendData = () => {
        if (!validationEmail(email) || password.length < 7) {
            dispatch(errorAC('Email/Password введен не корректно'))
        } else {
            dispatch(putLoginTC(email, password, rememberMe))
        }
    };

    return {
        isAuth, error, isLoading, email,
        password, rememberMe, setLoginState,
        setPasswordState, setValueState, sendData
    }

};