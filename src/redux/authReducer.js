import {authApi} from '../api/api'
import { stopSubmit } from 'redux-form'


const UPDATE_USER_DATA = 'UPDATE_USER_DATA'


const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
}


const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    
    default :
      return state
  }
}


export const actionCreator = {
  updateUserData: (id, email, login, isAuth) => ({
    type: 'UPDATE_USER_DATA', 
    payload: {id, email, login, isAuth},
  }),
}


const {updateUserData} = actionCreator
const {getMe, postLogin, deleteLogin} = authApi


export const thunkCreator = {
  getUserData() {
    return(dispatch) => {
      return getMe().then(response => {
        if(response.data.resultCode === 0) {
          const {id, email, login} = response.data.data
          dispatch(updateUserData(id, email, login, true))
        }
      })
    }
  },

  login(email, password, rememberMe) {
    return(dispatch) => {
      postLogin(email, password, rememberMe).then(response => {
        if(response.data.resultCode === 0) {
          dispatch(thunkCreator.getUserData())
        } else {
          dispatch(stopSubmit('login', {_error: response.data.messages[0] || 'some error'}))
        }
      })
    }
  },

  logout() {
    return(dispatch) => {
      deleteLogin().then(response => {
        if(response.data.resultCode === 0) {
          dispatch(updateUserData(null, null, null, false))
        }
      })
    }
  }
}


export default authReducer;