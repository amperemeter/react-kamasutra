let state = {
   profilePage: {
      posts: [
         { id: 1, message: 'Hi, how are you?', likesCount: 12 },
         { id: 2, message: 'It\'s my first post', likesCount: 0 }
      ]
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

export default state;