import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import ExtensionDashboardPage from "./pages/ExtensionDashboardPage";
import ProjectCreationPage from "./pages/ProjectCreationPage";
import SetUserGoalPage from "./pages/SetUserGoalPage";
import WelcomePage from "./pages/WelcomePage";

export const DASHBOARD_ROUTE = "/";
export const WELCOME_ROUTE = "/welcome";
export const CREATE_PROJECT_ROUTE = "/create_project";
export const SET_GOAL_ROUTE = "/set_goal";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={DASHBOARD_ROUTE} element={<ExtensionDashboardPage />} />
        <Route path={WELCOME_ROUTE} element={<WelcomePage />} />
        <Route path={CREATE_PROJECT_ROUTE} element={<ProjectCreationPage />} />
        <Route path={SET_GOAL_ROUTE} element={<SetUserGoalPage />} />
      </Routes>
    </Router>
  );
}
