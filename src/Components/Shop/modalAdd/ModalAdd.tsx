import React, {useState} from "react";
import Modal from '../../Modals/Component/Modal';
import {
    addProductTC
} from './../../../redux/tableReducer'
import {useDispatch} from "react-redux";

const ModalAdd: React.FC = () => {
    let dispatch = useDispatch();

    let addProduct = () => {
        let newProduct = {
            product: {
                productName: productName,
                price: priceCost
            }
        }
        dispatch(addProductTC(newProduct))
        closeModal()
    }
    let [priceCost, setPriceCost] = useState(0)
    let setPriceCostValue = (e: React.FormEvent<HTMLInputElement>) => {
        setPriceCost(Number(e.currentTarget.value))
    }
    let [productName, setProductName] = useState('a')
    let productNameSet = (e: React.FormEvent<HTMLInputElement>) => {
        setProductName(e.currentTarget.value)
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
                <button onClick={closeModal}>close</button>
                <span>add new product:</span>
                <input onChange={productNameSet} placeholder='test product name'/>
                <input onChange={setPriceCostValue} placeholder='0'/>
                <button onClick={addProduct}>OK</button>
            </Modal>
            <button onClick={openModal}>add</button>

        </div>);
};


export default ModalAdd;