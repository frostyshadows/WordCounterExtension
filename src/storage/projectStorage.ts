import { Project } from "../models/projectModels";

export async function getPersistedProjects(): Promise<Project[]> {
  const result = await chrome.storage.sync.get("projects");
  if (result.projects !== undefined) {
    return JSON.parse(result.projects);
  } else {
    return [];
  }
}

export async function setPersistedProjects(projects: Project[]) {
  await chrome.storage.sync.set({
    projects: JSON.stringify(projects),
  });
}

export async function showAddProject(): Promise<boolean> {
  const projects = await getPersistedProjects();
  const skipAddProjectResult = await chrome.storage.sync.get("skipAddProject");
  const skipAddProject = JSON.parse(skipAddProjectResult.skipAddProject);
  return projects.length === 0 && JSON.parse(skipAddProject) === false;
}

export async function setSkipAddProject(skipAddProject: boolean) {
  await chrome.storage.sync.set({
    skipAddProject: JSON.stringify(skipAddProject),
  });
}
