import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/home";
import Browse from "./pages/browse";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./components/custom-hooks/use-auth-listener";

import * as ROUTES from "./constants/routes";

function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          {" "}
          <SignUp />
        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          {" "}
          <SignIn />
        </IsUserRedirect>

        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          {" "}
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          exact
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
