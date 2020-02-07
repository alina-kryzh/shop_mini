import React from "react";
import s from './Modal.module.css'

interface IProps {
    isShow: boolean
    closeModal: () => void

}

const Modal: React.FC<IProps> = ({children, isShow, closeModal}) => {


    if (!isShow) return null

    return (
        <div className={s.showing} >
            <div className={s.modal}>
                {children}
            </div>
        </div>);


};


export default Modal;