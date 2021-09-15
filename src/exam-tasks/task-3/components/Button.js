import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  border-radius: 20px;
  padding: 10px 120px;
  border: 2px solid #1da1f2;
  cursor: pointer;

  font-weight: bolder;
  color: ${(props) => (props.primary ? '#fff' : '#1DA1F2')};
  background-color: ${(props) => (props.primary ? '#1DA1F2' : '#fff')};
`;

const Button = ({ text, primary, secondary }) => {
  return (
    <ButtonStyled primary={primary} secondary={secondary}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
