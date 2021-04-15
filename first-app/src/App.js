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
import Friends from './friends/Friends'


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <Friends friendsPage={props.appState.friendsPage}/>
        <div className="app-wrapper-content">
          <Route path='/main' render={ () => <Main profilePage={props.appState.profilePage} dispatch={props.dispatch}/>} />
          <Route path='/dialogs' render={ () => <DialogsComponent messagesPage={props.appState.messagesPage} dispatch={props.dispatch}/>} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;