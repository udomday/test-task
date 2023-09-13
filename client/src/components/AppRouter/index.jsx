import React from "react";
import { Routes, Route } from "react-router-dom";
import { MAIN_ROUTE } from "../../utils/consts";
import { MainLayout } from "../../layouts";
import { MainLayoutRouts } from "../../utils/routes";

export const AppRouter = () => {
  console.log(MainLayoutRouts);
  return (
    <Routes>
      <Route path={MAIN_ROUTE} element={<MainLayout />}>
        {MainLayoutRouts.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Route>
    </Routes>
  );
};
