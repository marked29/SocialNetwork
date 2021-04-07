import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Dialogs from './components/dialogs/Dialogs';
import Settings from './components/settings/Settings';
import Music from './components/music/Music';
import News from './components/news/News';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-wrapper-content">
          <Route path='/main' render={ () => <Main posts={props.appState.profilePage.postsData}/>} />
          <Route path='/dialogs' render={ () => <Dialogs dialogs={props.appState.messagesPage.dialogsData} messages={props.appState.messagesPage.messagesData}/>} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;