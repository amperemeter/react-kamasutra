import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

let mapStateToPops = (state) => {
   return {
      dialogsPage: state.dialogsPage,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToPops, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;