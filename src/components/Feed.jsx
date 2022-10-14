import React from "react";
import styled from "styled-components";

function Feed() {
    return(
        <FeedContainer>
            <FeedContent>
                <FeedWriter>작성자 이름</FeedWriter>
                <FeedInfoContainer>
                    <FeedImage>사진이 들어갈 자리입니다</FeedImage>
                    <FeedInfo>
                        <h3>사진설명</h3>
                        <p>❤ (좋아요 수) <span>댓글 10개</span></p>
                    </FeedInfo>
                </FeedInfoContainer>
            </FeedContent>
        </FeedContainer>
    );
};

export default Feed;

const FeedContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const FeedContent = styled.div`
    width: 40%;
    height: 620px;
    background-color: green;
    margin: 15px 0px;
`;

const FeedWriter = styled.p`
    width: 100px;
    height: 30px;
    background-color: yellow;
    margin-left: 37px;
`;

const FeedInfoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const FeedImage = styled.div`
    width: 90%;
    height: 400px;
    background-color: violet;
    margin: 0px 15px;;
`;

const FeedInfo = styled.div`
    width: 90%;
    height: 120px;
    background-color: aqua;
    margin-top: 15px;
`;

