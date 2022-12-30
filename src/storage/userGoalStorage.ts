import { Period } from "../models/projectModels";
import { UserGoal } from "../models/userModels";

export async function getPersistedUserGoal(): Promise<UserGoal | null> {
  const goalCountResult = await chrome.storage.sync.get("userGoalCount");
  const goalCount = Number(goalCountResult.userGoalCount);

  const goalPeriodResult = await chrome.storage.sync.get("userGoalPeriod");
  const goalPeriod = goalPeriodResult.userGoalPeriod as Period;

  const goalPeriodStartResult = await chrome.storage.sync.get("userGoalPeriodStart");
  const goalPeriodStart = goalPeriodStartResult.userGoalPeriodStart as Date;

  if (goalCount !== undefined && goalPeriod !== undefined && goalPeriodStart !== undefined) {
    return { goal_count: goalCount, goal_period: goalPeriod, period_start: goalPeriodStart };
  } else {
    return null;
  }
}

export async function setPersistedUserGoal(goal: UserGoal) {
  await chrome.storage.sync.set({
    userGoalCount: JSON.stringify(goal.goal_count),
    userGoalPeriod: JSON.stringify(goal.goal_period),
    userGoalPeriodStart: JSON.stringify(goal.period_start),
  });
}

export async function showSetUserGoal(): Promise<boolean> {
  const goal = await getPersistedUserGoal();
  const skipSetGoalResult = await chrome.storage.sync.get("skipSetUserGoal");
  const skipSetGoal = JSON.parse(skipSetGoalResult.skipSetUserGoal);
  return goal === null && JSON.parse(skipSetGoal) === false;
}

export async function setSkipSetUserGoal(skipSetUserGoal: boolean) {
  await chrome.storage.sync.set({
    skipSetUserGoal: JSON.stringify(skipSetUserGoal),
  });
}
