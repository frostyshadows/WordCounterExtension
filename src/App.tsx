import WordCountForm from "./components/WordCountForm";
import WordCountProgressBar from "./components/WordCountProgressBar";

function App() {
  const dummyProgressProps = { current: 300, target: 500, period: "today" };

  return (
    <div className="p-8">
      <WordCountForm />
      <WordCountProgressBar {...dummyProgressProps} />
    </div>
  );
}

export default App;
