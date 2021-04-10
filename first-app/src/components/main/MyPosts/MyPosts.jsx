import s from "./MyPosts.module.css"
import React from 'react';
import ReactDOM from 'react-dom';

import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsCollection = props.posts.postsData.map(post => <Post message={post.msg} like={post.likes}/>)
    
    let newPostElement = React.createRef();

    const addPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateText(text);
    }

    return (
        <div>
            <h3>My Post</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.posts.newPostText}/>
                <button onClick={ () => { addPost()}}>Add Post</button>
                <button>Remove Post</button>
            </div>
            
            <div>
                {postsCollection}
            </div>
        </div>
    );
}

export default MyPosts;