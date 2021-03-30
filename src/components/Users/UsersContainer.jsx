import React from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";
// import { setTotalUsersCountAC } from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items);
         // this.props.setTotalUsersCount(response.data.totalCount);
      })
   }
   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items);
      })
   }
   render() {
      return <Users
         users={this.props.users}
         totalUsersCount={this.props.totalUsersCount}
         pageSize={this.props.pageSize}
         currentPage={this.props.setCurrentPage}
         follow={this.props.follow}
         unfollow={this.props.unfollow}
         onPageChanged={this.onPageChanged}
      />
   }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);