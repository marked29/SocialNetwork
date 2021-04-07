import { NavLink } from 'react-router-dom';
import classes from './Friend.module.css'



const Friend = (props) => {
  return (
      <div class={classes.friend_container}>
        <img src={props.avatar} alt="Avatar" />
        <div>{props.name}</div>
      </div>
  );
}

export default Friend;