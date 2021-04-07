import s from "./MyPosts.module.css"

import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsCollection = props.posts.map(post => <Post message={post.msg} like={post.likes}/>)
    
    return (
        <div>
            <h3>My Post</h3>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add Post</button>
                <button>Remove Post</button>
            </div>
            
            <div>
                {postsCollection}
            </div>
        </div>
    );
}

export default MyPosts;