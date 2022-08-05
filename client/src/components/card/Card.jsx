import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { PieChartGradient } from "../charts/pieChartGradient/PieChartGradient";
import { Grid } from "antd";

export const Card = ({ children, title, withSmallPiechart }) => {
  const { useBreakpoint } = Grid;
  const { sm, xs, md } = useBreakpoint();
  const isMobile = !md && (sm || xs);

  const [isOpenCard, setIsOpenCard] = useState(!isMobile);

  const onClickCard = () => {
    setIsOpenCard((prev) => !prev);
  };

  const parrentRef = useRef(null);

  return (
    <div
      style={
        isMobile
          ? {
              height: isOpenCard
                ? `${parrentRef?.current?.scrollHeight}px`
                : "51px",
              padding: "10px",
              margin: "20px 0",
              transition: "height 0.3s ease-in-out",
              overflow: "hidden",
              border: "1px solid skyblue",
            }
          : {
              margin: "20px 0",
              transition: "height 0.3s ease-in-out",
              overflow: "none",
              border: "1px solid skyblue",
            }
      }
      className="parrent"
      ref={parrentRef}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "beige",
          padding: "20px",
          // border: isOpenCard ? "1px solid skyblue" : "none",
        }}
        onClick={isMobile ? onClickCard : null}
        className="child"
      >
        {withSmallPiechart && !isMobile && <PieChartGradient size="small" />}
        <h2
          style={{
            marginBottom: 0,
            minHeight: "33px",
            padding: "5px 10px 10px 10px",
            backgroundColor: "beige",
            // border: isOpenCard ? "none" : "1px solid skyblue",
          }}
        >
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </div>
  );
};
