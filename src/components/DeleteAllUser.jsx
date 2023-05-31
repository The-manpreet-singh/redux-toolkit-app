import React from "react";
import styled from "styled-components";

export const DeleteAllUser = () => {
  return (
    <Wrapper>
      <button className="btn clear-btn">clear users</button>
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
