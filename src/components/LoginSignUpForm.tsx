// LoginSignUpForm.tsx
import React, { useState } from 'react';
import { styled } from 'styled-components';
import LoginSignUpBtn from './LoginSignUpBtn';
import LoginSignUpInput from './LoginSignUpInput';

interface LoginSignUpFormProps {
  formType: 'login' | 'signup';
  onSubmit: (formData: {
    userId: string;
    username?: string;
    password: string;
  }) => void;
  // onLoginSubmit: (formData: { userId: string; password: string }) => void;
  // onSignUpSubmit: (formData: {
  //   userId: string;
  //   username: string;
  //   password: string;
  // }) => void;
}
const StyledLoginSignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const LoginSignUpForm: React.FC<LoginSignUpFormProps> = ({
  formType,
  onSubmit,
}) => {
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [idErrMsg, setIdErrMsg] = useState('');
  const [pwErrMsg, setPwErrMsg] = useState('');

  const handleErrMsg = () => {
    if (!/^[a-zA-Z][a-zA-Z0-9]{3,}$/.test(userId)) {
      setIdErrMsg('아이디는 4자 이상이어야 하며 영어로 시작해야 합니다.');
      console.log(idErrMsg);
      return false;
    } else {
      setIdErrMsg('');
    }
    if (password.length < 8) {
      setPwErrMsg('패스워드는 8자 이상이어야 합니다.');
      return false;
    } else {
      setPwErrMsg('');
    }
    return true;
  };
  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const isOk = handleErrMsg();
    isOk && onSubmit({ userId, password });
  };
  const handleSignUpSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleErrMsg();
    onSubmit({ userId, username, password });
  };
  const handleSubmit =
    formType === 'login' ? handleLoginSubmit : handleSignUpSubmit;

  return (
    <StyledLoginSignUpForm onSubmit={handleSubmit} className="form">
      <LoginSignUpInput
        id="id"
        label="ID"
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      {formType === 'signup' && (
        <LoginSignUpInput
          id="username"
          label={'Username'}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      )}
      <LoginSignUpInput
        id="password"
        label={'Password'}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <LoginSignUpBtn
        text={formType === 'login' ? 'Login' : 'Sign Up'}
        onClick={handleSubmit}
      />
    </StyledLoginSignUpForm>
  );
};

export default LoginSignUpForm;
