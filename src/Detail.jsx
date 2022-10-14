import styled from "styled-components";

const ContentBox = styled.div`
  width: 600px;
  border: 1px solid black;
  height: 550px;
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

const CommentForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;

  button {
    margin-left: auto;
  }
`;

const CommentInput = styled.input`
  padding: 10px;
  width: 400px;
`;

const CommentNameInput = styled.input`
  width: 70px;
  padding: 10px;
`;

const SubmitButton = styled.button`
  background-color: inherit;
  border: 1px solid black;
  width: fit-content;
  cursor: pointer;
  border-radius: 5px;
  padding: 0px 10px;
`;

const CommentList = styled.div``;

const CommentWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const CommentName = styled.h3``;

const Comment = styled.span``;

const CommentBtnGroup = styled.div``;

function Detail() {
  return (
    <ContentBox>
      <WriterName>윤상민</WriterName>
      <ImgWrapper>
        <Img src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/32E9/image/BA2Qyx3O2oTyEOsXe2ZtE8cRqGk.JPG"></Img>
      </ImgWrapper>
      <LikeButton>♥️</LikeButton>
      <CommentForm>
        <CommentNameInput placeholder="닉네임"></CommentNameInput>
        <CommentInput placeholder="코멘트를 입력 해주세요"></CommentInput>
        <SubmitButton>등록</SubmitButton>
      </CommentForm>
      <CommentList>
        <CommentWrapper>
          <CommentName>이용자: </CommentName>
          <Comment>테스트요테스트요테스트요테스트요테스트요테스트요</Comment>
          <CommentBtnGroup></CommentBtnGroup>
        </CommentWrapper>
      </CommentList>
    </ContentBox>
  );
}

export default Detail;
