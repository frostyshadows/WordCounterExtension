export class Project {
  constructor(title: string) {
    this.title = title;
  }
  title: string;
}

export class NoSelectedProject {
  title: string = "None";
}
export class CreateNewProject {
  title: string = "Create new...";
}

export type ProjectType = Project | NoSelectedProject | CreateNewProject;
