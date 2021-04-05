import s from './Message.module.css'

const Message = (props) => {

    return (
        <div>
            <div> {props.content} </div>
        </div>
    );

}

export default Message