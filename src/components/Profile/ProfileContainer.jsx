import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getUserProfile } from '../../redux/profile-reducer';
import Profile from '../Profile/Profile';

class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 16186;
      }
      this.props.getUserProfile(userId);
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

export default connect(mapStateToProps, { getUserProfile })(withUrlDataContainerComponent);