import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __deletePost } from "../redux/modules/posts";

const Feed = ({post}) => {
    const dispatch = useDispatch();

    const onPostDelete = (event) => {
        event.preventDefault();
        dispatch(__deletePost({
            id: post.id
        }))
    }

    return (
        <FeedWrap key={post.id}>
            <FeedWriter>
                <WriteUser>{post.name}</WriteUser>
                <FeedButton>
                    <DelButton onClick={onPostDelete}>💣</DelButton>
                    <ModifyButton>🔧</ModifyButton>
                </FeedButton>
            </FeedWriter>
            <FeedImage>
                그림
            </FeedImage>
            <FeedInfo>
                <ImageInfo>
                <ImageDescription>{post.content}</ImageDescription>
                <ImageLike>💖 3</ImageLike>
                <ImageComment>댓글 3개</ImageComment>
                </ImageInfo>
            </FeedInfo>
        </FeedWrap>
    );
};

export default Feed;

const FeedWrap = styled.div`
    width: 60%;
    height: 500px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding: 20px;
    margin-top: 40px;
`;

const FeedWriter = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const WriteUser = styled.span`
    font-size: 20px;
`;

const FeedButton = styled.div`
    width: 150px;
    height: 30px;
`;

const DelButton = styled.button`
    font-size: 16px;
    margin-left: 35px;
`;

const ModifyButton = styled.button`
    font-size: 16px;
    margin-left: 15px;
`;

const FeedImage = styled.div`
    width: 100%;
    height: 300px;
    margin-top: 25px;
    margin-bottom: 10px;
`;

const FeedInfo = styled.div`
    width: 100%;
    height: 100px;
    padding: 15px;
`;

const ImageInfo = styled.div`
    width: 100%;
    height: 100%;
`;

const ImageDescription = styled.p`
    font-size: 20px;
    margin-bottom: 30px;
`;

const ImageLike = styled.span`
    font-size: 20px;
    margin-right: 50px;
`;

const ImageComment = styled.span`
    font-size: 20px;
`;