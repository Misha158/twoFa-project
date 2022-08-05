import React from "react";
import { Layout, Card, PieChart, PieChartGradient } from "../../components";
import { Col, Row, Statistic, Grid } from "antd";
import styled from "styled-components";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/all";
import { Line } from "../../components/charts/line/Line";

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 20px 40px;
  margin: 0 20px 20px 20px;
  background-color: #1890ff;
  border-radius: 10px;
  color: white;

  .ant-statistic-title {
    color: ${({ isGrow }) => (isGrow ? "rgb(142, 255, 86)" : "darkred")};
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const getValueForStatistic = () => {
  return Math.floor(Math.random() * (100 + 1));
};

const cards = [
  {
    name: "Customers",
    value: Math.floor(Math.random() * (10000 + 1)),
    diff: getValueForStatistic(),
  },
  {
    name: "Products",
    value: Math.floor(Math.random() * (10000 + 1)),
    diff: getValueForStatistic(),
  },
  {
    name: "Sales",
    value: Math.floor(Math.random() * (10000 + 1)),
    diff: getValueForStatistic(),
  },
  {
    name: "Benefits",
    value: Math.floor(Math.random() * (10000 + 1)),
    diff: getValueForStatistic(),
  },
  {
    name: "Benefits",
    value: Math.floor(Math.random() * (10000 + 1)),
    diff: getValueForStatistic(),
  },
];

export const Dashboard = () => {
  return (
    <Layout title="Dashboard">
      <Card title="Dashboard">
        <Row style={{ display: "flex" }}>
          <Col xxl={4} xl={6} lg={8} md={24} sm={24} xs={24}>
            <PieChartGradient title="score" />
          </Col>
          <Col
            xxl={20}
            xl={18}
            lg={16}
            md={24}
            sm={24}
            xs={24}
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {cards.map((card) => (
              <ItemContainer isGrow={card.diff > 50} key={card.value}>
                <div>
                  <div style={{ fontWeight: "600", fontSize: 18 }}>
                    {card.name}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 40 }}>
                    {card.value}
                  </div>
                </div>
                <Statistic
                  title={card.diff > 50 ? "Grow" : "Down"}
                  value={card.diff}
                  precision={2}
                  valueStyle={{ color: card.diff > 50 ? "#8eff56" : "darkred" }}
                  prefix={
                    card.diff > 50 ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )
                  }
                  suffix="%"
                />
              </ItemContainer>
            ))}
          </Col>
        </Row>
      </Card>

      <Card title="charts" withSmallPiechart>
        <Row style={{ display: "flex", justifyContent: "space-between" }}>
          <Col>
            <PieChart title="Users" />
          </Col>
          <Col>
            <PieChart title="Money" />
          </Col>
        </Row>
      </Card>
    </Layout>
  );
};

{
  /*          <Col span={24}>
            <Line title="Bitcoin" />
          </Col>*/
}
