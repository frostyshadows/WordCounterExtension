import { useState, ChangeEvent } from "react";
import { Button } from "@material-tailwind/react";

export default function ProjectCreationPage() {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");

  function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle((event.target as HTMLInputElement).value);
  }

  function handleDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
    setDescription((event.target as HTMLInputElement).value);
  }

  function handleCreate() {
    alert("A project was submitted");
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
