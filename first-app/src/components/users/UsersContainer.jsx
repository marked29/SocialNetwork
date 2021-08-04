import Users from './Users'

import { connect } from 'react-redux'
import { addFollowActionCreator, addSetCurrentPage, addSetTotalUsersCount, addSetUsersActionCreator, addUnfollowActionCreator } from '../../redux/usersPage-reducer'


let stateMapping = (state) => {
  return {
    userPage: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
}

let dispatchMapping = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(addFollowActionCreator(userId))
    },
    unfollow: (userId) => {
      dispatch(addUnfollowActionCreator(userId))
    },
    setUsers: (users) => {
      dispatch(addSetUsersActionCreator(users))
    },
    setCurrentPage: (currentPage) => {
      dispatch(addSetCurrentPage(currentPage))
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(addSetTotalUsersCount(totalUsersCount))
    },
  }
}

let UsersContainer = connect(stateMapping, dispatchMapping)(Users);

export default UsersContainer;