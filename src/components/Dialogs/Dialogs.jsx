import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
   let path = "/dialogs/" + props.id;

   return (
      <div className={`${s.dialog} ${s.active}`}>
         <NavLink to={path}>{props.name}</NavLink>
      </div>
   )
}

const Message = (props) => {
   return (
      <div className="message">{props.message}</div>
   )
}

const Dialogs = () => {
   let dialogsList = [
      { id: 1, name: "Андрей" },
      { id: 2, name: "Миша" },
      { id: 3, name: "Таня" },
   ]

   return (
      <div>
         <div className={s.dialogs}>
            <div className={s.dialogs_items}>
               <DialogItem id="1" name="Андрей" />
               <DialogItem id="2" name="Миша" />
               <DialogItem id="3" name="Таня" />
            </div>
            <div className={s.messages_items}>
               <Message message="Hi" />
               <Message message="Hello" />
               <Message message="Good Morning" />
            </div>
         </div>
      </div>

   )
}

export default Dialogs