export const PROJECT_TITLE_NONE = "None";
export const PROJECT_TITLE_CREATE_NEW = "Create new...";

export type Period = "daily" | "weekly" | "monthly" | "yearly";
export type Status = "todo" | "inprogress" | "complete";

export interface Titleable {
  title: string;
}

export interface Project {
  title: string;
  description?: string;
  created_at: Date;
  goal_count?: number;
  goal_period?: Period;
  goal_total?: number;
  status?: Status;
  start_time?: Date;
  end_time?: Date;
}

export class NoSelectedProject {
  title: string = PROJECT_TITLE_NONE;
}
export class CreateNewProject {
  title: string = PROJECT_TITLE_CREATE_NEW;
}

export type ProjectType = Project | NoSelectedProject | CreateNewProject;
