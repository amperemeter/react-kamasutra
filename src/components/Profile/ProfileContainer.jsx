import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto } from "../../redux/profile-reducer";
import Profile from "../Profile/Profile";

class ProfileContainer extends React.Component {
   updateProfile() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = this.props.authorizedUserId;
      }
      this.props.getUserProfile(userId);
      this.props.getUserStatus(userId);
   }
   componentDidMount() {
      this.updateProfile();
   }

   componentDidUpdate(prevProps) {
      if (this.props.match.params.userId !== prevProps.match.params.userId) {
         this.updateProfile();
      }
   }

   render() {
      return (
         <div>
            <Profile {...this.props} isOwner={!this.props.match.params.userId} />
         </div>
      )
   }
}

let mapStateToProps = (state) => ({
   authorizedUserId: state.auth.userId,
   isAuth: state.auth.isAuth,
   profile: state.profilePage.profile,
   status: state.profilePage.status,
})

export default compose(
   connect(
      mapStateToProps,
      {
         getUserProfile,
         getUserStatus,
         updateUserStatus,
         savePhoto,
      }),
   withRouter
)(ProfileContainer);