import React, { useContext } from 'react';
import { counterContext } from './Task6';

function CompA1() {
  //context data
  const { counter, setCounter } = useContext(counterContext);

  return (
    <div>
      <h5>CompA1</h5>
      <button onClick={() => setCounter(counter + 10)}>+10</button>
      <button onClick={() => setCounter(counter - 10)}>-10</button>
    </div>
  );
}

export default CompA1;
