import React, { useContext } from 'react';
import { counterContext } from './Task6';

function CompB() {
  //context data
  const { counter, setCounter } = useContext(counterContext);

  return (
    <div>
      <h4>CompB</h4>
      <button onClick={() => setCounter(counter + 10)}>+10</button>
      <button onClick={() => setCounter(counter - 10)}>-10</button>
    </div>
  );
}

export default CompB;
