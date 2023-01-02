import ProjectDropdown from "../components/ProjectDropdown";
import WordCountForm from "../components/WordCountForm";
import WordCountProgressBar from "../components/WordCountProgressBar";
import { useNavigate } from "react-router-dom";
import { PROJECT_TITLE_CREATE_NEW, PROJECT_TITLE_NONE } from "../models/projectModels";
import { CREATE_PROJECT_ROUTE, SET_GOAL_ROUTE } from "../App";
import { useEffect, useState } from "react";
import { UserGoal } from "../models/userModels";
import { getPersistedUserGoal } from "../storage/userGoalStorage";
import { getPersistedUserWordCount } from "../storage/entryStorage";

export default function ExtensionDashboardPage() {
  const [userGoal, setUserGoal] = useState<UserGoal | null>({
    goal_count: 0,
    goal_period: "daily",
    period_start: Date.now(),
  });
  const [wordCount, setWordCount] = useState<number | null>(0);
  const [projectTitle, setProjectTitle] = useState(PROJECT_TITLE_NONE);

  useEffect(() => {
    loadDashboard();
    chrome.storage.onChanged.addListener(() => {
      loadDashboard();
    });
  }, [wordCount]);

  const loadDashboard = async () => {
    const goal = await getPersistedUserGoal();
    setUserGoal(goal);
    if (goal !== null) {
      const count = await getPersistedUserWordCount(goal);
      console.log("setting word count in dashboard: " + count);
      setWordCount(count);
    }
  };

  const navigate = useNavigate();

  const handleProjectSelection = (projectTitle: string) => {
    if (projectTitle == PROJECT_TITLE_CREATE_NEW) {
      navigate(CREATE_PROJECT_ROUTE);
    } else {
      setProjectTitle(projectTitle);
    }
  };

  const projectDropdownProps = { onProjectSelected: handleProjectSelection };

  const progressProps = {
    current: wordCount ?? 0,
    target: userGoal?.goal_count ?? 0,
    period: userGoal?.goal_period ?? "daily",
  };

  if (userGoal === null) {
    navigate(SET_GOAL_ROUTE);
  }

  return (
    <div className="h-100 w-150 p-8 flex flex-col gap-1 items-start">
      <ProjectDropdown {...projectDropdownProps} />
      <WordCountForm {...{ projectTitle }} />
      {userGoal !== null ? <WordCountProgressBar {...progressProps} /> : null}
    </div>
  );
}
