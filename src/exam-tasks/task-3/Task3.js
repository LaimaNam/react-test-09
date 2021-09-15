import React from 'react';
import styled from 'styled-components';
import { FaTwitter } from 'react-icons/fa';

//components
import Button from './components/Button';

const Wrapper = styled.div`
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;

  .twitter {
    font-size: 30px;
    color: #1da1f2;
  }
`;
const TwitterBox = styled.div`
  box-shadow: 1px 3px 16px -5px rgba(0, 0, 0, 0.7);
  background-color: #fff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: left;

  h1 {
    font-size: 3rem;
  }
  .btn-wrapper {
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 10px;
  }
`;

function Task3() {
  return (
    <Wrapper>
      <h3>Task 3</h3>
      <TwitterBox>
        <FaTwitter className="twitter" />
        <h1>Happening now</h1>
        <h3>Join Twitter today</h3>
        <div className="btn-wrapper">
          <Button text="Sign up" primary />
          <Button text="Log in" secondary />
        </div>
      </TwitterBox>
    </Wrapper>
  );
}

export default Task3;

/* Task 3
Atkurkite šį komponentą: https://prnt.sc/12978k7

Pastabos:
- turi būti sukurtas papildomas <Button> komponentas, kuris prims
du props: tekstas ir klasė. Remiantis jais bus atvaizduojamas
komponente nurodyti mygtukai;
- šriftas: naudokite savo parinktą;
- twitter logo, naudokite ikon'ą.
*/
