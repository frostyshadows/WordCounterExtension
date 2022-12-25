import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreateNewProject,
  NoSelectedProject,
  Project,
  ProjectType,
  PROJECT_TITLE_CREATE_NEW,
  PROJECT_TITLE_NONE,
} from "../ProjectType";
import { CREATE_PROJECT_ROUTE } from "../App";

export default function ProjectDropdown() {
  const [projects, setProjects] = useState<Project[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProjects();
  });

  function getProjects(): ProjectType[] {
    return [];
  }

  function getProjectName(project: ProjectType): string {
    return project.title;
  }

  function handleProjectSelection(projectTitle: string) {
    switch (projectTitle) {
      case PROJECT_TITLE_NONE: {
        console.log("project is none");
      }
      case PROJECT_TITLE_CREATE_NEW: {
        console.log("project is create new");
        navigate(CREATE_PROJECT_ROUTE);
      }
      default: {
        console.log("project is project");
      }
    }
  }

  const projectOptions = projects as ProjectType[];
  projectOptions.push(new NoSelectedProject());
  projectOptions.push(new CreateNewProject());

  return (
    <Dropdown<ProjectType>
      options={projectOptions}
      optionName={(project) => getProjectName(project)}
      handleSelection={(projectTitle) => handleProjectSelection(projectTitle)}
    />
  );
}
