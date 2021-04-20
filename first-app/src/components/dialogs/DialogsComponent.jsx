import Message from './message/Message'
import React from "react";
import Dialogs from './Dialogs'

import { addSendMessageActionCreator } from '../../redux/messagesPage-reducer'
import { addUpdateNewTextActionCreator } from '../../redux/updateTextArea-reducer'
import StoreContext from '../../StoreContext';
import store from '../../redux/redux-store';

const DialogsComponent = () => {
    return (
        <div>
            <StoreContext.Consumer>
                {
                    store => {
                        let state = store.getState();

                        const sendMessage = () => {
                            store.dispatch(addSendMessageActionCreator());
                        }
                    
                        const onPostChange = (txt) => {
                            store.dispatch(addUpdateNewTextActionCreator(txt));
                        }

                        return <Dialogs sendMessage={sendMessage}
                            updateNewMessageText={onPostChange}
                            messagesPage={state.messagesPage}
                            newMessageText={state.messagesPage.newMessageText}
                        />
                    }

                }
            </StoreContext.Consumer>
        </div>
    );

}

export default DialogsComponent