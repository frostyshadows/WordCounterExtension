import { ChangeEvent, useState } from "react";
import { Button } from "@material-tailwind/react";

export default function WordCountForm() {
  let [count, setCount] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const input = (event.target as HTMLInputElement).value;
    const numbersOnlyInput = input.replace(/\D/g, "");
    setCount(numbersOnlyInput)
  }

  function handleSubmit() {
    alert("A word count was submitted: " + count);
  }

  return (
    <div>
      <input
        className="border-2"
        type="text"
        value={count}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Log</Button>
    </div>
  );
}
