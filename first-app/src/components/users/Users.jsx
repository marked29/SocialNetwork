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
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items);
      });
    }
  }

  componentDidMount() {
    // Method to display that some events in lifecycle are happening 
    this.getUsers()
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
    });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++)
    {
      pages.push(i);
    }
    return (
      <div>
        <div>
          {
            pages.map(p =>
              <span className={this.props.currentPage === p && classes.selected} onClick={ () => this.onPageChanged(p)}>
                {p}
              </span>
            )
          }
        </div>
        { 
          this.props.userPage.map(u => <div>
            <span>
              <div><img src={u.photos.small != null ? u.photos.small : photourl} alt="avtr" className={classes.avatar_wrapper} /></div>
              <div>{u.followed
                ? <button onClick={() => { this.props.unfollow(u.id) }} >UNFOLLOW</button>
                : <button onClick={() => { this.props.follow(u.id) }}>FOLLOW</button>}</div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
            </span>
          </div>)
        }
      </div>
    );
  }
}

export default Users;