import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css'



const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}><NavLink to="/main">Profile</NavLink></div>
      <div className={classes.item}><NavLink to="/dialogs">Messages</NavLink></div>
      <div className={classes.item}><NavLink to="/news">News</NavLink></div>
      <div className={classes.item}><NavLink to="/music">Music</NavLink></div>
      <div className={classes.item}><NavLink to="/settings">Settings</NavLink></div>
    </nav>
  );
}

export default Navigation;