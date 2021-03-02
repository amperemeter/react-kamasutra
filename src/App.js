import Header from './components/Header';
import './App.css';
import Menu from './components/Menu';
import Profile from './components/Profile';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Menu />
      <Profile />
    </div>
  );
}

export default App;
