let initialState = {
    postsData: [
        { id: 0, msg: 'Very first post kinda placeholder', likes: 0 },
    ],
    newPostText: " "
};

const profileReducer = (state = initialState, action) => {
    if (action.type === 'ADD-POST') {
        let newPost = {
            id: 5,
            msg: state.newPostText,
            likes: Math.floor(Math.random() * 1000)
        };
        debugger;
        let newState = {...state}
        newState.postsData.push(newPost);
        newState.newPostText = '';
        return newState;
    }

    if (action.type === 'UPDATE-TEXT') {
        let newState = {...state}
        newState.newPostText = action.text;
        return newState
    }

    return state;
}

export const addAddPostActionCreator = () => { return { type: 'ADD-POST' } }

export default profileReducer;