import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import ExtensionDashboardPage from "./pages/ExtensionDashboardPage";
import ProjectCreationPage from "./pages/ProjectCreationPage";

export const DASHBOARD_ROUTE = "/";
export const CREATE_PROJECT_ROUTE = "/create_project";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={DASHBOARD_ROUTE} element={<ExtensionDashboardPage />} />
        <Route path={CREATE_PROJECT_ROUTE} element={<ProjectCreationPage />} />
      </Routes>
    </Router>
  );
}
