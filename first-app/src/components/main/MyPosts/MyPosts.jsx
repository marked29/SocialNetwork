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
                <Post message="Hello, Kitty!" like="32"/>
                <Post message="Hello, World!" like="42"/>
                <Post message="Bye, World!" like="50"/>
                <Post message="Bye, Kitty!" like="30"/>

            </div>
        </div>
    );
}

export default MyPosts;