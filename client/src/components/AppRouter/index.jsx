import React from "react";
import { Routes, Route } from "react-router-dom";
import { MAIN_ROUTE } from "../../utils/consts";
import { MainLayout } from "../../layouts";
import { MainLayoutRouts } from "../../utils/routes";
import { NotFound } from "../../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={MAIN_ROUTE} element={<MainLayout />}>
        {MainLayoutRouts.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
