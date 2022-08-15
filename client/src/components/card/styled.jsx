import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin: 20px 0px;
  padding: ${({ isMobile }) => (isMobile ? "15px" : "20px")};
  background-color: beige;
  border: 1px solid skyblue;
`;

export const Title = styled.h2`
  margin-bottom: 0;
`;

export const Parent = styled.div`
  margin-top: ${({ isMobile, isOpenCard }) =>
    (isMobile && isOpenCard) || !isMobile ? "20px" : ""};
  overflow: ${({ md }) => (md ? "" : "hidden")};
  transition: ${({ md }) => (md ? "" : "all 0.3s ease")};

  ${({ isOpenCard, parrentRef, md }) =>
    md
      ? `height: auto`
      : ` height: ${isOpenCard ? `${parrentRef?.current?.scrollHeight}px` : 0}`}
`;
