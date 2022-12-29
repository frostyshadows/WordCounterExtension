import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import { CreateNewProject, NoSelectedProject, ProjectType } from "../models/projectModels";
import { getPersistedProjects } from "../storage/projectStorage";

interface Props {
  onProjectSelected: (projectTitle: string) => void;
}

export default function ProjectDropdown({ onProjectSelected }: Props) {
  const [projects, setProjects] = useState<ProjectType[]>([
    new NoSelectedProject(),
    new CreateNewProject(),
  ]);

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
    onProjectSelected(projects[0].title);
  };

  function getProjectName(project: ProjectType): string {
    return project.title;
  }

  return (
    <Dropdown<ProjectType>
      options={projects}
      optionName={(project) => getProjectName(project)}
      handleSelection={(projectTitle) => onProjectSelected(projectTitle)}
    />
  );
}
