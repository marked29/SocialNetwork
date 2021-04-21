import Friends from './Friends';

import {connect} from 'react-redux'


let f1 = (state) => {
  return {
    friendsPage: state.friendsPage
  }
}

let FriendsContainer = connect(f1)(Friends);

export default FriendsContainer;