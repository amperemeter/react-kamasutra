import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setUsers, unfollow, toggleIsFetching } from '../../redux/users-reducer';
// import { setTotalUsersCount } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../Common/Preloader';

class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            // this.props.setTotalUsersCount(response.data.totalCount);
         })
   }
   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
         })
   }
   render() {
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            onPageChanged={this.onPageChanged}
         />
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
   }
}

export default connect(mapStateToProps, {
   setUsers,
   follow,
   unfollow,
   setCurrentPage,
   // setTotalUsersCount,
   toggleIsFetching
})(UsersContainer);