import React from "react";
import s from "../Component/Modals.module.css"


const Button: React.FC = ({children}) => {

    return (
        <div className={s.showing}>
            <button>{children}</button>
        </div>)
};

export default Button;