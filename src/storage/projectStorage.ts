import { Project } from "../models/projectModels";

export async function getPersistedProjects(): Promise<Project[]> {
  const result = await chrome.storage.local.get("projects");
  if (result.projects !== undefined) {
    return JSON.parse(result.projects);
  } else {
    return [];
  }
}

export async function setPersistedProjects(projects: Project[]) {
  await chrome.storage.local.set({
    projects: JSON.stringify(projects),
  });
}

export async function getShowAddProject(): Promise<boolean> {
  const projects = await getPersistedProjects();
  if (projects.length > 0) {
    return false;
  }
  const showAddProjectResult = await chrome.storage.local.get("showAddProject");
  if (showAddProjectResult.showAddProject === undefined) {
    return true;
  }
  const showAddProject = JSON.parse(showAddProjectResult.showAddProject);
  return JSON.parse(showAddProject) === true;
}

export async function setShowAddProject(showAddProject: boolean) {
  await chrome.storage.local.set({
    showAddProject: JSON.stringify(showAddProject),
  });
}
