import { NavLink } from 'react-router-dom'
import s from './DialogItem.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialogsItems}>
            <img src={props.avatar} alt="Avatar" />
            <NavLink to={path}><div className={s.dialog + ' ' + s.active}>{props.name}</div></NavLink>
        </div>
    );

}

export default DialogItem