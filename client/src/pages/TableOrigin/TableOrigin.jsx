import React from "react";
import { Card, Layout } from "../../components";

export const TableOrigin = () => {
  return (
    <Layout>
      <Card>
        <table style={{ width: "100%", border: "1px solid black" }}>
          <thead>
            <th style={{ border: "1px solid black" }}>Курс обучения</th>
            <th style={{ border: "1px solid black" }}>Дни</th>
            <th style={{ border: "1px solid black" }}>Часы</th>
            <th style={{ border: "1px solid black" }}>Ранняя регистрация</th>
            <th style={{ border: "1px solid black" }}>Поздняя регистрация</th>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black" }}>Misha</td>

              <td style={{ border: "1px solid black" }}>Sv</td>

              <td style={{ border: "1px solid black" }}>25</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </Layout>
  );
};
