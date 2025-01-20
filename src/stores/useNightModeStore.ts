import { create } from 'zustand';

type NightModeState = {
  isNightMode: boolean;
  toggleNightMode: () => void;
};

const useNightModeStore = create<NightModeState>((set) => ({
  isNightMode: JSON.parse(localStorage.getItem('isNightMode') || 'false'),
  toggleNightMode: () =>
    set((state) => {
      const newMode = !state.isNightMode;
      localStorage.setItem('isNightMode', JSON.stringify(newMode));
      return { isNightMode: newMode };
    }),
}));
export default useNightModeStore;
