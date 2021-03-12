import './App.css';
import Dialogs from './components/Messages/Messages';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Menu />
        <main className="app-content">
          <Route path="/messages" component={Dialogs} />
          <Route path="/profile" component={Profile} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
