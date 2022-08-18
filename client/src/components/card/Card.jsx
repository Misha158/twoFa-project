import React, { useEffect, useRef, useState } from "react";
import { Grid } from "antd";
import { PieChartGradient } from "../charts/pieChartGradient/PieChartGradient";
import { Parent, Title, Wrapper } from "./styled";
import { useNavigate } from "react-router-dom";
import RouterStore from "../../store/RouterStore";
import { toJS } from "mobx";

export const Card = ({ children, title, withSmallPiechart }) => {
  const { useBreakpoint } = Grid;
  const navigate = useNavigate();
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

  const onGoBack = () => {
    RouterStore.goBack();
    navigate(-1);
  };
  // console.log(toJS(RouterStore.routes));

  // console.log(RouterStore.routes[RouterStore.routes.length - 2]);

  console.log(toJS(RouterStore.routes.length));

  return (
    <Wrapper onClick={onClickCard} isMobile={isMobile}>
      <PieChartGradient size="small" />
      <Title>{title || "Hello content"}</Title>

      {RouterStore.routes.length > 1 && (
        <span
          style={{ color: "red", fontWeight: 600, cursor: "pointer" }}
          onClick={onGoBack}
        >
          Go back {RouterStore.prevPage}
        </span>
      )}

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
