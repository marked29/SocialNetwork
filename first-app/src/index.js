import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';




let rerenderEntireTree = (state) => {
    ReactDOM.render(<App appState={state}
                         dispatch={store.dispatch.bind(store)}
                    />, 
                    document.getElementById('root'));   
}

rerenderEntireTree(store._state);
store.subscirbe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
