import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Feed from "./Feed";
import { __getPost } from "../redux/modules/posts";

const FeedList = () => {
    const dispatch = useDispatch();
    const feedList = useSelector((state) => state.postReducer );

    useEffect(() => {
        dispatch(__getPost());
    }, [dispatch]);

    return (
        <FeedContainer>
            {feedList.map((post) => <Feed key={post.id} post={post} /> )}
        </FeedContainer>
    )
}

export default FeedList;

const FeedContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;