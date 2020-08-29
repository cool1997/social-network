import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'

//этап 2 заменили на reducer

// const ADD_POST = 'ADD_POST'
// const UPDATE_NEW_POST_CHANGE = 'UPDATE_NEW_POST_CHANGE'
// const ADD_MESSAGE = 'ADD_MESSAGE'
// const UPDATE_NEW_MESSAGE_CHANGE = 'UPDATE_NEW_MESSAGE_CHANGE'


let store = {
  
  _state: {
    profileData:{
      postsData: [
        {id: 1, text: 'hi', likesCount: 2, },
        {id: 2, text: 'my second post', likesCount: 1, },
      ],

      newPostText: 'hello',
    },
    
    dialogsData: {
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

      newMessageText: '',
    },
  },

  _callSubscriber() {
    console.log('state changed')
  },

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  //этап 1 переделали в dispatch


  // addPost() {
  //   const newPost = {
  //     id: 5, text: this._state.profileData.newPostText, likesCount: 0, 
  //   };
  //   this._state.profileData.postsData.push(newPost);
  //   this._state.profileData.newPostText = '';
  //   this._callSubscriber(this._state)
  // },
  
  // updateNewPostChange(newText) {
  //   this._state.profileData.newPostText = newText;
  //   this._callSubscriber(this._state)
  // },
  
  // addMessage(messageText) {
  //   const newMessage = {
  //     id: 5, text: messageText, myMessage: true, 
  //   };
  //   this._state.dialogsData.messagesData.push(newMessage);
  //   this._callSubscriber(this._state)
  // },


  //этап 2 переделали на reducer


  dispatch(action) {
    
    this._state.profileData = profileReducer(this._state.profileData, action)
    this._state.dialogsData = dialogsReducer(this._state.dialogsData, action)

    this._callSubscriber(this._state);

    //этап 2 заменили на reducer
    // switch(action.type) {
    //   case ADD_POST : 
    //     const newPost = {
    //       id: 5, text: this._state.profileData.newPostText, likesCount: 0, 
    //     };
    //     this._state.profileData.postsData.push(newPost);
    //     this._state.profileData.newPostText = '';
    //     this._callSubscriber(this._state);
    //     break

    //   case UPDATE_NEW_POST_CHANGE :
    //     this._state.profileData.newPostText = action.payload;
    //     this._callSubscriber(this._state);
    //     break

    //   case ADD_MESSAGE : 
    //     const newMessage = {
    //       id: 5, text: this._state.dialogsData.newMessageText , myMessage: true, 
    //     };
    //     this._state.dialogsData.messagesData.push(newMessage);
    //     this._state.dialogsData.newMessageText = '';
    //     this._callSubscriber(this._state);
    //     break

    //   case UPDATE_NEW_MESSAGE_CHANGE :
    //     this._state.dialogsData.newMessageText = action.payload;
    //     this._callSubscriber(this._state);
    //     break
    //   default: 
    //     break
    // }
  }
}


export default store;