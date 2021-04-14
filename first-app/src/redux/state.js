
import profileReducer from './profilePage-reducer'
import messagesReducer from './messagesPage-reducer'
import textUpdateReducer from './updateTextArea-reducer'


const avatars = 'https://i.pinimg.com/236x/2f/8c/ff/2f8cffcfd465c769a1c2f6e591d56eae.jpg';
const avatar = 'https://html5css.ru/howto/img_avatar2.png';

let store = {
    _state: {
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

        friendsPage: {
            friendsData: [
                { id: 1, name: 'Andrew', avatar: avatars },
                { id: 2, name: 'Kolya', avatar: avatars },
                { id: 3, name: 'Olya', avatar: avatars },
            ],
        },
    },

    _subscribe() {
        console.log("State was changed");
    },

    subscirbe(observer) {
        this._subscribe = observer;
    },

    dispatch(action) {

        this._state = textUpdateReducer(this._state, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._subscribe(this._state);
    }
}



export default store;