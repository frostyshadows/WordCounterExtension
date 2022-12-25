export const PROJECT_TITLE_NONE = "None";
export const PROJECT_TITLE_CREATE_NEW = "Create new...";

export class Project {
  constructor(title: string) {
    this.title = title;
  }
  title: string;
}

export class NoSelectedProject {
  title: string = PROJECT_TITLE_NONE;
}
export class CreateNewProject {
  title: string = PROJECT_TITLE_CREATE_NEW;
}

export type ProjectType = Project | NoSelectedProject | CreateNewProject;
