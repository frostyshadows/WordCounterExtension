import Dropdown from "./components/Dropdown";
import WordCountForm from "./components/WordCountForm";
import WordCountProgressBar from "./components/WordCountProgressBar";

function App() {
  const dummyDropdownProps = {
    options: ["Viridian", "Dreams of an Alien God"],
    optionName: (project: string) => project,
    handleSelection: (project: string) => {},
  };
  const dummyProgressProps = { current: 300, target: 500, period: "today" };

  return (
    <div className="p-8 flex flex-col gap-1 items-start">
      <Dropdown<string> {...dummyDropdownProps} />
      <WordCountForm />
      <WordCountProgressBar {...dummyProgressProps} />
    </div>
  );
}

export default App;
