import s from "./Main.module.css"

import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Main = (props) => {
    return (
        <main>
            <ProfileInfo />
            <MyPosts posts={props.posts} />
        </main>
    );
}

export default Main;