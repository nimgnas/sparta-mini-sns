import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __deleteComment, __updateComment } from "../redux/modules/comments";
import CommentForm from "./CommentForm";

const CommentWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 5px 0px;
  align-items: center;
`;

const CommentName = styled.h3`
  width: 70px;
  padding: 10px;
`;

const CommentBtnGroup = styled.div`
  display: flex;
  margin-left: auto;
  gap: 5px;
`;

const CommentText = styled.span``;

const ButtonBase = styled.button`
  border: 1px solid black;
  width: fit-content;
  cursor: pointer;
  border-radius: 5px;
  padding: 0px 10px;
`;

const UpdateBtn = styled(ButtonBase)`
  background-color: #9a9aff;
`;

const DeleteBtn = styled(ButtonBase)`
  background-color: tomato;
`;

function Comment({ id, userName, body }) {
  const [updateCheck, setUpdateCheck] = useState(false);

  const dispatch = useDispatch();
  const onDeleteClick = () => {
    dispatch(__deleteComment(id));
  };

  const onUpdateClick = () => {
    setUpdateCheck(true);
  };

  const onUpdateSubmit = ({ userName, body }) => {
    const updateComment = {
      id,
      userName,
      body,
    };
    dispatch(__updateComment(updateComment));
    setUpdateCheck(false);
  };

  const initialState = {
    userName,
    body,
  };

  return (
    <CommentWrapper>
      {updateCheck ? (
        <CommentForm
          submitFn={onUpdateSubmit}
          initialState={initialState}
          btnName="업데이트"
        />
      ) : (
        <>
          <CommentName>{userName}: </CommentName>
          <CommentText>{body}</CommentText>
          <CommentBtnGroup>
            <UpdateBtn onClick={onUpdateClick}>수정</UpdateBtn>
            <DeleteBtn onClick={onDeleteClick}>삭제</DeleteBtn>
          </CommentBtnGroup>
        </>
      )}
    </CommentWrapper>
  );
}

export default Comment;
