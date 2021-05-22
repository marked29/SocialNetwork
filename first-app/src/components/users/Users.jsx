import axios from 'axios';
import * as React from 'react'
import classes from './Users.module.css'
const photourl = 'https://image.flaticon.com/icons/png/512/147/147144.png'

class Users extends React.Component {
  constructor(props) {
    super(props)
  }

  getUsers = () => {
    if (this.props.userPage.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        this.props.setUsers(response.data.items);
      });
    }
  }

  componentDidMount() {
    // Method to display that some events in lifecycle are happening 
    this.getUsers()
  }

  componentDidUpdate() {
    // Method to display that some events in lifecycle are happening 
    alert("We have updated")
  }

  render() {
    return(
      <div>
        {
          this.props.userPage.map(u => <div>
            <span>
              <div><img src={u.photos.large} alt="avtr" className={classes.avatar_wrapper} /></div>
              <div>{u.followed
                ? <button onClick={() => { this.props.unfollow(u.id) }} >UNFOLLOW</button>
                : <button onClick={() => { this.props.follow(u.id) }}>FOLLOW</button>}</div>
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
}

export default Users;