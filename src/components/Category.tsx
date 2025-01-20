import React, { useState } from 'react';
import styled from 'styled-components';
const StyledCategory = styled.div`
  width: 93px;
  position: relative;
  div {
    border: 1px solid #6c63ff;
    border-radius: 5px;
    background-color: #6c63ff;
    padding: 10px;
    color: white;
    cursor: pointer;
  }
  div:focus {
    background-color: rgba(108, 99, 255, 0.3);
  }
  ul {
    position: absolute;
    top: 100%;
    width: 100%;
    border: 1px solid #6c63ff;
    border-radius: 5px;
    color: #6c63ff;
    background-color: white;
    // display: ${(open) => (open ? 'none' : 'default')};
  }
  ul > li {
    padding: 8px 5px;
    transition: 0.3s;
    cursor: pointer;
  }
  ul > li:hover {
    background-color: rgba(108, 99, 255, 0.2);
  }
`;
const Category: React.FC = () => {
  const [open, setOpen] = useState(false);
  console.log('>>> ', open);
  return (
    <StyledCategory>
      <div onClick={() => setOpen(!open)}>All</div>
      {open && (
        <ul>
          <li>All</li>
          <li>Complete</li>
          <li>Incomplete</li>
        </ul>
      )}
    </StyledCategory>
  );
};

export default Category;
