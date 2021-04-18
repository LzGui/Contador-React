import './App.css';
import { useEffect, useState } from 'react';

const styles = {
  display:{
    margin: 5
  }
}

function App() {

  const [count, setCount] = useState(0);
  function increment(){
    setCount(count + 1);
  }

  function decrement(){
    setCount(count - 1);
  }

  useEffect(() => {
    if (count < 0){
      alert("Negativo!");
    }
  }, [count])
  
  return (
    <div className="App">
      <div className="display">{count}</div>

      <button onClick={increment} style={styles.button}>+</button>
      <button onClick={decrement} style={styles.button}>-</button>
      
    </div>
  );
}

export default App;
