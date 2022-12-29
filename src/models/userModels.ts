import { Period } from "./projectModels";

export interface UserGoal {
  goal_count: number;
  goal_period: Period;
  period_start: Date;
}
