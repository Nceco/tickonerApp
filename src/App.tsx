import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import routes, { RouteItemType } from "./route/routes";

const App: React.FC = () => {
  console.log('xxhh')

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
            //主入口重定向到welcome页
            if (route?.path === '/') {
              return <Route key={route?.key} path={route?.path} Component={() => <Navigate to={'/welcome'}/>}/>
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
