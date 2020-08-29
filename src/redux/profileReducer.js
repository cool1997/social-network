import {profileApi} from '../api/api'


export const ADD_POST = 'ADD_POST'
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'
const GET_ALERT = 'GET_ALERT'
const SAVE_PHOTO_SUCCESS = `SAVE_PHOTO_SUCCESS`
const SAVE_PROFILE_SUCCESS = `SAVE_PROFILE_SUCCESS`


const initialState = {
  postsData: [
    {id: 1, text: 'hi', likesCount: 2, },
    {id: 2, text: 'my second post', likesCount: 1, },
  ],
  userProfile: null,
  newPostText: 'hello',
  // newPostText: {newPostText: 'hello'},
  status: '',
  alert: null,
}


const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST : 
      const newPost = { 
        id: state.postsData[state.postsData.length - 1].id + 1, text: action.payload, likesCount: 0, 
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      }

    case SET_PROFILE :
      return {
        ...state,
        userProfile: action.payload,
      }

    case SET_STATUS :
      return {
        ...state,
        status: action.payload,
      }

    case GET_ALERT :
      return {
        ...state,
        alert: action.payload,
      }

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          photos: action.payload
        }
      }

    case SAVE_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: {
          ...action.payload
        }
      }

    default: 
      return state;
  }
}


export const Action = {
  addPost: (text) => ({
    type: 'ADD_POST',
    payload: text,
  }),

  setProfile: (userProfile) => ({
      type: 'SET_PROFILE',
      payload: userProfile,
  }),

  setStatus: (status) => ({
    type: 'SET_STATUS',
    payload: status,
  }),

  getAlert: (text) => ({
    type: 'GET_ALERT',
    payload: text,
  }),

  savePhotoSuccess: (photos) => ({
    type: `SAVE_PHOTO_SUCCESS`,
    payload: photos
  }),

  saveProfileSuccess: (profile) => ({
    type: `SAVE_PROFILE_SUCCESS`,
    payload: profile
  })
}


// const {getProfile, getStatus, putStatus, putPhoto} = profileApi


export const Operation = {
  getProfile: (id) => async (dispatch) => {
    const response = await profileApi.getProfile(id)
    dispatch(Action.setProfile(response.data))
  },

  getStatus: (id) => async (dispatch) => {
    const response = await profileApi.getStatus(id)
    dispatch(Action.setStatus(response.data))
  },

  putStatus: (status) => async (dispatch) => {
    const response = await profileApi.putStatus(status)
    if(response.data.resultCode === 0) {
      dispatch(Action.setStatus(status))
    }
  },

  getAlert: (text) => async (dispatch) => {
    dispatch(Action.getAlert(text))
    setTimeout(() => {
      dispatch(Action.getAlert(null))
    }, 3000)
  },

  savePhoto: (file) => async (dispatch) => {
    const response = await profileApi.putPhoto(file)
    if(response.data.resultCode === 0) {
      dispatch(Action.savePhotoSuccess(response.data.data.photos))
    }
  },

  saveProfile: (profile) => async (dispatch) => {
    const response = await profileApi.saveProfile(profile)
    if(response.data.resultCode === 0) {
      dispatch(Action.saveProfileSuccess(response.data.data))
    }
  }
}


export default profileReducer;