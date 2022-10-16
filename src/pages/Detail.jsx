import styled from "styled-components";
import Layout from "../components/ui/Layout";
import Comment from "../components/Comment";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __addComment, __getComments } from "../redux/modules/comments";
import CommentForm from "../components/CommentForm";

const ContentBox = styled.div`
  width: 600px;
  border: 1px solid black;
  margin: 0 auto;
  padding: 10px;
  border-radius: 5px;
`;

const WriterName = styled.h3`
  margin-bottom: 10px;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const LikeButton = styled.h3`
  cursor: pointer;
  margin-bottom: 10px;
`;

const CommentList = styled.div``;

function Detail() {
  const { comments, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(isLoading);

  // TODO: comment 작성시 스크롤 맨밑으로

  useEffect(() => {
    dispatch(__getComments(1));
    // TODO: postId값 변경
  }, [dispatch]);

  const onSubmitComment = ({ userName, body, reset }) => {
    const comment = {
      userName,
      body,
      postId: 1,
    };
    // TODO: postId값 변경
    dispatch(__addComment(comment));
    reset();
  };

  return (
    <Layout>
      <ContentBox>
        <WriterName>윤상민</WriterName>
        <ImgWrapper>
          <Img src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/32E9/image/BA2Qyx3O2oTyEOsXe2ZtE8cRqGk.JPG"></Img>
        </ImgWrapper>
        <LikeButton>♥️</LikeButton>
        <CommentForm submitFn={onSubmitComment} btnName="등록" />
        <CommentList>
          {!isLoading &&
            comments.map((comment) => (
              <Comment
                key={comment.id}
                id={comment.id}
                userName={comment.userName}
                body={comment.body}
              />
            ))}
        </CommentList>
      </ContentBox>
    </Layout>
  );
}

export default Detail;
