import { create } from 'zustand';

type ModalState = {
  modalStatus: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const useModalStore = create<ModalState>((set) => ({
  modalStatus: false,
  openModal: () => set({ modalStatus: true }),
  closeModal: () => set({ modalStatus: false }),
}));

export default useModalStore;
