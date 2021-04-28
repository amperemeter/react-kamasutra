import React from "react";

class ProfileStatus extends React.Component {
   state = {
      editMode: false,
      status: this.props.status,
   }

   activateEditMode = () => {
      this.setState({
         editMode: true,
      });
   }

   deactivateEditMode() {
      this.setState({
         editMode: false,
      });
      this.props.updateUserStatus(this.state.status);
   }

   onStatusChange = (e) => {
      this.setState({
         status: e.target.value,
      });
   }

   componentDidUpdate(prevProps) {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status,
         })
      }
   }

   render() {
      return <>
         {!this.state.editMode &&
            <span onClick={this.activateEditMode}>{this.props.status || "no status"}</span>
         }

         {this.state.editMode &&
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status || ""} type="text" />
         }
      </>
   }
}

export default ProfileStatus;