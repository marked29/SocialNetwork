const profileReducer = (state, action) => {
    if (action.type === 'ADD-POST') {
        let newPost = {
            id: 5,
            msg: state.newPostText,
            likes: Math.floor(Math.random() * 1000)
        };
        state.postsData.push(newPost);
        state.newPostText = '';
    }
    return state;
}

export default profileReducer;