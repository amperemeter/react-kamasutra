import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
import { getAuthUserData } from './redux/auth-reducer';
import Menu from './components/Menu/Menu';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }
  render() {
    return (
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
    );
  }
}

export default connect(null, { getAuthUserData })(App);