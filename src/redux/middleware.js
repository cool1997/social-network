import thunk from 'redux-thunk'
import {ADD_POST, Operation} from './profileReducer'


const {getAlert} = Operation


const forbidden = ['spam', 'php']

export const middleware = {
  forbiddenWordsMiddleware: ({dispatch}) => {
    return (next) => {
      return (action = {type: ''}) => {
        if (action.type === ADD_POST) {
          const found = forbidden.filter((word) => action.payload.includes(word))
          if(found.length) return dispatch(getAlert('you are a spammer'))
        }
        return next(action)
      }
    }
  }
}