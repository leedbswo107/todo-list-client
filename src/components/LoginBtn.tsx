import useLoginModalStore from 'stores/useLoginModalStore';
import { styled } from 'styled-components';
import useAuth from 'hooks/useAuth';
import useCheckLogin from 'hooks/useCheckLogin';
import useUserStore from 'stores/useUserStore';

const publicUrl = process.env.PUBLIC_URL;
const StyledLoginBtn = styled.button`
  display: flex;
  width: 76px;
  height: 38px;
  color: white;
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

const LoginBtn: React.FC = () => {
  const { openLoginModal } = useLoginModalStore();
  const { logout } = useAuth();
  const user = useUserStore((state) => state.user);
  const clearUser = useUserStore((state) => state.clearUser);
  const logoutProcess = () => {
    logout();
    clearUser();
  };
  useCheckLogin();
  return (
    <StyledLoginBtn
      className="kanit-regular"
      onClick={user ? logoutProcess : openLoginModal}
    >
      {user ? 'LOGOUT' : 'LOGIN'}
      {/* <img src={`${publicUrl}/images/user.svg`} alt="login" /> */}
    </StyledLoginBtn>
  );
};

export default LoginBtn;
