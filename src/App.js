import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Menu />
        <main className="app-content">
          <Route
            path="/profile"
            render={() => <Profile />}
          />

          <Route
            path="/dialogs"
            render={() => <DialogsContainer />}
          />

          <Route
            path="/users"
            render={() => <UsersContainer />}
          />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
