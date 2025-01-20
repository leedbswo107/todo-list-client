import React from 'react';
import useModalStore from 'stores/useModalStore';
import { styled } from 'styled-components';

const StyledCreateTodo = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(2px);
  z-index: 10;
  h3 {
    font-size: 24px;
    text-align: center;
    padding-bottom: 25px;
  }
  .createModal {
    width: 30%;
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
const CreateTodo: React.FC = () => {
  const { modalStatus, closeModal } = useModalStore();
  if (!modalStatus) return null;
  return (
    <StyledCreateTodo>
      <div className="createModal">
        <h3>NEW NOTE</h3>
        <input
          type="text"
          className="inputTodo"
          placeholder="Input youre note..."
        />
        <div className="buttonArea">
          <button className="cancelBtn" onClick={closeModal}>
            CANCEL
          </button>
          <button type="submit" className="submitBtn">
            APPLY
          </button>
        </div>
      </div>
    </StyledCreateTodo>
  );
};

export default CreateTodo;
