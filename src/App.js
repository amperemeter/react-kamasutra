import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
import { initializeApp } from './redux/app-reducer';
import Menu from './components/Menu/Menu';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import './App.css';
import Preloader from './components/Common/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

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

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);