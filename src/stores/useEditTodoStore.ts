import { create } from 'domain';

type EditTodoState = {
  todoId: string;
  content: string;
};
const useEditTodoStore = create<EditTodoState>((set) => ({
  todoId: '',
  content: '',
}));
export default useEditTodoStore;
