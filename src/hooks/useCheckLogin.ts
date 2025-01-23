import axios from 'axios';
import { useEffect } from 'react';
import useLoggedInStore from 'stores/useLoggedInStore';

const useCheckLogin = () => {
  const { setLogOutStatus, setLoggedInStatus } = useLoggedInStore();
  const checkLoginStatus = async (): Promise<void> => {
    try {
      const res = await axios.get('http://localhost:4000/auth/isLoggedIn', {
        withCredentials: true,
      });
      console.log('res.data', res.data);
      if (res.data.isLoggedIn) setLoggedInStatus();
    } catch (error) {
      setLogOutStatus();
    }
  };
  useEffect(() => {
    checkLoginStatus();
  }, []);
};

export default useCheckLogin;
