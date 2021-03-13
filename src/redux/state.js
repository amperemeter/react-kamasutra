let rerenderEntireTree;

let state = {
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
}

window.state = state;

export const addPost = () => {
   let newPost = {
      id: state.profilePage.posts.length + 1,
      message: state.profilePage.newPostText,
      likesCount: 0,
   };
   state.profilePage.posts.push(newPost);
   state.profilePage.newPostText = "";
   rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText;
   rerenderEntireTree(state);
}

export const subscriber = (observer) => {
   rerenderEntireTree = observer;
}

export default state;