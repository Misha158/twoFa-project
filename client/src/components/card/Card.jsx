import React, { useRef, useState } from "react";
import { Grid } from "antd";
import { PieChartGradient } from "../charts/pieChartGradient/PieChartGradient";
import { Content, Title, Wrapper } from "./styled";

export const Card = ({ children, title, withSmallPiechart }) => {
  const { useBreakpoint } = Grid;
  const { sm, xs, md } = useBreakpoint();
  const isMobile = !md && (sm || xs);

  const [isOpenCard, setIsOpenCard] = useState(false);

  const onClickCard = () => {
    setIsOpenCard((prev) => !prev);
  };

  const parrentRef = useRef(null);

  return (
    <Wrapper onClick={onClickCard} isMobile={isMobile}>
      <PieChartGradient size="small" />
      <Title>{title || "Hello content"}</Title>
      <Content
        isMobile={isMobile}
        isOpenCard={isOpenCard}
        parrentRef={parrentRef}
        md={md}
      >
        <div ref={parrentRef}>{children}</div>
      </Content>
    </Wrapper>
  );
};
