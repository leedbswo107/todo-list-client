import axios from 'axios';
import { useState } from 'react';
import useLoggedInStore from 'stores/useLoggedInStore';
import useUserStore from 'stores/useUserStore';

interface AuthResponse {
  token: string;
  user?: {
    userId?: string;
    username?: string;
  };
}

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const { setLoggedInStatus, setLogOutStatus } = useLoggedInStore();
  const setUser = useUserStore((state) => state.setUser);
  const login = async (userId: string, password: string) => {
    try {
      setLoading(true);
      const response = await axios.post<AuthResponse>(
        'http://localhost:4000/auth/login',
        { userId, password },
        { withCredentials: true },
      );
      const data = response.data;
      console.log(data);

      // setUserId(data.userId);
      // console.log('>>> userId', userId);
      setLoggedInStatus();
      window.location.reload();
    } catch (error) {
      console.log('login error', error);
    } finally {
      setLoading(false);
      return;
    }
  };
  const signUp = async (userId: string, username: string, password: string) => {
    try {
      setLoading(true);
      console.log(userId, username, password);
      await axios.post(
        'http://localhost:4000/auth/register',
        {
          userId,
          username,
          password,
        },
        { withCredentials: true },
      );
    } catch (error) {
      console.log('signUp error', error);
    } finally {
      setLoading(false);
      return;
    }
  };
  const logout = async () => {
    try {
      await axios.post(
        'http://localhost:4000/auth/logout',
        {},
        { withCredentials: true },
      );
      setLogOutStatus();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUserInfo = async () => {
    try {
      const userInfo = await axios.post(
        'http://localhost:4000/auth/isLoggedIn',
        {},
        { withCredentials: true },
      );
      console.log('userInfo??? ', userInfo.data);
      setUser(userInfo.data);
      // console.log('>>> ', user);
    } catch (error) {
      console.log(error);
    }
  };
  return { login, signUp, logout, loading, fetchUserInfo };
};
export default useAuth;
