export class NoSelectedProject {
  title: string = "None";
}
export class CreateNewProject {
  title: string = "Create new...";
}

export type ProjectType = string | NoSelectedProject | CreateNewProject;
