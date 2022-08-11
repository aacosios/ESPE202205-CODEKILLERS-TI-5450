import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button style={{backgroundColor: 'teal', borderColor: 'aqua', color: 'silver',}} onClick={() => loginWithRedirect()}>Login</button>;
};
