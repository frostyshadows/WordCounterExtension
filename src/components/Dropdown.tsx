import { Select, Option } from "@material-tailwind/react";
import { ReactNode } from "react";

interface Props<T> {
  options: Array<T>;
  optionName: (option: T) => string;
  handleSelection: (option: T) => void;
}

export default function Dropdown<T>({ options, optionName, handleSelection }: Props<T>) {
  return (
    <div>
      <Select variant="standard" onChange={(value?: ReactNode) => handleSelection(value as T)}>
        {options.map((option: T) => (
          <Option>{optionName(option)}</Option>
        ))}
      </Select>
    </div>
  );
}
