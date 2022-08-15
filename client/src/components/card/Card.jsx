import React, { useEffect, useRef, useState } from "react";
import { Grid } from "antd";
import { PieChartGradient } from "../charts/pieChartGradient/PieChartGradient";
import { Parent, Title, Wrapper } from "./styled";

export const Card = ({ children, title, withSmallPiechart }) => {
  const { useBreakpoint } = Grid;
  const { sm, xs, md } = useBreakpoint();
  const isMobile = !md && (sm || xs);

  const [isOpenCard, setIsOpenCard] = useState(true);

  const onClickCard = () => {
    setIsOpenCard((prev) => !prev);
  };

  const parrentRef = useRef(null);

  useEffect(() => {
    if (!md) {
      setIsOpenCard(false);
    }
  }, [md]);

  return (
    <Wrapper onClick={onClickCard} isMobile={isMobile}>
      <PieChartGradient size="small" />
      <Title>{title || "Hello content"}</Title>
      <Parent
        isMobile={isMobile}
        isOpenCard={isOpenCard}
        parrentRef={parrentRef}
        md={md}
      >
        <div ref={parrentRef}>{children}</div>
      </Parent>
    </Wrapper>
  );
};
