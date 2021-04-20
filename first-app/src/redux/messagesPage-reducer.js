const avatars = 'https://i.pinimg.com/236x/2f/8c/ff/2f8cffcfd465c769a1c2f6e591d56eae.jpg';
const avatar = 'https://html5css.ru/howto/img_avatar2.png';


let initialState = {
    dialogsData: [
        { id: 1, name: 'Andrew', avatar: avatars },
        { id: 2, name: 'Kolya', avatar: avatars },
        { id: 3, name: 'Olya', avatar: avatar },
    ],

    messagesData: [
        { id: 0, data: 'Hello, Its Mark', avatar: avatars },
        { id: 1, data: 'Hello, Drew', avatar: avatars },
        { id: 2, data: 'Bye, Nik', avatar: avatars },
        { id: 3, data: 'Welcome, Olya', avatar: avatar },
    ],
    newMessageText: " "
};

const messagesReducer = (state = initialState, action) => {
    if (action.type === 'SEND-MESSAGE') {
        state.messagesData.push({
            id: 0,
            data: state.newMessageText,
            avatar: avatars
        });
        state.newMessageText = '';
    }

    if (action.type === 'UPDATE-TEXT') {
        state.newMessageText = action.text;
    }
    return state;
}

export const addSendMessageActionCreator = () => { return { type: 'SEND-MESSAGE' } }

export default messagesReducer;