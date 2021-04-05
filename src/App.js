import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

function App() {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Menu />
        <main className="app-content">
          <Route
            path="/profile/:userId?"
            render={() => <ProfileContainer />}
          />

          <Route
            path="/dialogs"
            render={() => <DialogsContainer />}
          />

          <Route
            path="/users"
            render={() => <UsersContainer />}
          />
          <Route
            path="/login"
            render={() => <Login />}
          />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
