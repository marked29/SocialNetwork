import classes from './Users.module.css'
const photourl = 'https://image.flaticon.com/icons/png/512/147/147144.png'



const Users = (props) => {
  debugger;
  if (props.userPage.length === 0) {
  props.setUsers([
    {
      id: 1,
      avatar: photourl,
      isFollowing: true,

      fullName: {
        name: 'Beast',
        surname: 'Misra',
      },
      status: 'BoX',
      location: {
        country: 'yummy',
        city: 'Dnipro'
      }
    },
    {
      id: 2,
      avatar: photourl,
      isFollowing: false,

      fullName: {
        name: 'Mark',
        surname: 'Misra',
      },
      status: 'Boss',
      location: {
        country: 'Ukraine',
        city: 'Dnipro'
      }
    },
    {
      id: 3,
      avatar: photourl,
      isFollowing: true,

      fullName: {
        name: 'Dark',
        surname: 'Choco',
      },
      status: 'babyBoss',
      location: {
        country: 'Moscow',
        city: 'Russia'
      }
    }
  ]); 
  }
  return (
    <div >
      {
        props.userPage.map(u => <div>
          <span>
            <div><img src={u.avatar} alt="avtr" className={classes.avatar_wrapper} /></div>
            <div>{u.isFollowing
              ? <button onClick={() => { props.unfollow(u.id) }} >UNFOLLOW</button>
              : <button onClick={() => { props.follow(u.id) }}>FOLLOW</button>}</div>
          </span>
          <span>
            <span>
              <div>{u.fullName.name} {u.fullName.surname}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  );
}

export default Users;