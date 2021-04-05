import s from "./MyPosts.module.css"

import Post from "./Post/Post";

const MyPosts = () => {
    let messagesData = [
        { id: 1, msg: 'Welcome to React world',likes: 12 },
        { id: 2, msg: 'Bye, VanilaJs', likes: 42},
        { id: 3, msg: 'Do you really want to continue ?', likes: 112},
    ]

    return (
        <div>
            <h3>My Post</h3>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add Post</button>
                <button>Remove Post</button>
            </div>
            
            <div>
                <Post message={messagesData[0].msg} like={messagesData[0].likes}/>
                <Post message={messagesData[1].msg} like={messagesData[1].likes}/>
                <Post message={messagesData[2].msg} like={messagesData[2].likes}/>
            </div>
        </div>
    );
}

export default MyPosts;