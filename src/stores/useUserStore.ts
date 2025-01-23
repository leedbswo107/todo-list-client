import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  userId: string;
  username: string;
}
interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    { name: 'user-storage' },
  ),
);
export default useUserStore;
