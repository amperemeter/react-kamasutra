import React from 'react';
import { connect } from 'react-redux';
import {
   follow,
   setCurrentPage,
   setUsers,
   unfollow,
   toggleIsFetching,
   toggleFollowingProgress
} from '../../redux/users-reducer';
// import { setTotalUsersCount } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.toggleIsFetching(true);
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
         this.props.toggleIsFetching(false);
         this.props.setUsers(data.items);
         // this.props.setTotalUsersCount(data.totalCount);
      })
   }
   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);
      usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
         this.props.toggleIsFetching(false);
         this.props.setUsers(data.items);
      })
   }
   render() {
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users {...this.props} />
      </>
   }
}

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress,
   }
}

export default connect(mapStateToProps, {
   // setTotalUsersCount,
   setUsers,
   follow,
   unfollow,
   setCurrentPage,
   toggleIsFetching,
   toggleFollowingProgress
})(UsersContainer);