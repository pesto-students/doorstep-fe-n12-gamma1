import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import routes from "./routes";

export default function RoutingService() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </Router>
  );
}
