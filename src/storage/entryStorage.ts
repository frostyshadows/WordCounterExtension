import { Entry } from "../models/entryModels";
import { getPeriodMs } from "../models/periodModels";
import { UserGoal } from "../models/userModels";

export async function getPersistedEntries(): Promise<Entry[]> {
  const result = await chrome.storage.local.get("entries");
  if (result.entries !== undefined) {
    return JSON.parse(result.entries);
  } else {
    return [];
  }
}

export async function getPersistedUserWordCount(userGoal: UserGoal): Promise<number> {
  const entries = await getPersistedEntries();

  const currentTime = Date.now();
  const ellapsedMs = currentTime - userGoal.period_start;
  const currentPeriodStart = ellapsedMs % getPeriodMs(userGoal.goal_period);

  let wordCount = 0;
  entries.forEach((entry) => {
    const timeSinceEntry = currentTime - entry.timestamp;
    if (timeSinceEntry < currentPeriodStart) {
      wordCount += entry.count;
    }
  });
  return wordCount;
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
