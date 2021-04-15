const avatars = 'https://i.pinimg.com/236x/2f/8c/ff/2f8cffcfd465c769a1c2f6e591d56eae.jpg';

let initialState = {
    friendsData: [
        { id: 1, name: 'Andrew', avatar: avatars },
        { id: 2, name: 'Kolya', avatar: avatars },
        { id: 3, name: 'Olya', avatar: avatars },
    ],
};

const friendsReducer = (state = initialState, action) => {
    return state;
}


export default friendsReducer;