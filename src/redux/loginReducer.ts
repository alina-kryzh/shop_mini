import {loginApi} from '../api/apiLogin'
import {Dispatch} from "redux";
import {isAuthFalse} from './profileReducer';
import {errorAC, isLoadingAC} from "./booleanReducer";

/*const ERROR = 'ERROR';*/
/*const LOADING = 'LOADING';*/

interface IState {
    /*error: string*/
    /*isLoading: boolean*/
}

interface IAction {
   /* type: typeof ERROR | typeof LOADING
    error: string
    isLoading: boolean*/
}


const initialState: IState = {
   /* error: '',*/
    /*isLoading: false*/
};

const reducerLogin = (state: IState = initialState, action: IAction): IState => {
    // switch (action.type) {
    //     case ERROR: {
    //         return {
    //             ...state, error: action.error
    //         }
    //     }
    //     case LOADING: {
    //         return {
    //             ...state, isLoading: !state.isLoading
    //         }
    //     }
    //     default: {
            return state
    //     }
    // }
};

/*export let errorLoginAC = (error: string) => ({type: ERROR, error});*/
/*let isLoginAC = () => ({type: LOADING});*/

export const putLoginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
    try {
        dispatch(isLoadingAC());
        let response = await loginApi.putLogin(email, password, rememberMe);
        if (response.data.rememberMe) {
            localStorage.setItem('stringToken', response.data.token)
        }
        dispatch(isAuthFalse())
    } catch (e) {
        dispatch(errorAC(e.response.data.error))
    }
    dispatch(isLoadingAC())
};

export default reducerLogin