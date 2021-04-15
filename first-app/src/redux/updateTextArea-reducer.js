const avatars = 'https://i.pinimg.com/236x/2f/8c/ff/2f8cffcfd465c769a1c2f6e591d56eae.jpg';
const avatar = 'https://html5css.ru/howto/img_avatar2.png';

let initialState = {
    profilePage: {
        postsData: [
            { id: 0, msg: 'Very first post kinda placeholder', likes: 0 },
        ],
        newPostText: ''
    },

    messagesPage: {
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
        newMessageText: ''
    },
};

const textUpdateReducer = (state = initialState, action) => {
    if (action.type == 'UPDATE-TEXT') {
        state.messagesPage.newMessageText = action.text;
        state.profilePage.newPostText = action.text;
    }
    return state;
}

export const addUpdateNewTextActionCreator = (txt) => { return { type: 'UPDATE-TEXT', text: txt } }

export default textUpdateReducer;