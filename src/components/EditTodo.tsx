import useTodo from 'hooks/useTodo';
import React, { useState } from 'react';
import useEditModalStore from 'stores/useEditModalStore';
import useEditTodoStore from 'stores/useEditTodoStore';
import useModalStore from 'stores/useModalStore';
import useNightModeStore from 'stores/useNightModeStore';
import useUserStore from 'stores/useUserStore';
import { styled } from 'styled-components';

const StyledEditTodo = styled.div<{ isNightMode: boolean }>`
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
    background-color: ${({ isNightMode }) =>
      isNightMode ? '#252525' : 'white'};
    color: ${({ isNightMode }) => (isNightMode ? 'white' : 'black')};
    top: 10%;
    z-index: 100;
  }
  .inputTodo {
    border: 1px solid #534cc2;
    border-radius: 5px;
    width: 100%;
    background-color: ${({ isNightMode }) =>
      isNightMode ? '#252525' : 'white'};
    color: ${({ isNightMode }) => (isNightMode ? 'white' : 'black')};
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
  const { todoId, content } = useEditTodoStore();
  const [editContent, setEditContent] = useState('');
  const { isNightMode } = useNightModeStore();
  const handleTodoSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    edit(todoId, editContent);
    closeModal();
  };
  if (!editModalStatus) return null;
  return (
    <StyledEditTodo isNightMode={isNightMode}>
      <div className="createModal kanit-medium">
        <h3>EDIT NOTE</h3>
        <form onSubmit={handleTodoSubmit}>
          <input
            type="text"
            className="inputTodo"
            placeholder="Input youre note..."
            defaultValue={content}
            onChange={(e) => setEditContent(e.target.value)}
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
              EDIT
            </button>
          </div>
        </form>
      </div>
    </StyledEditTodo>
  );
};

export default EditTodo;
