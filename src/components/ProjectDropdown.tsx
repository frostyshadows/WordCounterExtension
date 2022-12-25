import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import { CreateNewProject, NoSelectedProject, Project, ProjectType } from "../ProjectType";

export default function ProjectDropdown() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects();
  });

  function getProjects(): ProjectType[] {
    return [];
  }

  function getProjectName(project: ProjectType): string {
    return project.title;
  }

  function handleProjectSelection(project: ProjectType) {
    if ((project as Project).title) {
      console.log("project is project");
      {
      }
    } else if (project as NoSelectedProject) {
      console.log("project is no selected");
      {
      }
    } else if (project as CreateNewProject) {
      console.log("project is create new");
    } else {
      console.log("project is unexpected");
    }
  }

  const projectOptions = projects as ProjectType[];
  projectOptions.push(new NoSelectedProject());
  projectOptions.push(new CreateNewProject());

  return (
    <Dropdown<ProjectType>
      options={projectOptions}
      optionName={(project) => getProjectName(project)}
      handleSelection={(project) => handleProjectSelection(project)}
    />
  );
}
