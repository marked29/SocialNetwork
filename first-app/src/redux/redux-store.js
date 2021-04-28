import {combineReducers, createStore} from 'redux'
import friendsReducer from './friendsPage-reducer';
import messagesReducer from './messagesPage-reducer';
import profileReducer from './profilePage-reducer';
import usersReducer from './usersPage-reducer';

let reducersList = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer
});

let store = createStore(reducersList);

export default store;