import React from "react";
import styled from "styled-components";

function Writing() {
    return(
        <WritingForm>
            <WriteButton>글쓰기 버튼</WriteButton>
        </WritingForm>
    );
};

export default Writing;

const WritingForm = styled.form`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const WriteButton = styled.button`
    width: 40%;
    height: 50px;
    background-color: orange;
`;