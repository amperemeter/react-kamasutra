let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: 'It\'s my first post', likesCount: 0 }
         ],
         newPostText: 'Wow!',
      },
      dialogsPage: {
         dialogs: [
            { id: 1, name: "Андрей" },
            { id: 2, name: "Миша" },
            { id: 3, name: "Катя" },
         ],
         messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "Hello" },
            { id: 3, message: "Good Morning" },
         ]
      }
   },
   getState() {
      return this._state;
   },
   _callSubscriber() {
      console.log('State was changed');
   },
   dispatch(action) {
      if (action.type === 'ADD-POST') {
         let newPost = {
            id: this._state.profilePage.posts.length + 1,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
         };
         this._state.profilePage.posts.push(newPost);
         this._state.profilePage.newPostText = "";
         this._callSubscriber(this._state);
      } else if (action.type === 'UPDAT-NEW-POST-TEXT') {
         this._state.profilePage.newPostText = action.newText;
         this._callSubscriber(this._state);
      }
   },
   subscriber(observer) {
      this._callSubscriber = observer;
   }
}

window.store = store;

export default store;