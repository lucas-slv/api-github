import { Routes, Route } from "react-router-dom";

import { MainPage } from "./pages/MainPage";
import { RepositoriesPage } from "./pages/RepositoriesPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path="/:login/repositories" element={<RepositoriesPage />}/>
    </Routes>
  );
}
