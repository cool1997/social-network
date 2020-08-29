import {usersApi} from '../api/api';


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


const initialState = {
  usersData: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
}


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW:
    case UNFOLLOW: {
      return {
        ...state,
        usersData: state.usersData.map((user) => {
          if(user.id === action.id) {
            return {...user, followed: action.payload}
          }
          return user;
        })
      }
    }
    case SET_USERS: {
      return {
        ...state,
        usersData: action.users,
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      }
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.payload,
      }
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.payload,
      }
    }

    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.payload 
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter(id => id != action.id)
      }
    }
    default :
      return state
  }
}


export const actionCreator = {
  follow: (id) => ({
    type: 'FOLLOW', 
    payload: true,
    id,
  }),
  unfollow: (id) => ({
    type: 'UNFOLLOW', 
    payload: false,
    id,
  }),

  setUsers: (users) => ({
    type: 'SET_USERS',
    users
  }),

  setCurrentPage: (page) => ({
    type: 'SET_CURRENT_PAGE',
    payload: page,
  }),

  setTotalUsersCount: (totalCount) => ({
    type: 'SET_TOTAL_USERS_COUNT',
    payload: totalCount,
  }),

  toggleIsFetching: (isFetching) => ({
    type: 'TOGGLE_IS_FETCHING',
    payload: isFetching,
  }),

  toggleIsFollowingProgress: (isFetching, id) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    payload: isFetching,
    id,
  }),
}


const {follow, unfollow, toggleIsFollowingProgress, toggleIsFetching, setUsers, setTotalUsersCount, setCurrentPage} = actionCreator;
const {getUsers, deleteUser, postUser} = usersApi


export const thunkCreator = {
  getUsers(page, pageSize) {
    return(dispatch) => {
      dispatch(toggleIsFetching(true))
      // dispatch(setCurrentPage(page))
      getUsers(page, pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
      },)
    }
  },

  updateUsers(page, pageSize) {
    return(dispatch) => {
      dispatch(toggleIsFetching(true))
      getUsers(page, pageSize).then(data => {
        dispatch(setCurrentPage(page))
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
      },)
    }
  },

  deleteUser(id) {
    return(dispatch) => {
      dispatch(toggleIsFollowingProgress(true, id))
      deleteUser(id).then(response => {
        dispatch(toggleIsFollowingProgress(false, id))
        if(response.data.resultCode === 0) {
          dispatch(unfollow(id))
      }},)
    }
  },

  postUser(id) {
    return(dispatch) => {
      dispatch(toggleIsFollowingProgress(true, id))
      postUser(id).then(response => {
        dispatch(toggleIsFollowingProgress(false, id))
        if(response.data.resultCode === 0) {
          dispatch(follow(id))
      }},)
    }
  },
}


export default reducer;