import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';
import classes from './Friends.module.css'



const Friends = (props) => {
  let friends = props.friendsPage.friendsData.map(friendDataItem => <Friend avatar={friendDataItem.avatar} name={friendDataItem.name}/>)
  return (
    <div className={classes.wrapper}>
      <h2>Friends</h2>
      <div class={classes.friend_wrapper}>
        {friends}
      </div>
    </div>
  );
}

export default Friends;