import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {addPost} from './redux/state'
import {updateText} from './redux/state'
import {sendMessage} from './redux/state'


export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App appState={state}
                         addPost={addPost}
                         updateText={updateText}
                         sendMessage={sendMessage}
                    />, 
                    document.getElementById('root'));   
}