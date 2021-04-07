import classes from './Message.module.css'


const Message = (props) => {
    // Users id should be 0
    const didMainUserSendMsg = props.id == 0 ? true : false;

    const msgContent = [
        <div>{props.content}</div>,
        <img src={props.avatar} alt="avatrs" />
    ]

    const composeMessage = (mainUserSentMsg) => {
        return mainUserSentMsg ? msgContent : msgContent.reverse();
    }

    const messageWrapper = didMainUserSendMsg ? `${classes.message_wrapper + " " + classes.left}` : `${classes.message_wrapper}`;

    return (
        <div className={messageWrapper}>
            <div className={classes.message}>
                {composeMessage(didMainUserSendMsg)}
            </div>
        </div>
    );

}

export default Message