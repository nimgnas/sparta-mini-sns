import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Writing from "./Writing";
import Feed from "./Feed";

function Layout() {
    return (
        <LayoutContainer>
            <Header />
            <Writing />
            <Feed />
            <Feed />
        </LayoutContainer>
    );
};

export default Layout;

const LayoutContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0px;
`;