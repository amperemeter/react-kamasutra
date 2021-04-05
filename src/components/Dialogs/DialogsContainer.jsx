import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import Dialogs from './Dialogs';

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

export default compose(connect(mapStateToPops, mapDispatchToProps), withAuthRedirect)(Dialogs);