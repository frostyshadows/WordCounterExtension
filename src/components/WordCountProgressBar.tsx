import { Progress } from "@material-tailwind/react";

interface Props {
  current: number;
  target: number;
  period: string;
}

export default function WordCountProgressBar({ current, target, period }: Props) {
  return (
    <div>
      <Progress value={(current / target) * 100} variant="filled" />
      <p>
        {current} / {target} words {period.replace(/["]+/g, "")}
      </p>
    </div>
  );
}
