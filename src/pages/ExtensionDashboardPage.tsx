import ProjectDropdown from "../components/ProjectDropdown";
import WordCountForm from "../components/WordCountForm";
import WordCountProgressBar from "../components/WordCountProgressBar";
import { useNavigate } from "react-router-dom";
import { PROJECT_TITLE_CREATE_NEW, PROJECT_TITLE_NONE } from "../models/projectModels";
import { CREATE_PROJECT_ROUTE } from "../App";
import { useState } from "react";

export default function ExtensionDashboardPage() {
  const [projectTitle, setProjectTitle] = useState(PROJECT_TITLE_NONE);
  const navigate = useNavigate();

  const handleProjectSelection = (projectTitle: string) => {
    if (projectTitle == PROJECT_TITLE_CREATE_NEW) {
      navigate(CREATE_PROJECT_ROUTE);
    } else {
      setProjectTitle(projectTitle);
    }
  };

  const dummyProgressProps = { current: 300, target: 500, period: "today" };
  const projectDropdownProps = { onProjectSelected: handleProjectSelection };
  return (
    <div className="h-100 w-150 p-8 flex flex-col gap-1 items-start">
      <ProjectDropdown {...projectDropdownProps} />
      <WordCountForm {...{ projectTitle }} />
      <WordCountProgressBar {...dummyProgressProps} />
    </div>
  );
}
