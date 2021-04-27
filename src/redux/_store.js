import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: 'It\'s my first post', likesCount: 0 }
         ],
         newPostText: 'Wow!'
      },
      dialogsPage: {
         dialogs: [
            { id: 1, name: 'Андрей' },
            { id: 2, name: 'Миша' },
            { id: 3, name: 'Катя' },
         ],
         messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'Hello' },
            { id: 3, message: 'Good Morning' },
         ],
         newMessageBody: ''
      },
      sidebar: {}
   },
   getState() {
      return this._state;
   },
   _callSubscriber() {
      console.log('State was changed');
   },
   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);
      this._callSubscriber(this._state);
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   }
}

window.store = store;
export default store;