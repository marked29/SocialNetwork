let initialState = {
    postsData: [
        { id: 0, msg: 'Very first post kinda placeholder', likes: 0 },
    ],
    newPostText: "Helloy"
};

const profileReducer = (state = initialState, action) => {
    if (action.type === 'ADD-POST') {
        let newPost = {
            id: 5,
            msg: state.newPostText,
            likes: Math.floor(Math.random() * 1000)
        };
        state.postsData.push(newPost);
        state.newPostText = "";
    }

    if (action.type === 'UPDATE-TEXT') {
        state.newPostText = action.text;
    }

    return state;
}

export const addAddPostActionCreator = () => { return { type: 'ADD-POST' } }

export default profileReducer;