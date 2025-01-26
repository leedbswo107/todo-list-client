import { create } from 'zustand';

type EditTodoState = {
  todoId: string;
  content: string;
  setTodoId: (todoId: string) => void;
  setContent: (content: string) => void;
};
const useEditTodoStore = create<EditTodoState>((set) => ({
  todoId: '',
  content: '',
  setTodoId: (todoId: string) => set(() => ({ todoId })),
  setContent: (content: string) => set(() => ({ content })),
}));
export default useEditTodoStore;
