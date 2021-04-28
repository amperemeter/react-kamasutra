import './App.css';
import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import store from './redux/redux-store'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
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
  initialized: state.app.initialized,
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const MainApp = props => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
};

export default MainApp;