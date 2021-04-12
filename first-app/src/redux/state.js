
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
                { id: 1, name: 'Andrew', avatar: avatars},
                { id: 2, name: 'Kolya', avatar: avatars},
                { id: 3, name: 'Olya', avatar: avatars},
            ],
        },   
    },    

    _subscribe() { 
        console.log("State was changed"); 
    },

    _addPost() {
        let newPost = { 
            id: 5,
            msg: this._state.profilePage.newPostText,
            likes: Math.floor(Math.random() * 1000)
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._subscribe(this._state);
    },

    _sendMessage() {
        let newMessage = { 
            id: 0,
            data: this._state.messagesPage.newMessageText,
            avatar: avatars
        };
        this._state.messagesPage.messagesData.push(newMessage);
        this._state.messagesPage.newMessageText = '';
        this._subscribe(this._state);
    },

    _updateText(newText) {
        this._state.profilePage.newPostText = newText;
        this._state.messagesPage.newMessageText = newText;
        this._subscribe(this._state);
    },




    subscirbe(observer) {
        this._subscribe = observer;
    },

    dispatch(action) {
        if (action.type == 'ADD-POST') {
            this._addPost();
        } else if (action.type == 'UPDATE-TEXT') {
            this._updateText(action.text);
        } else if (action.type == 'SEND-MESSAGE' ) {
            this._sendMessage();
        } else {
            alert('Unknown action');
        }
    }
}

export const addSendMessageActionCreator = () => { return {type: 'SEND-MESSAGE'} }
export const addAddPostActionCreator = () => { return {type: 'ADD-POST'} }

export const addUpdateNewTextActionCreator = (txt) => { return {type: 'UPDATE-TEXT', text: txt }}


export default store;