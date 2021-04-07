import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profile-reducer";
import Profile from "../Profile/Profile";

class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 16186;
      }
      this.props.getUserProfile(userId);
      this.props.getUserStatus(userId);
   }

   render() {
      return (
         <div>
            <Profile {...this.props} />
         </div>
      )
   }
}

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
})

export default compose(
   connect(
      mapStateToProps,
      {
         getUserProfile,
         getUserStatus,
         updateUserStatus
      }),
   withRouter,
)(ProfileContainer);