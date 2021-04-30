import axios from 'axios';
import classes from './Users.module.css'
const photourl = 'https://image.flaticon.com/icons/png/512/147/147144.png'

const Users = (props) => {
  debugger;
  if (props.userPage.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      props.setUsers(response.data.items);
    });
  }
  return (
    <div >
      {
        props.userPage.map(u => <div>
          <span>
            <div><img src={u.photos.large} alt="avtr" className={classes.avatar_wrapper} /></div>
            <div>{u.followed
              ? <button onClick={() => { props.unfollow(u.id) }} >UNFOLLOW</button>
              : <button onClick={() => { props.follow(u.id) }}>FOLLOW</button>}</div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              {/* <div>{u.location.country}</div>
              <div>{u.location.city}</div> */}
            </span>
          </span>
        </div>)
      }
    </div>
  );
}

export default Users;