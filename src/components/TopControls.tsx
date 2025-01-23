import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import NightModeToggleBtn from './NightModeToggleBtn';
import Category from './Category';
import LoginBtn from './LoginBtn';

const StyledTopControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding-top: 18px;
`;
const TopControls: React.FC = () => {
  return (
    <StyledTopControls>
      <SearchBar />
      <Category />
      <LoginBtn />
      <NightModeToggleBtn />
    </StyledTopControls>
  );
};

export default TopControls;
