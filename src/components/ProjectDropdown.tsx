import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Project,
  CreateNewProject,
  NoSelectedProject,
  ProjectType,
  PROJECT_TITLE_CREATE_NEW,
  PROJECT_TITLE_NONE,
} from "../models";
import { CREATE_PROJECT_ROUTE } from "../App";
import { getPersistedProjects } from "../storage";

export default function ProjectDropdown() {
  const [projects, setProjects] = useState<ProjectType[]>([
    new NoSelectedProject(),
    new CreateNewProject(),
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const projects = (await getPersistedProjects()) as ProjectType[];
    if (projects.length === 0) {
      projects.push(new NoSelectedProject());
    }
    projects.push(new CreateNewProject());
    setProjects(projects);
  };

  function getProjectName(project: ProjectType): string {
    if (project as Project) {
      return project.title;
    } else if (project as NoSelectedProject) {
      return project.title;
    } else if (project as CreateNewProject) {
      return project.title;
    }
    return "";
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

  return (
    <Dropdown<ProjectType>
      options={projects}
      optionName={(project) => getProjectName(project)}
      handleSelection={(projectTitle) => handleProjectSelection(projectTitle)}
    />
  );
}
