import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {useEffect} from "react";
import {postProfileTC} from "../../redux/profileReducer";


export const  useProfileLogic = () => {
    let {isAuth,name} = useSelector((store: AppStateType) => store.profile);
    let token: string | null = localStorage.getItem('stringToken');
    let dispatch = useDispatch();
    useEffect(() => {dispatch(postProfileTC(token))}, []);
    return {isAuth, name, dispatch}
};