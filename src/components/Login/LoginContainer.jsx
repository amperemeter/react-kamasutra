import React from "react";
import { connect } from "react-redux";
import { getCaptchaUrl } from "../../redux/auth-reducer";
import Login from "./Login";

// const LoginContainer = (props) => {
//    useEffect(() => {
//       props.getCaptchaUrl();
//    }, []);
//    return <>
//       <Login {...props} />
//    </>
// }

class LoginContainer extends React.Component {
   componentDidMount() {
      // this.props.getCaptchaUrl();
   }

   render() {
      return (
         <div>
            <Login captchaUrl={this.props.captchaUrl} />
         </div>
      )
   }
}

let mapStateToProps = (state) => ({
   captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, { getCaptchaUrl })(LoginContainer);