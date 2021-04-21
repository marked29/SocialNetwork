import Message from './message/Message'
import React from "react";
import Dialogs from './Dialogs'

import { addSendMessageActionCreator } from '../../redux/messagesPage-reducer'
import { addUpdateNewTextActionCreator } from '../../redux/updateTextArea-reducer'
import {connect} from 'react-redux'

let f1 = (state) => {

    return {
        messagesPage: state.messagesPage
    }
}

let f2 = (dispatch) => {
    return {
        sendMessage: () => dispatch(addSendMessageActionCreator()),
        updateNewMessageText: txt => dispatch(addUpdateNewTextActionCreator(txt))
        
    }
}

let DialogsComponent = connect(f1,f2)(Dialogs);

export default DialogsComponent