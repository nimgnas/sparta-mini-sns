import React from "react";
import styled from "styled-components";

function Header() {
    
    return (
        <HeaderNav>
            헤더입니다
        </HeaderNav>
    );
};

export default Header;

const HeaderNav = styled.div`
    width: 100%;
    height: 100px;
    background-color: black;
    margin-bottom: 20px;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;