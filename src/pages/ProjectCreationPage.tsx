import { useEffect, useState, ChangeEvent } from "react";
import { Button } from "@material-tailwind/react";
import { getPersistedProjects, setPersistedProjects } from "../storage";
import { Project } from "../models/projectModels";
import { useNavigate } from "react-router-dom";

export default function ProjectCreationPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    loadProjects();
  }, []);

  const navigate = useNavigate();

  const loadProjects = async () => {
    const projects = await getPersistedProjects();
    setProjects(projects);
  };

  function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle((event.target as HTMLInputElement).value);
  }

  function handleDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
    setDescription((event.target as HTMLInputElement).value);
  }

  async function handleCreate() {
    const projectDefaults: Project = {
      title: "",
      description: "",
      created_at: new Date(),
      goal_count: 0,
      goal_period: "daily",
      goal_total: 500,
      status: "todo",
      start_time: new Date(),
      end_time: new Date(new Date().getDate() + 7),
    };
    const newProject: Project = {
      ...projectDefaults,
      title: title,
      description: description,
    };
    projects.push(newProject);
    await setPersistedProjects(projects);
    navigate(-1);
  }

  return (
    <div className="h-100 w-150 p-8 flex flex-col gap-1 items-start">
      <p>What’s the name of your project? *</p>
      <input className="border-2" type="text" value={title} onChange={handleTitleChange} />

      <p>What’s your project about?</p>
      <input
        className="border-2"
        type="text"
        value={description}
        onChange={handleDescriptionChange}
      />
      <Button onClick={handleCreate}>Create</Button>
    </div>
  );
}
