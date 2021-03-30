import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import Profile from '../Profile/Profile';

class ProfileContainer extends React.Component {
   componentDidMount() {
      axios.get("https://social-network.samuraijs.com/api/1.0/profile/2")
         .then(response => {
            this.props.setUserProfile(response.data);
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

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);