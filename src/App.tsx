import { useState } from 'react'
import WordCountForm from './components/WordCountForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-8">
      <div>
        <WordCountForm />
      </div>
    </div>
  )
}

export default App
