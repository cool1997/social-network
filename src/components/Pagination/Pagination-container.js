import React, {useState} from 'react'
import Pagination from './Pagination'
import {connect} from 'react-redux'
import { compose } from 'redux';
import {thunkCreator} from '../../redux/usersReducer'


const {updateUsers} = thunkCreator


const PaginationContainer = ({updateUsers, pageSize, totalItemsCount, portionSize = 10, ...props}) => {
  const [portionNumber, setPortionNumber] = useState(1)

  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber =  portionNumber * portionSize

  const pagesCount = Math.ceil(totalItemsCount / pageSize)

  const pages = []
  for(let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize)


  const onPageChanged = (pageNumber) => {
    updateUsers(pageNumber, pageSize)
  }


  return (
    <Pagination 
      onPageChanged={onPageChanged} 
      pages={pages}
      portionNumber={portionNumber}
      setPortionNumber={setPortionNumber}
      leftPortionPageNumber={leftPortionPageNumber}
      rightPortionPageNumber={rightPortionPageNumber}
      portionCount={portionCount} {...props}/>
  )
}


const mapStateToProps = (state) => {
  return {
    pageSize: state.users.pageSize,
    totalItemsCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
  }
}


export default compose(
  connect(mapStateToProps, {updateUsers}),
)(PaginationContainer)

