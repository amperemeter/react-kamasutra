import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setUserProfile } from '../../redux/profile-reducer';
import Profile from '../Profile/Profile';
import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 16186;
      }
      profileAPI.getProfile(userId).then(data => {
         this.props.setUserProfile(data);
      })
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
   profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(withUrlDataContainerComponent);