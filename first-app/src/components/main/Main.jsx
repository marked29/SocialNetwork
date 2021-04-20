import s from "./Main.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Main = (props) => {
    return (
        <main>
            <ProfileInfo />
            <MyPostsContainer/>
        </main>
    );
}

export default Main;