// InputField.tsx
import React from 'react';
import { styled } from 'styled-components';

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
const StyledLoginSignUpInput = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid gray;
  border-radius: 5px;
  background: white;
  padding: 10px;
  input {
    margin-left: 8px;
    width: 100%;
    border: none;
    outline: none;
  }
`;
const LoginSignUpInput: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  value,
  onChange,
}) => (
  <StyledLoginSignUpInput>
    {/* <label htmlFor={id}>{label}</label> */}
    <input
      id={id}
      type={type}
      value={value}
      placeholder={label}
      onChange={onChange}
      required
      autoComplete="off"
    />
  </StyledLoginSignUpInput>
);

export default LoginSignUpInput;
