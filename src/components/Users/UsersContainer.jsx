import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC, setTotalUsersCountAC } from "../../redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
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
      },
      setCurrentPage: (pageNumber) => {
         dispatch(setCurrentPageAC(pageNumber))
      },
      // setTotalUsersCount: (totalCount) => {
      //    dispatch(setTotalUsersCountAC(totalCount))
      // }
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;