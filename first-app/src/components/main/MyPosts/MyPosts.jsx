import s from "./MyPosts.module.css"
import React from 'react';

import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsCollection = props.posts.postsData.map(post => <Post message={post.msg} like={post.likes}/>)
    
    let newPostElement = React.createRef();

    const onAddPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
        let txt = newPostElement.current.value;
        props.updateNewPostText(txt);
    }
    return (
        <div>
            <h3>My Post</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={ () => { onAddPost()}}>Add Post</button>
                <button>Remove Post</button>
            </div>
            
            <div>
                {postsCollection}
            </div>
        </div>
    );
}

export default MyPosts;