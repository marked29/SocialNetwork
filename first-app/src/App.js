import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Navigation from './components/navigation/Navigation';



const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <Main />
    </div>
  );
}

export default App;