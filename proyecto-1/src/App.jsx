import { useEffect, useReducer, useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [handle, handleRefetch] = useReducer((x) => x + 1, 0);
  console.log(number);
  useEffect(() => {
    setIsLoading(true);
    getNumber().then(setNumber);
  }, [handle])

  useEffect(() => {
    if (number) setIsLoading(false);
  }, [number])
  const getNumber = async () => {
    try {
      const response = await fetch("https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new");
      const numberString = await response.text();
      return numberString;
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <h1>Numero aleatorio: {number || "Loading..."}</h1>
      <button disabled={isLoading} onClick={handleRefetch}>Generar Numero</button>
    </div>
  )
}

export default App;
