import {abcApi} from '../api/api'


const ActionType = {
  ABC: 'ABC',

}


const initialState = {

}


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ActionType.ABC:
      return {
        ...state,
      }
    
    default :
      return state
  }
}


export const ActionCreator = {
  abc: (abc) => ({
      type: 'ABC', 
      payload: abc,
  }),
}


// const {abc} = ActionCreator
// const {abcGet} = abcApi


// export const thunkCreator = {
//   abc(abc) {
//     return(dispatch) => {
//       abcApi.abcGet().then(response => {
//         dispatch(ActionCreator.abc(abc))
//       })
//     }
//   }
// }

export const Operation = {
  abc: (abc) => (dispatch) => {
    return abcApi.abcGet(abc).then(response => {
      dispatch(ActionCreator.abc(response.abc))
    })
  },
}


export default reducer;