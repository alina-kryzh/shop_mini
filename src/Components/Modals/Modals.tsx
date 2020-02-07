import React from "react";
import ModalComponentSimple from "./ModalComponentSimple/ModalComponentSimple";
import ModalComponentQuestion from "./ModalComponentQuestion/ModalComponentQuestion";
import ModalComponentInput from "./ModalComponentInput/ModalComponentInput";
import ModalComponentMessage from "./ModalComponentMessage/ModalComponentMessage";
import s from "./Component/Modals.module.css"


const Modals: React.FC = () => {

    return (
        <div className={s.modal}>
            <ModalComponentSimple/>
            <ModalComponentQuestion/>
            <ModalComponentInput/>
            <ModalComponentMessage/>
        </div>);
};



export default Modals;