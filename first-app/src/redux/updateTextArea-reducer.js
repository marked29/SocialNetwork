const textUpdateReducer = (state, action) => {
    if (action.type == 'UPDATE-TEXT') {
        state.messagesPage.newMessageText = action.text;
        state.profilePage.newPostText = action.text;
    }
    return state;
}

export const addUpdateNewTextActionCreator = (txt) => { return {type: 'UPDATE-TEXT', text: txt }}

export default textUpdateReducer;