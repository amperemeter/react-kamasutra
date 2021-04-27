import React from 'react';
import {
   follow,
   unfollow,
   setCurrentPage,
   requestUsers,
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {
   getUsers,
   getPageSize,
   getTotalUsersCount,
   getCurrentPage,
   getIsFetching,
   getFollowingInProgress,
} from '../../redux/users-selectors';


class UsersContainer extends React.Component {
   componentDidMount() {
      const { currentPage, pageSize } = this.props;
      this.props.requestUsers(currentPage, pageSize);
   }
   onPageChanged = (pageNumber) => {
      const { pageSize } = this.props;
      this.props.requestUsers(pageNumber, pageSize);
   }
   render() {
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users
            {...this.props}
            onPageChanged={this.onPageChanged}
         />
      </>
   }
}

const mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state),
   }
}

export default compose(
   connect(mapStateToProps, {
      follow,
      unfollow,
      setCurrentPage,
      requestUsers,
   }),
   withAuthRedirect
)(UsersContainer);