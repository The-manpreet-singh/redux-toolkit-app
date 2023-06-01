import React from "react";
import styled from "styled-components";
import { deleteUsers } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";

export const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteAllUsers = () => {
    dispatch(deleteUsers());
  };
  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={deleteAllUsers}>
        clear users
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`;
