import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';

let mapStateToPops = (state) => {
   return {
      dialogsPage: state.dialogsPage,
      isAuth: state.auth.isAuth,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      updateNewMessageBody: (body) => {
         dispatch(updateNewMessageBodyCreator(body))
      },
      sendMessage: () => {
         dispatch(sendMessageCreator())
      }
   }
}

const DialogsContainer = connect(mapStateToPops, mapDispatchToProps)(Dialogs);

export default DialogsContainer;