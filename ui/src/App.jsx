import { useAuth0 } from "@auth0/auth0-react";
import * as React from "react";
import Admin from "./views/Admin/Admin.jsx";
import Student from "./views/Student/Student.jsx";
import Tutor from "./views/Tutor/Tutor.jsx";

export default () => {
  const {
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    user,
    getAccessTokenSilently,
  } = useAuth0();

  const [role, setRole] = React.useState(-1);

  React.useEffect(() => {
    if (user == null) {
      return;
    }

    fetch("/users/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authentication: `Bearer ${getAccessTokenSilently().then((t) => t)}`,
      },
      body: JSON.stringify({ name: user.name, email: user.email }),
    })
      .then((response) => response.json())
      .then((data) => setRole(data.role))
      .catch((e) => console.log(e));
  }, [user]);

  if (isLoading) {
    return "Loading...";
  }

  if (isAuthenticated) {
    switch (role) {
      case 0:
        return <Student user={user} />;
      case 1:
        return <Student user={user} />;
      case 2:
        return <Tutor />;
      case 3:
        return <Admin />;
      default:
        return "Loading...";
    }
  } else {
    return loginWithRedirect();
  }
};
