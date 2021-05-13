import "./App.css";
import React from "react";
import store from "./redux/redux-store"
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import ProfileContainer from "./components/Profile/ProfileContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import Preloader from "./components/Common/Preloader";
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));

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
          <React.Suspense fallback={<Preloader />}>
            <Switch>
              <Redirect exact from="/" to="/profile" />
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
                render={() => <LoginContainer />}
              />
              <Route
                path="*"
                render={() => <div>404</div>}
              />
            </Switch>
          </React.Suspense>
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

const MainApp = () => {
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