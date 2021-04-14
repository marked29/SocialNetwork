const textUpdateReducer = (state, action) => {
    if (action.type == 'UPDATE-TEXT') {
        state.messagesPage.newMessageText = action.text;
        state.profilePage.newPostText = action.text;
    }
    return state;
}

export default textUpdateReducer;