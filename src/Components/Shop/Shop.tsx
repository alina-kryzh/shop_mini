import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {deleteProductTC, getProductTC, setProductInCartAC, updateProductTC} from "../../redux/tableReducer";
import s from "./Shop.module.css"
import ModalAdd from "./modalAdd/ModalAdd";
import {NavLink} from "react-router-dom";
import ModalDelete from "./modalDelete/ModalDelete";
import ModalBasket from './ModalBasket'

function Shop() {

    // let isAuth = useSelector((store: AppStateType) => store.profile.isAuth) //if there is not authentication the buttons are disabled
    let products = useSelector((store: AppStateType) => store.shop.products)
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductTC())
    }, [])


    let updateProduct = (id: string | undefined) => {
        let updateProduct = {
            product: {
                id: id,
                productName: 'MegaTrackGig',
                price: 3000,
            }
        }
        dispatch(updateProductTC(updateProduct))
    }

    let deleteProduct = (id: string | undefined) => {
        dispatch(deleteProductTC(id || ''))
    }

    let addInToCart = (id: string | undefined, productName: string, price: number) => {
        let product = {
            id: id,
            productName: productName,
            price: price,
            value: false
        }
        dispatch(setProductInCartAC(product))
    }

    let tableProducts = products.map(p => {


        return (
            <div key={p.id} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{width: '55%'}}>{p.productName}</div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '25%'}}>
                    <div>{p.price}</div>
                </div>
                <div style={{width: '20%'}}>
                    <button onClick={() => updateProduct(p.id)}>update</button>
                    <button > <ModalDelete id={p.id}/></button>
                    <button onClick={() => addInToCart(p.id, p.productName, p.price)}>add to cart</button>
                </div>
            </div>
        )
    })

    // @ts-ignore
    return (
        <div>

            <div style={{textAlign: 'center'}}>table</div>
            <div className={s.tableHeader}>
                <div style={{width: '55%'}}>product</div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '30%'}}>
                    <div>price.</div>
                    <div>
                        <div>
                            <button>/\</button>
                        </div>
                        <div>
                            <button>\/</button>
                        </div>
                    </div>
                </div>
                <div style={{width: '15%'}}>

                        <ModalAdd/>
                        <ModalBasket/>



                </div>
            </div>
            <div className={s.tableBody}>
                {tableProducts}
            </div>

            <NavLink to='/basket'>basket</NavLink>
        </div>
    );
};

export default Shop
