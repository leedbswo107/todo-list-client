import axios from 'axios';

const useTodo = () => {
  const load = async (userId: string) => {
    try {
      const res = await axios.get(`http://localhost:4000/todo/${userId}`);
      const data = res.data;
      return data.list;
    } catch (err) {
      console.error(err);
    }
  };

  const create = async (userId: string, content: string) => {
    try {
      const res = await axios.put(
        `http://localhost:4000/todo/${userId}`,
        { content },
        { withCredentials: true },
      );
      window.location.reload();
      console.log('Response:', res.data);
    } catch (err: object) {
      console.error('Error:', err.response?.data || err.message);
    }
  };
  const edit = async (id: string, content: string) => {
    try {
      const res = await axios.post(
        `http://localhost:4000/todo/${id}`,
        { content },
        { withCredentials: true },
      );
      window.location.reload();
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };
  const remove = async (id: string) => {
    try {
      const res = await axios.delete(`http://localhost:4000/todo/${id}`);
      window.location.reload();
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };
  return { load, create, edit, remove };
};
export default useTodo;
