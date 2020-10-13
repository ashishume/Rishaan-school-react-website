import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "../../containers/Dashboard";

const MainNavigation = () => {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          {/* <Route path="/doctors" exact component={Doctors} /> */}
          <Route path="*" component={() => "404 NOT FOUND"}>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default MainNavigation;
