import s from "./MyPosts.module.css"

import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            my post
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add Post</button>
                <button>Remove Post</button>
            </div>
            
            <div>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />

            </div>
        </div>
    );
}

export default MyPosts;