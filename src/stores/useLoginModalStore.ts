import { create } from 'zustand';

type ModalState = {
  modalStatus: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
};

const useLoginModalStore = create<ModalState>((set) => ({
  modalStatus: false,
  openLoginModal: () => set({ modalStatus: true }),
  closeLoginModal: () => set({ modalStatus: false }),
}));

export default useLoginModalStore;
