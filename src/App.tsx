import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import ExtensionDashboardPage from "./pages/ExtensionDashboardPage";
import ProjectCreationPage from "./pages/ProjectCreationPage";
import SetUserGoalPage from "./pages/SetUserGoalPage";

export const DASHBOARD_ROUTE = "/";
export const CREATE_PROJECT_ROUTE = "/create_project";
export const SET_GOAL_ROUTE = "/set_goal";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={DASHBOARD_ROUTE} element={<ExtensionDashboardPage />} />
        <Route path={CREATE_PROJECT_ROUTE} element={<ProjectCreationPage />} />
        <Route path={SET_GOAL_ROUTE} element={<SetUserGoalPage />} />
      </Routes>
    </Router>
  );
}
