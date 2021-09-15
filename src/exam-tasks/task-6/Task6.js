import React from 'react';
import { createContext, useState, useEffect } from 'react';

//components
import CompA from './CompA';
import CompB from './CompB';

//creating context api
export const counterContext = createContext();

function Task6() {
  //hooks
  // -- state
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('');

  // side effects
  useEffect(() => {
    setMessageInfo();
  });

  //custom functions
  const setMessageInfo = () => {
    if (counter === 100) {
      setMessage('didinti nebegalima');
    } else {
      setMessage('');
    }
  };
  return (
    <counterContext.Provider value={{ counter, setCounter }}>
      <div>
        <h3>Task 6</h3>
        <p>{counter}</p>
        <p>{message}</p>
        <CompA />
        <CompB />
      </div>
    </counterContext.Provider>
  );
}

export default Task6;

/* Task 6
task-6 aplanke rasite kelis komponetus. Task6 komponente, turi būti atvaizduojami
šie kompoentai: CompA (viduje turi <h2>CompA</h2> ir CompA1 (su tekstu <h3>CompA1</h3>)) 
ir CompB (viduje turi <h2>CompB</h2>).

Task6 komponentų medis
- CompA
-- CompA1
- CompB

Task6 viduje bus sukurtas Counter state'as, kuri bus galima valdyti iš CompA1 ir CompB
State'as bus valdomas su mygtkais, kurie leis state'ą padidinti 10 taškų arba pamažinti 10.
State'ui pasiekus 100, bus draudžiama didinti state'ą ir pasirodys pranešimas "Didinti nebegalima"

Pastaba: naudokite useState, useContext (Context API).

passinti mygtuka su jo state'u
*/
