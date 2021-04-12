import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { compose } from 'redux';
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
}

export default compose(
  withRouter,
  connect(null, { getAuthUserData }))(App);