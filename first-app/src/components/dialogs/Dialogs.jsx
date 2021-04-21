import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import Message from './message/Message'
import React from "react";

import {addSendMessageActionCreator} from '../../redux/messagesPage-reducer'
import {addUpdateNewTextActionCreator} from '../../redux/updateTextArea-reducer'

const Dialogs = (props) => {
    debugger;
    let dialogsItems = props.messagesPage.dialogsData.map(item => <DialogItem id={item.id} name={item.name} avatar={item.avatar} />);
    let dialogsContents = props.messagesPage.messagesData.map(item => <Message id={item.id} content={item.data} avatar={item.avatar} />);

    let newMessageElement = React.createRef();
    
    const sendMessage = () => {
        debugger;
        props.sendMessage();
    }

    const onPostChange = () => {
        debugger;
        let txt = newMessageElement.current.value;
        props.updateNewMessageText(txt);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={s.messages}>
                {dialogsContents}

                <div>
                    <textarea onChange={onPostChange} ref={newMessageElement} value={props.messagesPage.newMessageText}/>
                    <button onClick={ () => { sendMessage() }}>Send</button>
                </div>
            </div>
        </div>
    );

}

export default Dialogs