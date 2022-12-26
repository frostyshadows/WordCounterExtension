const PROJECTS_KEY = "key";

export async function getProjects(): Promise<string[]> {
  const result = await chrome.storage.sync.get(PROJECTS_KEY);
  return result.key;
}

export async function setProjects(projects: string[]) {
  await chrome.storage.sync.set({ PROJECTS_KEY: projects });
  console.log(`Value is set to ${projects}`);
}
