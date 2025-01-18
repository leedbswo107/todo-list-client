// import useModeSwitch from 'hooks/useModeSwitch';
import React, { useState } from 'react';
import styled from 'styled-components';
const publicUrl = process.env.PUBLIC_URL;

const StyledNightModeToggleBtn = styled.button`
  display: flex;
  width: 38px;
  height: 38px;
  background-color: #6c63ff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  img {
    width: 22px;
    height: 22px;
  }
  &:hover {
    background-color: #5850dd;
  }
`;
const NightModeToggleBtn: React.FC = () => {
  const [mode, setMode] = useState(false);
  return (
    <StyledNightModeToggleBtn onClick={() => setMode(!mode)}>
      <img
        src={
          mode ? `${publicUrl}/images/moon.svg` : `${publicUrl}/images/sun.svg`
        }
        alt="moon"
      />
    </StyledNightModeToggleBtn>
  );
};

export default NightModeToggleBtn;
