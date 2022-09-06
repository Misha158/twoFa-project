import React, { useState } from "react";
import { Button, Select } from "antd";
import { Card, Layout } from "../../components";
import { Table } from "./components/Table";

const { Option } = Select;

const subCategoryMap = {
  sports: ["football", "basketball", "valley"],
  games: ["tf2", "dota2", "CS:GO"],
  movies: ["scary 2", "titanic", "wolf from wall street"],
  science: ["math", "biology", "physics"],
};

const dataSource = [
  {
    key: "1",
    category: "Mike",
    subCategory: 32,
    multiplyValues: "10 Downing Street",
  },
];

export const TargetingTable = () => {
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const [multiplyValues, setMultiplyValues] = useState(null);
  const [dataForTable, setDataForTable] = useState(null);

  const handleChangeCategory = (category) => {
    console.log(`selected ${category}`);
    setCategory(category);
  };

  const handleChangeSubCategory = (subCategory) => {
    console.log(`selected ${subCategory}`);
    setSubCategory(subCategory);
  };
  const handleChangeMultiple = (multiple) => {
    setMultiplyValues(multiple);
  };

  const handleInsertTable = () => {
    const objData = {
      key: dataForTable ? dataForTable?.length + 1 : 1,
      category: category,
      subCategory: subCategory,
      multiplyValues: `${multiplyValues}`?.split(","),
    };

    setDataForTable((prev) => (prev ? [...prev, objData] : [objData]));
  };

  console.log(dataForTable);

  return (
    <Layout>
      <Card>
        <Select
          placeholder="Category"
          onChange={handleChangeCategory}
          style={{ width: "200px", marginRight: "20px" }}
        >
          <Option value="sports">Sports</Option>
          <Option value="movies">Movies</Option>
          <Option value="science">Science</Option>
          <Option value="games">Games</Option>
        </Select>

        <Select
          placeholder="Subcategory"
          onChange={handleChangeSubCategory}
          style={{ width: "200px", marginRight: "20px" }}
          disabled={!subCategoryMap[category]}
        >
          {subCategoryMap[category]?.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>

        <Select
          mode="multiple"
          placeholder="multyValue"
          onChange={handleChangeMultiple}
          style={{ width: "200px", marginRight: "20px" }}
          disabled={!subCategory}
        >
          <Option value="test">test</Option>
          <Option value="test2">test2</Option>
          <Option value="test3">test3</Option>
        </Select>

        <Button
          type="danger"
          style={{ width: "100px", backgroundColor: "red", color: "white" }}
          disabled={!multiplyValues}
          onClick={handleInsertTable}
        >
          Insert
        </Button>

        <div style={{ marginTop: "20px" }}>
          <Table />
        </div>
      </Card>
    </Layout>
  );
};
