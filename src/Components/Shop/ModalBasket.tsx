import React, {useState} from "react";
import Modal from './../Modals/Component/Modal'
// import {deleteProductTC} from "../../../redux/tableReducer";
// import {useDispatch} from "react-redux";
import Basket from "./Basket";
import {NavLink} from "react-router-dom";
// interface IProps {
//     id:string | undefined
// }


const ModalDelete: React.FC = () => {
    // let dispatch = useDispatch();
    // debugger
    // let deleteProduct = (id: string ) => {
    //     dispatch(deleteProductTC(id))
    //     console.log(id)
    //     closeModal()
    // }


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
                <span>Basket</span>
                <NavLink to='/basket'>basket</NavLink>
                <div>
                    <button onClick= {closeModal}>Yes</button>
                    <button onClick={closeModal}>No</button>
                </div>
            </Modal>
            <button onClick={openModal}>Basket</button>
        </div>);
};





export default ModalDelete;
