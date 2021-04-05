import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import Message from './message/Message'

const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Kolya' },
        { id: 3, name: 'Olya' },
    ]

    let messagesData = [
        { id: 1, data: 'Hello, Drew' },
        { id: 2, data: 'Bye, Nik' },
        { id: 3, data: 'Welcome, Olya' },
    ]

    let dialogsItems = dialogsData.map(item => <DialogItem id={item.id} name={item.name} />);
    let dialogsContents = messagesData.map(item => <Message content={item.data} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={s.messages}>
                {dialogsContents}
            </div>
        </div>
    );

}

export default Dialogs