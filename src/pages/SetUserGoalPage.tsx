import { Button } from "@material-tailwind/react";
import { useState, ChangeEvent } from "react";
import Dropdown from "../components/Dropdown";
import { Period, periodOptions } from "../models/periodModels";
import { setPersistedUserGoal } from "../storage/userGoalStorage";
import { useNavigate } from "react-router-dom";

export default function SetUserGoalPage() {
  let [count, setCount] = useState("");
  let [period, setPeriod] = useState<Period>("daily");

  const navigate = useNavigate();

  function handleCountChange(event: ChangeEvent<HTMLInputElement>) {
    const input = (event.target as HTMLInputElement).value;
    const numbersOnlyInput = input.replace(/\D/g, "");
    setCount(numbersOnlyInput);
  }

  function handlePeriodSelect(period: string) {
    setPeriod(period as Period);
  }

  async function handleSubmit() {
    console.log("A goal was submitted: " + count);
    await setPersistedUserGoal({
      goal_count: Number(count),
      goal_period: period,
      period_start: Date.now(),
    });
    navigate(-1);
  }

  return (
    <div className="flex p-8 flex-col gap-1 items-start">
      <p>I want to write...</p>
      <div className="flex flex-row gap-1 items-start">
        <input className="border-2" type="text" value={count} onChange={handleCountChange} />
        <p>words</p>
      </div>
      <Dropdown<Period>
        options={periodOptions}
        optionName={(period) => period}
        handleSelection={(period) => handlePeriodSelect(period)}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}
