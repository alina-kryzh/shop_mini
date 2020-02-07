import React from 'react';
import s from './Profile.module.css'
import {logoutTC} from "../../redux/profileReducer";
import {Redirect} from "react-router";
import {useProfileLogic} from "./useProfileLogic";

const Profile: React.FC = () => {
    const {isAuth, name, dispatch} = useProfileLogic();
    if (isAuth) {return <Redirect to={'/login'}/>}

    return (
        <div className={s.profile}>
            <h1>{name}</h1>
            <button onClick={() => {dispatch(logoutTC())}}>Log out</button>
        </div>
    );
};

export default Profile;
