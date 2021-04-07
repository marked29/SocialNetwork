import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import Message from './message/Message'

const Dialogs = (props) => {


    let dialogsItems = props.dialogs.map(item => <DialogItem id={item.id} name={item.name} />);
    let dialogsContents = props.messages.map(item => <Message content={item.data} />);

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