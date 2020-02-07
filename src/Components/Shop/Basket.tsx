import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {AppStateType} from "../../redux/store";
import s from "./Shop.module.css";
import {NavLink} from "react-router-dom";
import {
    buyProductInCartAC, buyProductTC,
    changeValueProductInCart,
    deleteProductInCartAC,
    deleteProductTC
} from "../../redux/tableReducer";

const Basket: React.FC = () => {

    let cart = useSelector((store: AppStateType) => store.shop.cart)
    let dispatch = useDispatch();

    let deleteProducts = () => {
        debugger
        dispatch(deleteProductInCartAC())
    }
    let buyProduct = (id: number | undefined) => {
        dispatch(buyProductTC(id ))
    }

    let checkProduct = (index: number) => {
        dispatch(changeValueProductInCart(index))
    }

    let tableProducts = cart.map((p, index) => {
        return (
            <div key={index} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{width: '55%'}}>{p.productName}</div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '25%'}}>
                    <div>{p.price}</div>
                </div>
                <div style={{width: '20%'}}>
                    <input type={'checkbox'} onChange={() => checkProduct(index)} checked={p.value}/>
                    <button onClick={() => {buyProduct(index)}}>buy</button>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <span>table</span>
            </div>
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
                    <button onClick={deleteProducts}>delete</button>
                </div>
            </div>
            <div className={s.tableBody}>
                {tableProducts}
            </div>

            <NavLink to={'/shop'}>Shop</NavLink>
        </div>);
};


export default Basket;