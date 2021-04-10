import { rerenderEntireTree } from "../render";

const avatars = 'https://i.pinimg.com/236x/2f/8c/ff/2f8cffcfd465c769a1c2f6e591d56eae.jpg';
const avatar = 'https://html5css.ru/howto/img_avatar2.png';


export let state = {
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
    
}

export let addPost = () => {
    let newPost = { 
        id: 5,
        msg: state.profilePage.newPostText,
        likes: Math.floor(Math.random() * 1000)
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let sendMessage = () => {
    let newMessage = { 
        id: 0,
        data: state.messagesPage.newMessageText,
        avatar: avatars
    };
    state.messagesPage.messagesData.push(newMessage);
    debugger;
    state.messagesPage.newMessageText = '';
    rerenderEntireTree(state);
}

export let updateText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;