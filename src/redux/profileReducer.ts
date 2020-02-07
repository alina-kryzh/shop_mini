import {profileApi} from '../api/apiProfile'
import {Dispatch} from "redux";
import {isLoadingAC} from "./booleanReducer";

/*const LOADING = 'LOADING';*/
const IS_AUTH = 'IS_AUTH';
const NAME = 'NAME';

interface IState {
    name: string
    /*isLoading: boolean*/
    isAuth: boolean
}

interface IAction {
    type: /*typeof LOADING*/ | typeof IS_AUTH | typeof NAME
    /*isLoading: boolean*/
    name: string
    value: boolean
}

const initialState: IState = {
    /*isLoading: false,*/
    name: '',
    isAuth: true
};

export const reducerProfile = (state: IState = initialState, action: IAction): IState => {
    switch (action.type) {
        /*case LOADING: {
            return {
                ...state, isLoading: !state.isLoading
            }
        }*/
        case NAME: {
            return {
                ...state, name: action.name
            }
        }
        case IS_AUTH: {
            return {
                ...state, isAuth: action.value
            }
        }
        default: {
            return state
        }
    }
}

/*let isLoadingAC = () => ({type: LOADING});*/
let nameAC = (name: string) => ({type: NAME, name});
export let isAuthTrue = () => ({type: IS_AUTH, value: true});
export let isAuthFalse = () => ({type: IS_AUTH, value: false});

export const postProfileTC = (token: string | null) => async (dispatch: Dispatch) => {
    try {
        dispatch(isLoadingAC());
        let response = await profileApi.postProfile(token);
        localStorage.setItem('stringToken', response.data.token);
        dispatch(isAuthFalse());
        dispatch(nameAC(response.data.name))
    } catch (e) {
        console.log(e.response.data.error)
    }
    dispatch(isLoadingAC())
};

export const logoutTC = () =>  (dispatch: Dispatch) => {
    localStorage.setItem('stringToken', '');
    dispatch(isAuthTrue())
};

export default reducerProfile