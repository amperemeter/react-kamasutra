import React from "react";

const Login = ({ captchaUrl }) => {
   return <>
      <h1>Login</h1>
      {captchaUrl && <img src={captchaUrl} alt="captcha" />}
   </>
}

export default Login;