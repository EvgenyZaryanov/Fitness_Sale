import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Popup from './components/Main/Popup/Popup';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Popup />
    </div>
  );
}

export default App;
