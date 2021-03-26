import React from "react";
import s from "./Users.module.css"

const Users = (props) => {
   if (props.users.length === 0) {
      props.setUsers([
         {
            id: 1,
            followed: true,
            fullName: 'Дмитрий',
            userImage: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/suicide_squad_woman_avatar_joker-256.png',
            status: '^__^',
            location: {
               city: 'Тамбов',
               country: 'Россия'
            }
         },
         {
            id: 2,
            followed: false,
            fullName: 'Ольга',
            userImage: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/suicide_squad_woman_avatar_joker-256.png',
            status: '^__^',
            location: {
               city: 'Москва',
               country: 'Россия'
            }
         },
         {
            id: 3,
            followed: false,
            fullName: 'Ирина',
            userImage: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/suicide_squad_woman_avatar_joker-256.png',
            status: '^__^',
            location: {
               city: 'Воронеж',
               country: 'Россия'
            }
         },
         {
            id: 4,
            followed: false,
            fullName: 'Петр',
            userImage: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/suicide_squad_woman_avatar_joker-256.png',
            status: '^__^',
            location: {
               city: 'Курск',
               country: 'Россия'
            }
         }
      ])
   }

   return (
      <div>
         {
            props.users.map(u => {
               return (
                  <div key={u.id} className={s.item}>

                     <div className={s.left}>
                        <img src={u.userImage} alt="" className={s.image} />
                        {!u.followed
                           ? <button onClick={() => { props.follow(u.id) }}>Follow</button>
                           : <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                        }

                     </div>

                     <div className={s.right}>
                        <div>
                           <div>{u.fullName}</div>
                           <div>{u.status}</div>
                        </div>
                        <div>
                           <div>{u.location.country}</div>
                           <div>{u.location.city}</div>
                        </div>
                     </div>

                  </div>
               )
            })
         }
      </div>
   )
}

export default Users;