const avatars = 'https://i.pinimg.com/236x/2f/8c/ff/2f8cffcfd465c769a1c2f6e591d56eae.jpg';

let state = {
    profilePage: {
        postsData: [
            { id: 1, msg: 'Welcome to React world', likes: 12 },
            { id: 2, msg: 'Bye, VanilaJs', likes: 42 },
            { id: 3, msg: 'Do you really want to continue ?', likes: 112 },
        ],
    },
    
    messagesPage: {
        dialogsData: [
            { id: 1, name: 'Andrew', avatar: avatars },
            { id: 2, name: 'Kolya', avatar: avatars },
            { id: 3, name: 'Olya', avatar: avatars },
        ],
    
        messagesData: [
            { id: 0, data: 'Hello, Its Mark', avatar: avatars },
            { id: 1, data: 'Hello, Drew', avatar: avatars },
            { id: 2, data: 'Bye, Nik', avatar: avatars },
            { id: 3, data: 'Welcome, Olya', avatar: avatars },
        ],
    },

    friendsPage: {
        friendsData: [
            { id: 1, name: 'Andrew', avatar: avatars},
            { id: 2, name: 'Kolya', avatar: avatars},
            { id: 3, name: 'Olya', avatar: avatars},
        ],
    },
    
}

export default state;