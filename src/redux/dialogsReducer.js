const ADD_MESSAGE = 'ADD_MESSAGE'


const initialState = {
  usersData: [
    {id: 1, name: 'Andrey', },
    {id: 2, name: 'Sveta', },
    {id: 3, name: 'Sasha', },
    {id: 4, name: 'Anya', },
    ],

  messagesData: [
    {id: 1, text: 'hi!!', myMessage: true,},
    {id: 2, text: 'hi! how are you?', myMessage: false,},
  ],
}


const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_MESSAGE : 
      const newMessage = {
        id: state.messagesData[state.messagesData.length - 1].id + 1, text: action.payload, myMessage: true, 
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      }

    default: 
      return state
  }
}


export const actionCreator = {
  addMessage: (text) => ({
    type: 'ADD_MESSAGE',
    payload: text,
  }),
}


export default dialogsReducer;