import { create } from 'zustand';

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

const useUserStore = create<UserStore>()((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
  clearUser: () => set(() => ({ user: null })),
}));
export default useUserStore;
