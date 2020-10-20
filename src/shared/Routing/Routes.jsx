import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { Route, Switch, Redirect } from "react-router-dom";
import Admission from "../../containers/Admissions";
import ContactUs from "../../containers/ContactUs";
import Dashboard from "../../containers/Dashboard";

const MainNavigation = () => {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/contact-us" exact component={ContactUs} />
          <Route path="/admissions" exact component={Admission} />
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
