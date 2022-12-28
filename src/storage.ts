import { Project } from "./models/projectModels";
import { Entry } from "./models/entryModels";

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

export async function getPersistedEntries(): Promise<Entry[]> {
  const result = await chrome.storage.sync.get("entries");
  if (result.entries !== undefined) {
    return JSON.parse(result.entries);
  } else {
    return [];
  }
}

export async function setPersistedEntries(entries: Entry[]) {
  await chrome.storage.sync.set({
    entries: JSON.stringify(entries),
  });
}

export async function addPersistedEntry(entry: Entry) {
  const entries = await getPersistedEntries();
  entries.push(entry);
  setPersistedEntries(entries);
}
