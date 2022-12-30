import ProjectDropdown from "../components/ProjectDropdown";
import WordCountForm from "../components/WordCountForm";
import WordCountProgressBar from "../components/WordCountProgressBar";
import { useNavigate } from "react-router-dom";
import { PROJECT_TITLE_CREATE_NEW, PROJECT_TITLE_NONE } from "../models/projectModels";
import { CREATE_PROJECT_ROUTE, SET_GOAL_ROUTE } from "../App";
import { useEffect, useState } from "react";
import { UserGoal } from "../models/userModels";
import { getPersistedUserGoal } from "../storage/userGoalStorage";

export default function ExtensionDashboardPage() {
  const [userGoal, setUserGoal] = useState<UserGoal | null>({
    goal_count: 0,
    goal_period: "daily",
    period_start: new Date(),
  });

  useEffect(() => {
    loadUserGoal();
  }, []);

  const loadUserGoal = async () => {
    const goal = await getPersistedUserGoal();
    setUserGoal(goal);
  };
  const [projectTitle, setProjectTitle] = useState(PROJECT_TITLE_NONE);

  const navigate = useNavigate();

  const handleProjectSelection = (projectTitle: string) => {
    if (projectTitle == PROJECT_TITLE_CREATE_NEW) {
      navigate(CREATE_PROJECT_ROUTE);
    } else {
      setProjectTitle(projectTitle);
    }
  };

  const projectDropdownProps = { onProjectSelected: handleProjectSelection };

  let progressBar;
  if (userGoal !== null) {
    const progressProps = {
      current: 100,
      target: userGoal.goal_count,
      period: userGoal.goal_period,
    };
    progressBar = <WordCountProgressBar {...progressProps} />;
  } else {
    navigate(SET_GOAL_ROUTE);
    progressBar = null;
  }
  return (
    <div className="h-100 w-150 p-8 flex flex-col gap-1 items-start">
      <ProjectDropdown {...projectDropdownProps} />
      <WordCountForm {...{ projectTitle }} />
      {progressBar}
    </div>
  );
}
