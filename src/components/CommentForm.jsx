import React, { useEffect, useState } from "react";
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
  const [spaceCheck, setSpaceCheck] = useState(true);

  useEffect(() => {
    if (!userName || !body) setSpaceCheck(true);
    else setSpaceCheck(false);
  }, [spaceCheck, body, userName]);

  const onSubmitComment = (e) => {
    e.preventDefault();
    submitFn({ userName, body, reset });
  };

  return (
    <CommentFormWrapper onSubmit={onSubmitComment}>
      <CommentNameInput
        type="text"
        name="userName"
        value={userName}
        placeholder="닉네임"
        onChange={onChange}
        maxLength={3}
      ></CommentNameInput>
      <CommentInput
        type="text"
        name="body"
        value={body}
        placeholder="코멘트를 입력 해주세요"
        onChange={onChange}
        maxLength={40}
      ></CommentInput>
      <ButtonComment disabled={spaceCheck}>{btnName}</ButtonComment>
    </CommentFormWrapper>
  );
}

export default CommentForm;
