import { create } from 'zustand';

type EditModalState = {
  editModalStatus: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const useEditModalStore = create<EditModalState>((set) => ({
  editModalStatus: false,
  openModal: () => set({ editModalStatus: true }),
  closeModal: () => set({ editModalStatus: false }),
}));

export default useEditModalStore;
