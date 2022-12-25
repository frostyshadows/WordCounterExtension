import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import { CreateNewProject, NoSelectedProject, ProjectType } from "../ProjectType";
import { getProjects } from "../storage";

export default function ProjectDropdown() {
  const [projects, setProjects] = useState<ProjectType[]>([new CreateNewProject()]);

  useEffect(() => {
    loadProjects();
  });

  const loadProjects = async () => {
    const projects = (await getProjects()) as ProjectType[];
    projects.push(new CreateNewProject());
    setProjects(projects);
  };

  function getProjectName(project: ProjectType): string {
    if (typeof project === "string") {
      return project;
    } else if (project as NoSelectedProject) {
      return project.title;
    } else if (project as CreateNewProject) {
      return project.title;
    }
    return "";
  }

  function handleProjectSelection(project: ProjectType) {
    if (project as string) {
      console.log("project is project");
    } else if (project as NoSelectedProject) {
      console.log("project is no selected");
    } else if (project as CreateNewProject) {
      console.log("project is create new");
    } else {
      console.log("project is unexpected");
    }
  }

  return (
    <Dropdown<ProjectType>
      options={projects}
      optionName={(project) => getProjectName(project)}
      handleSelection={(project) => handleProjectSelection(project)}
    />
  );
}
