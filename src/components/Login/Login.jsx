import React from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router";

const Login = (props) => {
   // if (props.isAuth) {
   //    return <Redirect to={"/profile"} />
   // }

   return <>
      <h1>Login</h1>
      {props.captchaUrl && <img src={props.captchaUrl} alt="captcha" />}
   </>
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, null)(Login);