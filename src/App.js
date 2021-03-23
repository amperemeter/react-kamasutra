import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  console.log(props);

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Menu />
        <main className="app-content">
          <Route
            path="/profile"
            render={() => <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />}
          />
          <Route
            path="/dialogs"
            render={() => <Dialogs state={props.state.dialogsPage} store={props.store} />}
          />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
