import React, { useState } from 'react';
import { styled } from 'styled-components';
import LoginSignUpForm from './LoginSignUpForm';
import useAuth from '../hooks/useAuth';
import useLoginModalStore from 'stores/useLoginModalStore';
import useNightModeStore from 'stores/useNightModeStore';
const StyledSignInUp = styled.div<{ isNightMode: boolean }>`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  // position: absolute;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  top: 0;
  .container {
    position: absolute;
    top: 10%;
    padding: 16px;
    // background-color: #fafafa;
    background-color: ${({ isNightMode }) =>
      isNightMode ? '#252525' : '#fafafa'};
    margin: 0 auto;
    width: 500px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .innerCon {
    padding: 32px 16px;
    background-color: ${({ isNightMode }) =>
      isNightMode ? '#252525' : '#fafafa'};
    // background-color: white;
    border: 1px solid #eaeaea;
  }
  .mainTitle {
    color: #6c63ff;
    font-size: 64px;
    padding-bottom: 16px;
  }
  .innerTitle {
    margin-bottom: 16px;
  }
  h2 {
    display: flex;
    justify-content: center;
    position: relative;
  }
  h2 .test {
    // background-color: white;
    background-color: ${({ isNightMode }) =>
      isNightMode ? '#252525' : '#fafafa'};
    position: relative;
    padding: 0 4px;
    z-index: 10;
  }
  .test2 {
    display: block;
    width: 100%;
    height: 2px;
    top: 50%;
    position: absolute;
    transform: translate(0, -50%);
    background-color: #ccc;
  }
  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: ${({ isNightMode }) =>
      isNightMode ? '#252525' : '#fafafa'};
    border: 1px solid #eaeaea;
    padding: 16px 0;
  }
  .bottom button {
    background: none;
    border: none;
    color: #6c63ff;
    cursor: pointer;
  }
`;

const SignInUp: React.FC = () => {
  const { login, signUp } = useAuth();
  const { modalStatus, closeLoginModal } = useLoginModalStore();
  const { isNightMode } = useNightModeStore();
  const [test, setTest] = useState(true);
  const handleFormSubmit = (data: {
    userId: string;
    username?: string;
    password: string;
  }) => {
    const { userId, username, password } = data;
    // login(userId, password);
    test ? login(userId, password) : signUp(userId, username ?? '', password);

    closeLoginModal();
  };
  if (!modalStatus) return null;
  return (
    <StyledSignInUp isNightMode={isNightMode}>
      <div className="container">
        <div className="innerCon">
          <h2 className="mainTitle cookie-regular">todo</h2>
          <h2 className="innerTitle">
            <span className="test kanit-medium">
              {test ? 'Login' : 'Sign Up'}
            </span>{' '}
            <span className="test2"></span>
          </h2>
          {test ? (
            <LoginSignUpForm
              formType="login"
              onSubmit={({ userId, password }) =>
                handleFormSubmit({ userId, password })
              }
            />
          ) : (
            <LoginSignUpForm
              formType="signup"
              onSubmit={({ userId, username, password }) =>
                handleFormSubmit({ userId, username, password })
              }
            />
          )}
        </div>
        <div className="bottom kanit-medium">
          <span>{test ? '계정이 없으신가요?' : '계정이 이미 있으신가요?'}</span>
          <button onClick={() => setTest(!test)}>
            {test ? '가입하기' : '로그인하기'}
          </button>
        </div>
      </div>
    </StyledSignInUp>
  );
};

export default SignInUp;
