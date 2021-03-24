import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';

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
            render={() => <Profile store={props.store} />}
          />
          <Route
            path="/dialogs"
            render={() => <DialogsContainer store={props.store} />}
          />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
