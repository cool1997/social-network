import { createSelector } from "reselect"

const usersSelectors = {
  getUsersDataSelector: (state) => {
    return state.users.usersData
  },

  getPageSize: (state) => {
    return state.users.pageSize
  },

  getCurrentPage: (state) => {
    return state.users.currentPage
  },

  getIsFetching: (state) => {
    return state.users.isFetching
  },
}


const {getUsersDataSelector} = usersSelectors


export const getUsersData = createSelector(getUsersDataSelector, (users) => {
  return users.filter(u => true)
})


export default usersSelectors