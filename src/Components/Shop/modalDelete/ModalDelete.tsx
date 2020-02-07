import React, {useState} from "react";
import Modal from '../../Modals/Component/Modal';
import {deleteProductTC} from "../../../redux/tableReducer";
import {useDispatch} from "react-redux";
interface IProps {
    id:string | undefined
}


    const ModalDelete: React.FC<IProps> = (props:IProps) => {
    let dispatch = useDispatch();
    debugger
    let deleteProduct = (id: string ) => {
        dispatch(deleteProductTC(id))
        console.log(id)
        closeModal()
    }


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
                    <span>are you sure</span>
                    <div>
                        <button onClick={() => {deleteProduct(String(props.id))}}>Yes</button>
                        <button onClick={closeModal}>No</button>
                    </div>
                </Modal>
                <button onClick={openModal}>delete?</button>
            </div>);
    };





export default ModalDelete;
