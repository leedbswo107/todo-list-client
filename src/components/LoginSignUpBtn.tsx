import React from 'react';
import { styled } from 'styled-components';

interface ButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const StyledLoginSignUp = styled.button`
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 8px 0;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #5850dd;
  }
`;
const LoginSignUpBtn: React.FC<ButtonProps> = ({ text, onClick }) => (
  <StyledLoginSignUp onClick={onClick}>{text}</StyledLoginSignUp>
);

export default LoginSignUpBtn;
