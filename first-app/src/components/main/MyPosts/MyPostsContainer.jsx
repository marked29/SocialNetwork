import React from 'react';
import MyPosts from './MyPosts'

import { addAddPostActionCreator } from '../../../redux/profilePage-reducer'
import { addUpdateNewTextActionCreator } from '../../../redux/updateTextArea-reducer'

const MyPostsContainer = (props) => {

    const addPost = () => {
        props.dispatch(addAddPostActionCreator());
    }

    const onPostChange = (txt) => {
        debugger;
        props.dispatch(addUpdateNewTextActionCreator(txt));
    }
    debugger;   

    return (
        <div>
            <MyPosts updateNewPostText={onPostChange} 
                     addPost={addPost}
                     posts={props.posts}
                     newPostText={props.newPostText}
            />
        </div>
    );
}

export default MyPostsContainer;