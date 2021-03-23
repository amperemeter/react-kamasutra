import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import s from "./Dialogs.module.css";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

   let state = props.store.getState().dialogsPage;

   let dialogsElements = state.dialogs.map(d =>
      <DialogItem key={d.id} id={d.id} name={d.name} />
   );

   let newMessageBody = state.newMessageBody;

   let messagesElements = state.messages.map(m =>
      <Messages key={m.id} message={m.message} />
   );

   let onSendMessageClick = () => {
      props.store.dispatch(sendMessageCreator())
   }

   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.store.dispatch(updateNewMessageBodyCreator(body))
   }

   return (
      <div>
         <div className={s.dialogs}>
            <div className={s.dialogs_items}>
               {dialogsElements}
            </div>
            <div className={s.messages_items}>
               <div>{messagesElements}</div>
               <div>
                  <div>
                     <textarea
                        placeholder="Enter your message"
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                     >
                     </textarea>
                  </div>
                  <div>
                     <button onClick={onSendMessageClick}>Send</button>
                  </div>
               </div>
            </div>
         </div>
      </div>

   )
}

export default Dialogs