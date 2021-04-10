import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import Message from './message/Message'
import React from "react";

const Dialogs = (props) => {
    let dialogsItems = props.dialogs.map(item => <DialogItem id={item.id} name={item.name} avatar={item.avatar} />);
    let dialogsContents = props.messages.map(item => <Message id={item.id} content={item.data} avatar={item.avatar} />);

    let newMessageElement = React.createRef();
    
    const sendMsg = () => {
        props.sendMessage();
    }

    const onPostChange = () => {
        let text = newMessageElement.current.value;
        props.updateText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={s.messages}>
                {dialogsContents}

                <div>
                    <textarea name="Messages" onChange={onPostChange} ref={newMessageElement} value={props.messages.newMessageText}/>
                    <button onClick={ () => { sendMsg() }}>Send</button>
                </div>
            </div>
        </div>
    );

}

export default Dialogs