const LOADING = 'LOADING';
const ERROR = 'ERROR';
const AUTH_SUCCESS = 'AUTH_SUCCESS';

interface IInitialStateBolean {
    isLoading: boolean,
    error: string,
    success: boolean
}
export interface ILoadingAction {
    type: typeof LOADING,
}
export interface IErrorAction {
    type: typeof ERROR,
    error: string
}
export interface IAuthSuccessAction {
    type: typeof AUTH_SUCCESS,
    success: boolean
}
type IActions = ILoadingAction | IErrorAction | IAuthSuccessAction;

const initialState = {
    isLoading: false,
    error: '',
    success: false
};

const booleanReducer = (state: IInitialStateBolean = initialState, action: IActions): IInitialStateBolean => {
        switch (action.type) {
            case LOADING: {
                return {
                    ...state,
                    isLoading: !state.isLoading
                }
            }
            case ERROR: {
                return {
                    ...state,
                    error: action.error
                }
            }
            case AUTH_SUCCESS:
                return {
                    ...state,
                    success: action.success
                }
        }
        return state;
    };

export const isLoadingAC = (): ILoadingAction => {
    return {
        type: LOADING
    }
};

export const errorAC = (error: string): IErrorAction => ({type: ERROR, error});

export const isAuthSuccess = (success: boolean): IAuthSuccessAction => {
    return {type: AUTH_SUCCESS, success}
};

export default booleanReducer;