import Message from './message/Message'
import React from "react";
import Dialogs from './Dialogs'

import {addSendMessageActionCreator} from '../../redux/messagesPage-reducer'
import {addUpdateNewTextActionCreator} from '../../redux/updateTextArea-reducer'

const DialogsComponent = (props) => {
    debugger;

    let newMessageElement = React.createRef();
    
    const sendMessage = () => {
        props.dispatch(addSendMessageActionCreator());
    }

    const onPostChange = (txt) => {
        props.dispatch(addUpdateNewTextActionCreator(txt));
    }

    return (
        <div>
            <Dialogs sendMessage = {sendMessage} 
                     updateNewMessageText = {onPostChange}
                     messagesPage={props.messagesPage}
                     newMessageText={props.messagesPage.newMessageText}
                    />
        </div>
    );

}

export default DialogsComponent