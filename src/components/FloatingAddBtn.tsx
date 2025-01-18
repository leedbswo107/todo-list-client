import React from 'react';
import styled from 'styled-components';

const publicUrl = process.env.PUBLIC_URL;
const StyledFloatingAddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #6c63ff;
  border-radius: 50%;
  border: 2px solid #6c63ff;
  // position: absolute;
  cursor: pointer;
  transition: 0.3s;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:hover {
    background-color: #534cc2;
  }
  &:active {
    background-color: white;
  }
  img {
    width: 24px;
    height: 24px;
  }
`;

const FloatingAddBtn: React.FC = () => {
  return (
    <StyledFloatingAddBtn>
      <img src={`${publicUrl}/images/plus.svg`} alt="plus" />
    </StyledFloatingAddBtn>
  );
};

export default FloatingAddBtn;
