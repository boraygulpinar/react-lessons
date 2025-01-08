import { useState } from 'react'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState('Alp');
  const [surName, setSurName] = useState('Gulpinar');
  const [names, setNames] = useState(["ali", "veli", "mehmet"]);
  const [count, setCount] = useState(0);

  const handleChange = () => {
    setFirstName("Boray");
  }

  const arttir = () => {
    setCount(count + 1)
  }
  console.log("Component Render Edildi.")

  return (
    <div>
      <div>{firstName}</div>
      <div>
        <button onClick={handleChange}>İsmi Değiştir</button>
      </div>

      <div>{count}</div>
      <div>
        <button onClick={arttir}>Arttır</button>
      </div>
    </div>
  )
}

export default App
