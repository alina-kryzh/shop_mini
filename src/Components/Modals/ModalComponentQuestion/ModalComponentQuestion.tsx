import React, {useState} from "react";
import Modal from "../Component/Modal";

const ModalComponentQuestion: React.FC = () => {

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
                <span>question Modal</span>
                <div>
                    <button onClick={closeModal}>Yes</button>
                    <button onClick={closeModal}>No</button>
                </div>
            </Modal>
            <button onClick={openModal}>show question Modal</button>No
        </div>);
};



export default ModalComponentQuestion;