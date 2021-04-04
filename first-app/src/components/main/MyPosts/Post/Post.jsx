import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Deseret_small_long_O.svg/932px-Deseret_small_long_O.svg.png" alt="Avatar" />
                    {props.message}
                <div>
                    <span>
                        like - {props.like}
                    </span>
                </div>
        </div>
    );
}

export default Post;