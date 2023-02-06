import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { CREATE_PROJECT_ROUTE, SET_GOAL_ROUTE } from "../App";
import { setShowAddProject } from "../storage/projectStorage";

export default function WelcomePage() {
  const navigate = useNavigate();

  async function handleAddProject() {
    navigate(-1);
    navigate(CREATE_PROJECT_ROUTE);
  }

  async function handleStartTracking() {
    setShowAddProject(false);
    navigate(-1);
    navigate(SET_GOAL_ROUTE);
  }

  return (
    <div className="h-100 w-150 p-8 flex flex-col gap-1 items-start">
      <p>Welcome to Wordy</p>
      <Button onClick={handleAddProject}>Add your first project goal</Button>
      <Button className="bg=transparent" onClick={handleStartTracking}>
        Start tracking without a project
      </Button>
      <p></p>
    </div>
  );
}
