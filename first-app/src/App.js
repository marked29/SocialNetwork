import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';

import Header from './components/header/Header';
import Main from './components/main/Main';
import DialogsComponent from './components/dialogs/DialogsComponent';
import Settings from './components/settings/Settings';
import Music from './components/music/Music';
import News from './components/news/News';
import FriendsContainer from './components/friends/FriendsContainer'
import UsersContainer from './components/users/UsersContainer'


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <FriendsContainer />
        <div className="app-wrapper-content">
          <Route path='/main' render={ () => <Main/>} />
          <Route path='/dialogs' render={ () => <DialogsComponent/>} />
          <Route path='/users' component={UsersContainer}/>
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;