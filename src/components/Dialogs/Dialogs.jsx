import React from "react";
import DialogItem from "./DialogItem/Dialogs";
import Messages from "./Messages/Messages";
import s from "./Dialogs.module.css";

const Dialogs = () => {
   let dialogsData = [
      { id: 1, name: "Андрей" },
      { id: 2, name: "Миша" },
      { id: 3, name: "Катя" },
   ]

   let messagesData = [
      { id: 1, message: "Hi" },
      { id: 2, message: "Hello" },
      { id: 3, message: "Good Morning" },
   ]

   let dialogsElements = dialogsData.map(d =>
      <DialogItem key={d.id} id={d.id} name={d.name} />
   );

   let messagesElements = messagesData.map(m =>
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