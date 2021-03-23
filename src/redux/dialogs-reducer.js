const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
      ],
      newMessageBody: ''
   }
}

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
         state.newMessageBody = action.body;
         return state;

      case SEND_MESSAGE:
         let body = state.newMessageBody;
         state.newMessageBody = '';
         state.messages.push({ id: state.messages.length + 1, message: body });
         return state;

      default:
         return state;
   }
}

export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export default dialogsReducer;