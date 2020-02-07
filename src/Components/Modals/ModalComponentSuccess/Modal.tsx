import React from "react";
import s from '../Component/Modal.module.css'

interface IProps {
    isShow: boolean
}

const Modal: React.FC<IProps> = ({children, isShow}) => {

    // let innerCloseModal = () => {
    //     //     closeModal()
    //     // }

    if (isShow) {
        return (
            <div className={s.showing}>
                <div className={s.modal}>
                    {children}
                </div>
            </div>);
    } else {
        return null
    }

};



export default Modal;