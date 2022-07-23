import React from "react";
import { Layout } from "../../components/layout/Layout";
import { Card } from "../../components/card/Card";
import { PieChart } from "../../components/pieChart/PieChart";

export const Dashboard = () => {
  return (
    <Layout title="Dashboard">
      <Card>
        <PieChart />
      </Card>
    </Layout>
  );
};
