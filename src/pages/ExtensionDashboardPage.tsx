import ProjectDropdown from "../components/ProjectDropdown";
import WordCountForm from "../components/WordCountForm";
import WordCountProgressBar from "../components/WordCountProgressBar";

export default function ExtensionDashboardPage() {
  const dummyProgressProps = { current: 300, target: 500, period: "today" };
  return (
    <div className="p-8 flex flex-col gap-1 items-start">
      <ProjectDropdown />
      <WordCountForm />
      <WordCountProgressBar {...dummyProgressProps} />
    </div>
  );
}
