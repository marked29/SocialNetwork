import React from 'react';
import MyPosts from './MyPosts'
import StoreContext from '../../../StoreContext'

import { addAddPostActionCreator } from '../../../redux/profilePage-reducer'
import { addUpdateNewTextActionCreator } from '../../../redux/updateTextArea-reducer'

const MyPostsContainer = () => {
    return (
        <div>
            <StoreContext.Consumer>
                {store => {
                    let state = store.getState();
                    debugger; 
                    let addPost = () => {
                        store.dispatch(addAddPostActionCreator());
                    };

                    let onPostChange = (txt) => {
                        store.dispatch(addUpdateNewTextActionCreator(txt));
                    };

                    return <MyPosts updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage}
                        newPostText={state.profilePage.newPostText}
                    />
                }

                }
            </StoreContext.Consumer>
        </div>
    );
}

export default MyPostsContainer;