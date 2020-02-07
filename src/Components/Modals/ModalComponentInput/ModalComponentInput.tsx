import React, {useState} from "react";
import Modal from "../Component/Modal";

const ModalComponentInput: React.FC = () => {

    let [isShow, setShow] = useState(false)

    let closeModal = () => {
        setShow(false)
    }

    let openModal = () => {
        setShow(true)
    }

    return (
        <div>
            <Modal isShow={isShow} closeModal={closeModal}>
                <span>Question Modal</span>
                <input/>
                <input/>
                <input/>
                <button onClick={closeModal}>OK</button>
            </Modal>
            <button onClick={openModal}>show input Modal</button>test answer--
        </div>);
};



export default ModalComponentInput;