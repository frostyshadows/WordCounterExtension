import { ChangeEvent, useState } from "react";
import { Button } from "@material-tailwind/react";
import { addPersistedEntry } from "../storage";

interface Props {
  projectTitle: string;
}

export default function WordCountForm({ projectTitle }: Props) {
  let [count, setCount] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const input = (event.target as HTMLInputElement).value;
    const numbersOnlyInput = input.replace(/\D/g, "");
    setCount(numbersOnlyInput);
  }

  function handleSubmit() {
    alert("A word count was submitted: " + count);
    addPersistedEntry({ project: projectTitle, timestamp: new Date(), count: Number(count) });
  }

  return (
    <div className="flex flex-1 gap-1">
      <input className="border-2" type="text" value={count} onChange={handleChange} />
      <Button onClick={handleSubmit}>Log</Button>
    </div>
  );
}
