import {thunkCreator as authThunkCreator} from './authReducer'


const {getUserData} = authThunkCreator


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


const initialState = {
  initialized: false,
}


const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      }
    
    default :
      return state
  }
}


export const actionCreator = {
  initializedSuccess: () => ({
      type: 'INITIALIZED_SUCCESS',
  }),
}


const {initializedSuccess} = actionCreator


export const thunkCreator = {
  initializeApp() {
    return(dispatch) => {
      let userData = dispatch(getUserData())
      Promise.all([userData])
        .then(() => {
          dispatch(initializedSuccess())
        })
    }
  }
}


export default appReducer;