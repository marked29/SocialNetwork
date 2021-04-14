const messagesReducer = (state, action) => {
    if (action.type === 'SEND-MESSAGE') {
        state.messagesData.push({
            id: 0,
            data: state.newMessageText,
            avatar: 'https://html5css.ru/w3css/img_avatar3.png'
        });
        state.newMessageText = '';
    }
    return state;
}

export const addSendMessageActionCreator = () => { return { type: 'SEND-MESSAGE' } }

export default messagesReducer;