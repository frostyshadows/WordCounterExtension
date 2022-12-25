import { ChangeEvent, ReactNode } from "react";

interface Props<T> {
  options: Array<T>;
  optionName: (option: T) => string;
  handleSelection: (option: string) => void;
}

export default function Dropdown<T>({ options, optionName, handleSelection }: Props<T>) {
  return (
    <div>
      <select
        onChange={(event: ChangeEvent<HTMLSelectElement>) => {
          handleSelection((event.target as HTMLSelectElement).value as string);
        }}
      >
        {options.map((option: T) => (
          <option>{optionName(option)}</option>
        ))}
      </select>
    </div>
  );
}
