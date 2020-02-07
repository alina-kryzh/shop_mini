import React, {useState} from "react";
import Modal from "../Component/Modal";

const ModalComponentSimple: React.FC = () => {

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
                <span>Simple Modal</span>
                <button onClick={closeModal}>Close</button>
            </Modal>
            <button onClick={openModal}>show simple Modal</button>
        </div>);
};



export default ModalComponentSimple;