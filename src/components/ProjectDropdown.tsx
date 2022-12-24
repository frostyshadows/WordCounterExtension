import Dropdown from "./Dropdown";
import { supabase } from "../supabase";
import { useEffect, useState } from "react";
import { Project } from "../exportedDbTypes";

export default function ProjectDropdown() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects();
  });

  const getProjects = async () => {
    let { data, error } = await supabase.from("Project").select();

    if (data) {
      setProjects(projects);
    }
  };

  return (
    <Dropdown<Project>
      options={projects}
      optionName={(project) => project.title}
      handleSelection={() => {}}
    />
  );
}
