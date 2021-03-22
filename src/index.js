import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/state'
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';

let rerenderEntireTree = (state) => {
   ReactDOM.render(
      <React.StrictMode>
         <App
            state={state}
            addPost={store.addPost.bind(store)}
            updateNewPostText={store.updateNewPostText.bind(store)}
         />
      </React.StrictMode>,
      document.getElementById('root')
   );
}
rerenderEntireTree(store.getState());
store.subscriber(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();