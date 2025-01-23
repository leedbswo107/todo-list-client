import useTodo from 'hooks/useTodo';
import React, { useState } from 'react';
import useEditModalStore from 'stores/useEditModalStore';
import useModalStore from 'stores/useModalStore';
import useUserStore from 'stores/useUserStore';
import { styled } from 'styled-components';

const StyledEditTodo = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  // backdrop-filter: blur(2px);
  background-color: rgba(37, 37, 37, 0.7);
  z-index: 10;
  h3 {
    font-size: 24px;
    text-align: center;
    padding-bottom: 25px;
  }
  .createModal {
    width: 30%;
    min-width: 327px;
    position: absolute;
    border: 1px solid #534cc2;
    border-radius: 16px;
    padding: 18px 36px;
    background-color: white;
    top: 10%;
    z-index: 100;
  }
  .inputTodo {
    border: 1px solid #534cc2;
    border-radius: 5px;
    width: 100%;
    padding: 8px 16px;
  }
  .buttonArea {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    margin-top: 128px;
  }
  .buttonArea button {
    border: 1px solid #534cc2;
    border-radius: 5px;
    font-size: 18px;
    padding: 10px 22px;
    cursor: pointer;
  }
  .cancelBtn {
    color: #534cc2;
    background: none;
  }
  .submitBtn {
    color: white;
    background-color: #534cc2;
  }
`;
const EditTodo: React.FC = () => {
  const { editModalStatus, closeModal } = useEditModalStore();
  const { edit } = useTodo();
  // const { userId } = useUserStore();
  const user = useUserStore((state) => state.user);
  const [content, setContent] = useState('');
  const handleTodoSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    edit(user.id, content);
    closeModal();
  };
  if (!editModalStatus) return null;
  return (
    <StyledEditTodo>
      <div className="createModal">
        <h3>EDIT NOTE</h3>
        <form onSubmit={handleTodoSubmit}>
          <input
            type="text"
            className="inputTodo"
            placeholder="Input youre note..."
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="buttonArea">
            <button className="cancelBtn" onClick={closeModal}>
              CANCEL
            </button>
            <button
              type="submit"
              className="submitBtn"
              onSubmit={handleTodoSubmit}
            >
              APPLY
            </button>
          </div>
        </form>
      </div>
    </StyledEditTodo>
  );
};

export default EditTodo;
