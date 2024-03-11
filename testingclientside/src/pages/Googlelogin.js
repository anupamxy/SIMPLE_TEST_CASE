import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  
  const {user, loginWithRedirect } = useAuth0();
  console.log(user);

  return <button onClick={() => loginWithRedirect()}> SSO Log In</button>;
};

export default LoginButton;