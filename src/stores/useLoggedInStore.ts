import { create } from 'zustand';

type LogInState = {
  isLoggedIn: boolean;
  setLoggedInStatus: () => void;
  setLogOutStatus: () => void;
};

const useLoggedInStore = create<LogInState>((set) => ({
  isLoggedIn: false,
  setLoggedInStatus: () => set({ isLoggedIn: true }),
  setLogOutStatus: () => set({ isLoggedIn: false }),
}));

export default useLoggedInStore;
