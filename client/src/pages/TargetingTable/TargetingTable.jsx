import React, { useState } from "react";
import { Button, Select } from "antd";
import { Card, Layout } from "../../components";

const { Option } = Select;

const subCategoryMap = {
  sports: ["football", "basketball", "valley"],
  games: ["tf2", "dota2", "CS:GO"],
  movies: ["scary 2", "titanic", "wolf from wall street"],
  science: ["math", "biology", "physics"],
};

export const TargetingTable = () => {
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const [multiplyValues, setMultiplyValues] = useState(null);

  const handleChangeCategory = (category) => {
    console.log(`selected ${category}`);
    setCategory(category);
  };

  const handleChangeSubCategory = (subCategory) => {
    console.log(`selected ${subCategory}`);
    setSubCategory(subCategory);
  };
  const handleChangeMultiple = (multiple) => {
    console.log(`selected ${multiple}`);
    setMultiplyValues(multiple);
  };

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
        >
          Insert
        </Button>
      </Card>
    </Layout>
  );
};
