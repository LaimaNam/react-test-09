import React, { useReducer } from 'react';

const initialState = {
  likes: 0,
  dislikes: 0,
  active: null,
};

const reducer = (state, action) => {
  const { likes, dislikes, active } = state;

  switch (action.type) {
    case 'LIKE':
      return {
        ...state,
        likes: state.likes + 1,
        dislikes: active === 'dislike' ? dislikes - 1 : dislikes,
        active: 'like',
      };
    case 'DISLIKE':
      return {
        ...state,
        dislikes: dislikes + 1,
        likes: active === 'like' ? likes - 1 : likes,
        active: 'dislike',
      };
    default:
      return state;
  }
};

function Task2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { likes, dislikes, active } = state;

  return (
    <div>
      <h3>Task 2</h3>
      <button
        onClick={() => (active !== 'like' ? dispatch({ type: 'LIKE' }) : null)}
      >
        &#128078;
      </button>
      <span>{likes}</span>
      <button
        onClick={() =>
          active !== 'dislike' ? dispatch({ type: 'DISLIKE' }) : null
        }
      >
        &#128077;
      </button>{' '}
      <span>{dislikes}</span>
    </div>
  );
}

export default Task2;

/* Task 2
Atkurkite šį komponentą: https://prnt.sc/1296zmk

Pastabos, vartotojui leidžiama balsuoti, tik vieną kartą. 
Paspaudus ant vieno mygtuko, antrą kartą paspausti ant jo 
negalima, tačiau leidžiama pakeisti nuomonę ir paspausti 
ant kito. Tokiu atveju nuo prieš tai paspausto balsas "nuimamas"
ir perduodamas kitam.

Pastaba: būtina panaudoti useReducer
*/
