import Users from './Users'

import { connect } from 'react-redux'
import { addFollowActionCreator, addSetUsersActionCreator, addUnfollowActionCreator } from '../../redux/usersPage-reducer'


let stateMapping = (state) => {
  return {
    userPage: state.usersPage.usersData
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
    }
  }
}

let UsersContainer = connect(stateMapping, dispatchMapping)(Users);

export default UsersContainer;