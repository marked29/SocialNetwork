import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Navigation from './components/navigation/Navigation';
import Dialogs from './components/dialogs/Dialogs';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <div className="app-wrapper-content">
        {/* <Main /> */}
        <Dialogs />
      </div>
    </div>
  );
}

export default App;