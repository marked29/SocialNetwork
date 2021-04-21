import React from 'react';
import MyPosts from './MyPosts'

import { addAddPostActionCreator } from '../../../redux/profilePage-reducer'
import { addUpdateNewTextActionCreator } from '../../../redux/updateTextArea-reducer'
import { connect } from 'react-redux'

let f1 = (state) => {
    return {
        posts: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
}

let f2 = (dispatch) => {
    return {
        addPost : () => dispatch(addAddPostActionCreator()),
        updateNewPostText: (txt) => dispatch(addUpdateNewTextActionCreator(txt))

    }
}


let MyPostsContainer = connect(f1,f2)(MyPosts);

export default MyPostsContainer;