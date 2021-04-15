import s from "./Main.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Main = (props) => {
    debugger;
    return (
        <main>
            <ProfileInfo />
            <MyPostsContainer posts={props.profilePage} 
                    newPostText={props.profilePage.newPostText}
                    dispatch={props.dispatch} />
        </main>
    );
}

export default Main;