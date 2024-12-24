import './App.css';
import { useState } from 'react';
import { useReducer } from 'react';

function App() {
  // const [count, setCount] = useState(0);
  const [count, countDispatch] = useReducer(countReducer, 0);
  const [number, setNumber] = useState(1);

  function changeNumber(e) {
    setNumber(Number(e.target.value));
  }

  function countReducer(oldCount, action) {
    if (action.type === 'UP') {
      return oldCount + action.number;
    } else if (action.type === 'DOWN') {
      return oldCount - action.number;
    } else if (action.type === 'RESET') {
      return 0;
    }
  }

  function down() {
    // setCount(count-1);
    countDispatch({ type: 'DOWN', number: number });
  }

  function reset() {
    // setCount(0);
    countDispatch({ type: 'RESET', number: number });
  }

  function up() {
    // setCount(count+1);
    countDispatch({ type: 'UP', number: number });
  }

  return (
    <div className="App">
      {/* <input type="button" value="-" onClick={() => setCount(count-1)} /> */}
      <input type="button" value="-" onClick={down} />
      <input type="button" value="0" onClick={reset}/>
      <input type="button" value="+" onClick={up}/>
      <input type="text" value={number} onChange={changeNumber} />
      <span>{count}</span>
    </div>
  );
}

export default App;
