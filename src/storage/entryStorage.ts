import { Entry } from "../models/entryModels";

export async function getPersistedEntries(): Promise<Entry[]> {
  const result = await chrome.storage.local.get("entries");
  if (result.entries !== undefined) {
    return JSON.parse(result.entries);
  } else {
    return [];
  }
}

export async function setPersistedEntries(entries: Entry[]) {
  await chrome.storage.local.set({
    entries: JSON.stringify(entries),
  });
}

export async function addPersistedEntry(entry: Entry) {
  const entries = await getPersistedEntries();
  entries.push(entry);
  setPersistedEntries(entries);
}
