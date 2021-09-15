import React, { useRef } from 'react';

function Task5() {
  const componentRef = useRef();

  const lightTheme = () => {
    componentRef.current.style.color = '#000000';
    componentRef.current.style.backgroundColor = '#f1f1f1';
  };

  const darkTheme = () => {
    componentRef.current.style.color = '#f1f1f1';
    componentRef.current.style.backgroundColor = '#000000';
  };

  return (
    <div ref={componentRef}>
      <h3>Task 5</h3>
      <h1>h1 tag</h1>
      <p> p tag</p>
      <button onClick={lightTheme}>Light theme</button>
      <button onClick={darkTheme}>Dark theme</button>
    </div>
  );
}

export default Task5;

/* Task 5
Task 5 komponento viduje sukurkite h1 ir p žymas su tekstu ir du mygtukus.

Vienas mygtukas vadinsis "Light theme", kurį paspaudus Task5 komponento fonas
taps šios spalvos #f1f1f1, o tekstas #0000.
Kitas mygtukas vadinsis "Dark theme", kurį paspaudus Task5 komponento fonas
taps šios spalvos #000000, o tekstas #f1f1f1.

Pastabos:
- mygtukai turi būti atvaizduojami komponento viduje, jiems atskirų komponentų
kurti nereikia;
- panaudokite useRef.
*/
