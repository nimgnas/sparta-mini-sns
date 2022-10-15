import React from "react";
import styled from "styled-components";
import ButtonComment from "./ButtonComment";
import useInputs from "./useInputs";

const CommentFormWrapper = styled.form`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const CommentInput = styled.input`
  padding: 10px;
  width: 400px;
`;

const CommentNameInput = styled.input`
  width: 70px;
  padding: 10px;
`;

function CommentForm({ submitFn, initialState, btnName }) {
  const [{ userName, body }, onChange, reset] = useInputs({
    userName: initialState?.userName || "",
    body: initialState?.body || "",
  });

  const onSubmitComment = (e) => {
    e.preventDefault();
    submitFn({ userName, body, reset });
  };

  return (
    <CommentFormWrapper onSubmit={onSubmitComment}>
      <CommentNameInput
        name="userName"
        value={userName}
        placeholder="닉네임"
        onChange={onChange}
      ></CommentNameInput>
      <CommentInput
        name="body"
        value={body}
        placeholder="코멘트를 입력 해주세요"
        onChange={onChange}
      ></CommentInput>
      <ButtonComment>{btnName}</ButtonComment>
    </CommentFormWrapper>
  );
}

export default CommentForm;
