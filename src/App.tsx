import React from "react";
import { Route, Routes } from "react-router-dom";

import routes, { RouteItemType } from "./route/routes";

const App: React.FC = () => {

  function transformRoute (routes: RouteItemType[]){
    return (
      <>
        {
          routes.map((route) => {
            if (route?.children && route?.children.length > 0) {
              return (
                <Route key={route?.key} path={route?.path} Component={route?.component}>
                  {transformRoute(route.children)}
                </Route>
              )
            }
            return <Route key={route?.key} path={route?.path} Component={route?.component}/>
          })
        }
      </>
    )
  }

  return (
    <Routes>
      {transformRoute(routes)}
    </Routes>
  )
}

export default App
