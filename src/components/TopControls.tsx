import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import NightModeToggleBtn from './NightModeToggleBtn';
import Category from './Category';

const StyledTopControls = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 18px;
`;
const TopControls: React.FC = () => {
  return (
    <StyledTopControls>
      <SearchBar />
      <Category />
      <NightModeToggleBtn />
    </StyledTopControls>
  );
};

export default TopControls;
