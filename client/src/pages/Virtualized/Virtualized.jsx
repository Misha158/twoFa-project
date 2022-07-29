import React from "react";
import { loremIpsum } from "lorem-ipsum";
import { FixedSizeList as List } from "react-window";
import { Card, Layout } from "../../components";
import "./style.css";

const rowCount = 5000;

const list = Array(rowCount)
  .fill()
  .map((val, idx) => {
    return {
      id: idx,
      name: "John Doe",
      image: "http://via.placeholder.com/40",
      text: loremIpsum({
        count: 1,
        units: "sentences",
        sentenceLowerBound: 4,
        sentenceUpperBound: 8,
      }),
    };
  });

const Row = ({ index, style }) => {
  return (
    <div style={style} className="containerVirtualizing">
      <div className="image">
        <img src="http://via.placeholder.com/40" alt="" />
      </div>
      <div className="content">
        <div>John Doe {index}</div>
        <div>{list[index]?.text}</div>
      </div>
    </div>
  );
};

export const Virtualized = () => {
  return (
    <Layout title="Virtualized">
      <Card>
        <div className="list">
          <List height={550} itemCount={rowCount} itemSize={60} width={"100%"}>
            {Row}
          </List>
        </div>
      </Card>
    </Layout>
  );
};
