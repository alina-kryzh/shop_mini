import { recoveryAPI } from './../api/apiRecovery';
// import {recoveryAPI} from '../api-recovery/api'
const ADD_RECOVERY = 'ADD_RECOVERY'
const SET_IS_TRUE = 'SET_IS_TRUE'


interface IState {
    error: string
}

interface IAction {
    type: typeof SET_IS_TRUE
    message: string
    isTrue:any,
    error:any
}
const initialState = {
    isTrue: false,
    error:''
  }


export const reducerPasswordRecovery = (state = initialState, action: IAction): IState =>
{
    switch (action.type) {
      case SET_IS_TRUE:
        return {
          ...state,
          ...action.error
        }
      default: return state
    }
  }

  export const setIsTrue = (error1:any) => ({ type: SET_IS_TRUE, error:error1 })
  export const sendRecoveryPasswordRequest = (email:any) => {
    return (dispatch:any) => {
      recoveryAPI.recovery(email)
        .then(data => {

          console.log(data)
        })
        .catch(error => {
          let error1 = error.response.data.error
          console.log(error1)
          dispatch(setIsTrue(error1))
          alert(error1)

        })
    }
  }


export default reducerPasswordRecovery