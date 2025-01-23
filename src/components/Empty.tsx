import React from 'react';
import { styled } from 'styled-components';

const StyledEmpty = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding-top: 4rem;
  gap: 1rem;
  align-items: center;
`;
const publicUrl = process.env.PUBLIC_URL;
const Empty: React.FC = () => {
  return (
    <StyledEmpty>
      <h3>Opps...</h3>
      <img src={`${publicUrl}/images/empty.svg`} alt="empty" />
    </StyledEmpty>
  );
};

export default Empty;
