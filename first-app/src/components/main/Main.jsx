import s from "./Main.module.css"

import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Main = () => {
    return (
        <main>
            <ProfileInfo />
            <MyPosts />
        </main>
    );
}

export default Main;