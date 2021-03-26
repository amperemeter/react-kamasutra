import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      setUsers: (users) => {
         dispatch(setUsersAC(users))
      },
      follow: (userId) => {
         dispatch(followAC(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId))
      }
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;