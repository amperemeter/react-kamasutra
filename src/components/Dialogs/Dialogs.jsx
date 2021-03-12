import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {

   let dialogsElements = props.state.dialogs.map(d =>
      <DialogItem key={d.id} id={d.id} name={d.name} />
   );

   let messagesElements = props.state.messages.map(m =>
      <Messages key={m.id} message={m.message} />
   );

   return (
      <div>
         <div className={s.dialogs}>
            <div className={s.dialogs_items}>
               {dialogsElements}
            </div>
            <div className={s.messages_items}>
               {messagesElements}
            </div>
         </div>
      </div>

   )
}

export default Dialogs