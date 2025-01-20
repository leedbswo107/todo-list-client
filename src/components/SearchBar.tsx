import React from 'react';
import styled from 'styled-components';

const publicUrl = process.env.PUBLIC_URL;
const StyledSearchBar = styled.form`
  display: flex;
  width: 536px;
  height: 38px;
  border: 1px solid #6c63ff;
  border-radius: 5px;
  align-items: center;
  padding: 8px 16px;
  color: #6c63ff;
  filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 1));
  &:focus-within {
    outline: 2px solid rgba(108, 99, 255, 0.2);
    box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.5);
  }
  label {
    width: 47px;
    position: relative;
  }
  label::after {
    content: '';
    display: block;
    width: 2px;
    height: 100%;
    background: #6c63ff;
    position: absolute;
    top: 0px;
    right: 8px;
  }
  input {
    flex: 1;
    outline: none;
    background: none;
  }
  input::placeholder {
    color: #c3c1e5;
  }
  button {
    background: none;
    border: none;
    transition: 0.3s;
  }
  button:hover {
    transform: translateX(1px) translateY(1px);
  }
  button > img {
    width: 21px;
    height: 21px;
    outline: none;
    cursor: pointer;
  }
`;

const SearchBar: React.FC = () => {
  return (
    <StyledSearchBar>
      <label>Note</label>
      <input
        type="search"
        id="user-search"
        name="query"
        aria-label="사이트 내용을 통해 검색"
        placeholder="Search note..."
      />
      <button type="submit">
        <img src={`${publicUrl}/images/searchPurple.svg`} alt="search" />
      </button>
    </StyledSearchBar>
  );
};

export default SearchBar;
