import {Dispatch} from "redux";
import {shopApi} from "../api/apiShop";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./store";

const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_PRODUCTS_IN_CART = 'SET_PRODUCTS_IN_CART';
const DELETE_PRODUCTS_IN_CART = 'DELETE_PRODUCTS_IN_CART';
const CHANGE_VALUE_CHECKBOX = 'CHANGE_VALUE_CHECKBOX';
const BUY_PRODUCTS_IN_CART = 'BUY_PRODUCTS_IN_CART'

interface IProduct {
    id?: string
    productName: string
    price: number
    value?: boolean
}

export interface INewAndUpdateProduct {
    product: {
        id?: string
        productName: string
        price: number
    }
}

interface IState {
    products: IProduct[]
    cart: IProduct[]
}

interface IActionSetProducts {
    type: typeof SET_PRODUCTS
    products: IProduct[]
}

interface IActionSetProductsInCart {
    type: typeof SET_PRODUCTS_IN_CART
    cart: IProduct
}

interface IActionDeleteProductsInCart {
    type: typeof DELETE_PRODUCTS_IN_CART
}
interface IActionBuyProductsInCart {
    type: typeof BUY_PRODUCTS_IN_CART
    id: number | undefined
}

interface IActionChangeValueProductInCart {
    type: typeof CHANGE_VALUE_CHECKBOX
    index: number
}


type IActions = IActionSetProducts | IActionSetProductsInCart | IActionDeleteProductsInCart | IActionChangeValueProductInCart | IActionBuyProductsInCart



const initialState: IState = {
    products: [],
    cart: []
}

const tableReducer = (state: IState = initialState, action: IActions): IState => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state, products: action.products
            }
        }
        case SET_PRODUCTS_IN_CART: {
            return {
                ...state, cart: [...state.cart, action.cart]
            }
        }
        case DELETE_PRODUCTS_IN_CART: {
            return {
                ...state, cart: [...state.cart.filter(p => !p.value)]
            }
        }
        case BUY_PRODUCTS_IN_CART: {
            return {
                ...state, cart: [...state.cart.filter(p => !p.value)]
            }
        }
        case CHANGE_VALUE_CHECKBOX: {
            return {
                ...state, cart: state.cart.map((p, index) => {
                    debugger
                    if (index === action.index) {
                        return {...p, value: !p.value}
                    } else {
                        return p
                    }
                })
            }
        }
    }
    return state;
};

export const deleteProductInCartAC = (): IActions => {
    return {
        type: DELETE_PRODUCTS_IN_CART
    }
};
export const buyProductInCartAC = (id:number | undefined): IActions => {
    return {
        type: BUY_PRODUCTS_IN_CART,id
    }
};

const setProductAC = (products: IProduct[]): IActions => {
    return {
        type: SET_PRODUCTS, products
    }
};

export const setProductInCartAC = (cart: IProduct): IActions => {
    return {
        type: SET_PRODUCTS_IN_CART, cart
    }
};

export const changeValueProductInCart = (index: number): IActions => {
    return {
        type: CHANGE_VALUE_CHECKBOX, index
    }
};


export const getProductTC = () => async (dispatch: Dispatch) => {
    let response = await shopApi.getProducts();
    if (response.data.products.length >= 1) {
        dispatch(setProductAC(response.data.products))
    }
}

export const addProductTC = (newProduct: INewAndUpdateProduct) => async (dispatch: ThunkDispatch<AppStateType, {}, IActions>) => {
    try {
        await shopApi.postProducts(newProduct);
        await dispatch(getProductTC())
    } catch (e) {
        alert(e.response ? e.response.data.error : e.message)
    }
}

export const deleteProductTC = (id: string) => async (dispatch: ThunkDispatch<AppStateType, {}, IActions>) => {
    try {
        await shopApi.deleteProducts(String(id));
        await dispatch(getProductTC())
    } catch (e) {
        alert(e.response ? e.response.data.error : e.message)
    }
}
export const buyProductTC = (id:number | undefined) => async (dispatch: ThunkDispatch<AppStateType, {}, IActions>) => {
    try {
        await shopApi.buyProducts(String(id));
        debugger
        await dispatch(buyProductInCartAC(id))

    } catch (e) {
        alert(e.response ? e.response.data.error : e.message)
    }
}

export const updateProductTC = (updateProduct: INewAndUpdateProduct) => async (dispatch: ThunkDispatch<AppStateType, {}, IActions>) => {
    try {
        await shopApi.putProducts(updateProduct);
        await dispatch(getProductTC())
    } catch (e) {
        alert(e.response ? e.response.data.error : e.message)
    }
}

export default tableReducer;