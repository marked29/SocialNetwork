import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css'



const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}><NavLink to="/main" activeClassName={classes.active}>Profile</NavLink></div>
      <div className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink></div>
      <div className={classes.item}><NavLink to="/news" activeClassName={classes.active}>News</NavLink></div>
      <div className={classes.item}><NavLink to="/music" activeClassName={classes.active}>Music</NavLink></div>
      <div className={classes.item}><NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink></div>
    </nav>
  );
}

export default Navigation;