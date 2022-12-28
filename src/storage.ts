import { Project } from "./models";

export async function getPersistedProjects(): Promise<Project[]> {
  const temp = await chrome.storage.sync.get(null);
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
