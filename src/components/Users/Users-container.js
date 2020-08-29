import React, {useEffect} from 'react'
import Users from './Users'
import {connect} from 'react-redux'
import { compose } from 'redux';
import {thunkCreator} from '../../redux/usersReducer'
import usersSelectors, {getUsersData} from '../../redux/usersSelectors'
import Preloader from '../../common/Preloader/Preloader'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'


const {getUsers} = thunkCreator
const {getPageSize, getCurrentPage, getIsFetching} = usersSelectors


const UsersContainer = (props) => {
  const {getUsers, isFetching, users, pageSize, page} = props

  useEffect(() => {
    getUsers(page, pageSize)
  }, [])

  return (
    isFetching
      ? <Preloader/>
      : <Users users={users} />
  )
}


const mapStateToProps = (state) => {
  return {
    users: getUsersData(state),
    pageSize: getPageSize(state),
    page: getCurrentPage(state),
    isFetching: getIsFetching(state),
  }
}


export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {getUsers}),
)(UsersContainer)

