import useNightModeStore from 'stores/useNightModeStore';
import styled, { createGlobalStyle } from 'styled-components';

const bgColor = localStorage.getItem('isNightMode');
const GlobalStyle = createGlobalStyle<{ bgColor: string }>`
  body {
    background-color: ${bgColor === 'true' ? 'black' : 'white'};
  }
`;

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
  const { isNightMode, toggleNightMode } = useNightModeStore();
  return (
    <>
      <GlobalStyle bgColor={bgColor} />
      <StyledNightModeToggleBtn onClick={toggleNightMode}>
        <img
          src={
            isNightMode
              ? `${publicUrl}/images/moon.svg`
              : `${publicUrl}/images/sun.svg`
          }
          alt="moon"
        />
      </StyledNightModeToggleBtn>
    </>
  );
};

export default NightModeToggleBtn;
