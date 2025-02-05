import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  font-size: 24px;
  text-align: center;
`;

const Header: React.FC = () => {
  return <StyledHeader className="kanit-medium">TODO LIST</StyledHeader>;
};

export default Header;
