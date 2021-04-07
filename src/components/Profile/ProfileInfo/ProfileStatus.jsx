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

   render() {
      return <>
         {!this.state.editMode &&
            <div>
               <span onDoubleClick={this.activateEditMode}>{this.state.status || "no status"}</span>
            </div>
         }

         {this.state.editMode &&
            <div>
               <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status || "no status"} type="text" />
            </div>
         }
      </>
   }
}

export default ProfileStatus;